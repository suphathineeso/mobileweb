import type { AccelSample } from "./types";

export class MockMotionService {
  private timer?: number;
  private running = false;

  async start(cb: (s: AccelSample) => void): Promise<void> {
    this.running = true;
    const t0 = Date.now();

    // จำลองการยกขึ้นลงเป็นคลื่น (sin) + noise เล็กน้อย
    this.timer = window.setInterval(() => {
      if (!this.running) return;
      const t = Date.now();
      const dt = (t - t0) / 1000;

      // ay ขึ้นลงประมาณ -3 ถึง +3
      const ay = 3.2 * Math.sin(dt * 2.5); // ปรับความเร็วได้
      const ax = 0.3 * Math.sin(dt * 1.3);
      const az = 0.4 * Math.cos(dt * 1.7);

      const sample: AccelSample = {
        ax,
        ay,
        az,
        t,
      };

      cb(sample);
    }, 80);
  }

  async stop(): Promise<void> {
    this.running = false;
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}