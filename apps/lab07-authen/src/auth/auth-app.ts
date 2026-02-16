import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "../firebase";

import type {
  IAuthService,
  AuthUser,
  EmailPasswordCredentials,
  PhoneCredentials,
} from "./auth-interface";

/* ------------------ helper ------------------ */
function mapUser(u: User): AuthUser {
  return {
    uid: u.uid,
    email: u.email ?? null,
    phoneNumber: u.phoneNumber ?? null,
    displayName: u.displayName ?? null,
    photoUrl: u.photoURL ?? null,
  };
}

let confirmationResult: any;

/* ------------------ service ------------------ */
export class FirebaseAppAuthService implements IAuthService {
  async getCurrentUser(): Promise<AuthUser | null> {
    const user = auth.currentUser;
    return user ? mapUser(user) : null;
  }

  async loginWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {
    const result = await signInWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );
    return mapUser(result.user);
  }

  async loginWithGoogle(): Promise<AuthUser> {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return mapUser(result.user);
  }

  /* ---------- PHONE OTP ---------- */
  async startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }> {
    // สร้าง recaptcha ถ้ายังไม่มี
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "normal" },
        auth
      );
    }

    confirmationResult = await signInWithPhoneNumber(
      auth,
      creds.phoneNumberE164,
      (window as any).recaptchaVerifier
    );

    return { verificationId: "web-confirmation" };
  }

  async confirmPhoneCode(payload: {
    verificationId: string;
    verificationCode: string;
  }): Promise<AuthUser> {
    const result = await confirmationResult.confirm(
      payload.verificationCode
    );
    return mapUser(result.user);
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }
}
