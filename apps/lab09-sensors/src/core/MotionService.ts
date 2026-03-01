import type { AccelSample } from "./types";
import { Capacitor } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export class MotionService {
  private remove?: () => void;

  private async requestWebMotionPermissionIfNeeded() {
    const anyDM = DeviceMotionEvent as any;
    if (typeof anyDM?.requestPermission === "function") {
      const res = await anyDM.requestPermission();
      if (res !== "granted") throw new Error("Motion permission not granted");
    }
  }

  async start(cb: (s: AccelSample) => void): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      const handler = await Motion.addListener("accel", (event) => {
        const a = event.accelerationIncludingGravity;
        if (!a) return;
        cb({ ax: a.x ?? 0, ay: a.y ?? 0, az: a.z ?? 0, t: Date.now() });
      });
      this.remove = () => handler.remove();
      return;
    }

    // Web iPhone Safari
    await this.requestWebMotionPermissionIfNeeded();

    const handler = (e: DeviceMotionEvent) => {
      const a = e.accelerationIncludingGravity;
      if (!a) return;
      cb({ ax: a.x ?? 0, ay: a.y ?? 0, az: a.z ?? 0, t: Date.now() });
    };

    window.addEventListener("devicemotion", handler);
    this.remove = () => window.removeEventListener("devicemotion", handler);
  }

  async stop(): Promise<void> {
    this.remove?.();
    this.remove = undefined;
  }
}