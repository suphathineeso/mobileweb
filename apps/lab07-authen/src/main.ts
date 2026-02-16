import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "./firebase";

let confirmationResult: any;

// ---------- GOOGLE LOGIN ----------
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  alert("Google Login สำเร็จ");
  console.log(result.user);
}

// ---------- SETUP RECAPTCHA ----------
export function setupRecaptcha() {
  (window as any).recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha",
    { size: "normal" },
    auth
  );
}

// ---------- SEND OTP ----------
export async function sendOtp(phone: string) {
  const appVerifier = (window as any).recaptchaVerifier;

  confirmationResult = await signInWithPhoneNumber(
    auth,
    phone,
    appVerifier
  );

  alert("ส่ง OTP แล้ว");
}

// ---------- VERIFY OTP ----------
export async function verifyOtp(code: string) {
  const result = await confirmationResult.confirm(code);

  alert("OTP Login สำเร็จ");
  console.log(result.user);
}
