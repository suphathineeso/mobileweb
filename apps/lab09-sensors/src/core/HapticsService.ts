import { Haptics, NotificationType } from "@capacitor/haptics";
import { Capacitor } from "@capacitor/core";

export class HapticsService {
  private webFallback(pattern: number | number[]) {
    // iOS Safari ส่วนใหญ่ไม่รองรับ navigator.vibrate แต่ใส่ไว้ไม่เสียหาย
    if ("vibrate" in navigator) {
      // @ts-ignore
      navigator.vibrate(pattern);
    }
  }

  async success() {
    // ถ้าเป็น native (Android/iOS app) ใช้ Haptics ได้เต็ม
    if (Capacitor.isNativePlatform()) {
      await Haptics.notification({ type: NotificationType.Success });
      return;
    }

    // ถ้าเป็นเว็บ: ลองเรียก Haptics ก่อน (บาง platform อาจทำงานได้)
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {
      console.log("Haptics success not available (web), fallback:", e);
      this.webFallback(20); // fallback เล็กๆ
    }
  }

  async warning() {
    if (Capacitor.isNativePlatform()) {
      await Haptics.notification({ type: NotificationType.Warning });
      return;
    }

    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) {
      console.log("Haptics warning not available (web), fallback:", e);
      this.webFallback([30, 40, 30]);
    }
  }
}