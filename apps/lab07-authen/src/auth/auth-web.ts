import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import type {
  IAuthService,
  EmailPasswordCredentials,
  PhoneCredentials,
  AuthUser,
} from "./auth-interface";
import { auth } from "../firebase";

let recaptchaVerifier: RecaptchaVerifier | null = null;
let confirmationResult: ConfirmationResult | null = null;

function mapUser(u: any): AuthUser {
  return {
    uid: u.uid,
    email: u.email ?? null,
    phoneNumber: u.phoneNumber ?? null,
    displayName: u.displayName ?? null,
    photoUrl: u.photoURL ?? null,
  };
}

export class FirebaseWebAuthService implements IAuthService {
  async getCurrentUser(): Promise<AuthUser | null> {
    return auth.currentUser ? mapUser(auth.currentUser) : null;
  }

  async loginWithEmailPassword(
    creds: EmailPasswordCredentials
  ): Promise<AuthUser> {
    const { user } = await signInWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );
    return mapUser(user);
  }

  async loginWithGoogle(): Promise<AuthUser> {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return mapUser(user);
  }

  async startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }> {
    // ✅ Firebase v9: auth ต้องเป็น argument ตัวแรก
    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );

      // ⭐ จำเป็นมาก ไม่งั้นจะเจอ error เดิม
      await recaptchaVerifier.render();
    }

    confirmationResult = await signInWithPhoneNumber(
      auth,
      creds.phoneNumberE164,
      recaptchaVerifier
    );

    return { verificationId: confirmationResult.verificationId };
  }

  async confirmPhoneCode(payload: {
    verificationId: string;
    verificationCode: string;
  }): Promise<AuthUser> {
    if (!confirmationResult) {
      // เผื่อ user refresh หน้า
      const credential = PhoneAuthProvider.credential(
        payload.verificationId,
        payload.verificationCode
      );
      const { user } = await signInWithCredential(auth, credential);
      return mapUser(user);
    }

    const r = await confirmationResult.confirm(
      payload.verificationCode
    );
    return mapUser(r.user);
  }

  async logout(): Promise<void> {
    confirmationResult = null;

    if (recaptchaVerifier) {
      recaptchaVerifier.clear();
      recaptchaVerifier = null;
    }

    await auth.signOut();
  }
}
