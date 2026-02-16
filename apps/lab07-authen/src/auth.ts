import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

import { auth } from "./firebase";

let confirmationResult: any;

/* ---------- GOOGLE LOGIN ---------- */
export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    alert("Google Login สำเร็จ");
    console.log(result.user);

    // 👉 ตรงนี้ไปหน้า profile ได้
  } catch (error) {
    console.error(error);
    alert("Google Login ไม่สำเร็จ");
  }
}

/* ---------- SETUP RECAPTCHA ---------- */
export function setupRecaptcha() {
  (window as any).recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "normal",
    },
    auth
  );
}

/* ---------- SEND OTP ---------- */
export async function sendOtp(phoneNumber: string) {
  try {
    const appVerifier = (window as any).recaptchaVerifier;

    confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );

    alert("ส่ง OTP แล้ว");
  } catch (error) {
    console.error(error);
    alert("ส่ง OTP ไม่สำเร็จ");
  }
}

/* ---------- VERIFY OTP ---------- */
export async function verifyOtp(code: string) {
  try {
    const result = await confirmationResult.confirm(code);

    alert("Login ด้วย OTP สำเร็จ");
    console.log(result.user);

    // 👉 ไปหน้า profile ได้
  } catch (error) {
    console.error(error);
    alert("OTP ไม่ถูกต้อง");
  }
}
