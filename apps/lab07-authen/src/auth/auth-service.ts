import { Capacitor } from "@capacitor/core";
import type { IAuthService } from "./auth-interface";
import { FirebaseWebAuthService } from "./auth-web";
import { FirebaseAppAuthService } from "./auth-app";

// ใช้ getPlatform() จะไม่พลาดตอน ionic serve
function isNative(): boolean {
  const platform = Capacitor.getPlatform();
  return platform === "android" || platform === "ios";
}

export const authService: IAuthService = isNative()
  ? new FirebaseAppAuthService()   // Android / iOS เท่านั้น
  : new FirebaseWebAuthService();  // Browser / ionic serve

  