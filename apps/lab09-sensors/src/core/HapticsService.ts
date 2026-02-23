import { Haptics, NotificationType } from "@capacitor/haptics";

export class HapticsService {
  async success() {
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch (e) {
      console.log("Haptics success not available:", e);
    }
  }

  async warning() {
    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch (e) {
      console.log("Haptics warning not available:", e);
    }
  }
}