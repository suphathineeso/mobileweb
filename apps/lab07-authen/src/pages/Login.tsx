import React, { useMemo, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router";
import { authService } from "../auth/auth-service";

const Login: React.FC = () => {
  const history = useHistory();

  // ===== Email / Password =====
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ===== Phone =====
  const [phone, setPhone] = useState("+66");
  const [verificationId, setVerificationId] = useState("");
  const [otp, setOtp] = useState("");

  // ===== UI =====
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const canConfirmOtp = useMemo(
    () => verificationId.trim().length > 0,
    [verificationId]
  );

  const goTab1 = () => history.replace("/tab1");

  // ===== Email Login =====
  const onEmailLogin = async () => {
    setLoading(true);
    setStatus("");
    try {
      await authService.loginWithEmailPassword({ email, password });
      goTab1();
    } catch (e: any) {
      setStatus(e?.message ?? "Email login failed");
    } finally {
      setLoading(false);
    }
  };

  // ===== Google Login =====
  const onGoogleLogin = async () => {
    setLoading(true);
    setStatus("");
    try {
      await authService.loginWithGoogle();
      goTab1();
    } catch (e: any) {
      setStatus(e?.message ?? "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  // ===== Phone: Send OTP =====
  const onStartPhoneLogin = async () => {
    setLoading(true);
    setStatus("");
    try {
      const r = await authService.startPhoneLogin({
        phoneNumberE164: phone,
      });
      setVerificationId(r.verificationId);
      setStatus("OTP sent. Please enter the code.");
    } catch (e: any) {
      setStatus(e?.message ?? "Phone login start failed");
    } finally {
      setLoading(false);
    }
  };

  // ===== Phone: Confirm OTP =====
  const onConfirmOtp = async () => {
    setLoading(true);
    setStatus("");
    try {
      await authService.confirmPhoneCode({
        verificationId,
        verificationCode: otp,
      });
      goTab1();
    } catch (e: any) {
      setStatus(e?.message ?? "OTP confirm failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* 🔴 สำคัญมากสำหรับ Web Phone Auth */}
        <div id="recaptcha-container"></div>

        <IonText color="medium">
          <p>Choose one method to sign in.</p>
        </IonText>

        {/* ===== Email / Password ===== */}
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            value={email}
            onIonInput={(e) => setEmail(e.detail.value ?? "")}
            type="email"
            placeholder="you@example.com"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            value={password}
            onIonInput={(e) => setPassword(e.detail.value ?? "")}
            type="password"
            placeholder="••••••••"
          />
        </IonItem>

        <IonButton expand="block" onClick={onEmailLogin} disabled={loading}>
          Login Email / Password
        </IonButton>

        {/* ===== Google ===== */}
        <IonButton
          expand="block"
          onClick={onGoogleLogin}
          disabled={loading}
          color="tertiary"
        >
          Login Google
        </IonButton>

        {/* ===== Phone ===== */}
        <IonItem>
          <IonLabel position="stacked">Phone (E.164)</IonLabel>
          <IonInput
            value={phone}
            onIonInput={(e) => setPhone(e.detail.value ?? "")}
            placeholder="+66801234567"
          />
        </IonItem>

        <IonButton
          expand="block"
          onClick={onStartPhoneLogin}
          disabled={loading}
        >
          Login by Phone (Send OTP)
        </IonButton>

        {canConfirmOtp && (
          <>
            <IonItem>
              <IonLabel position="stacked">OTP Code</IonLabel>
              <IonInput
                value={otp}
                onIonInput={(e) => setOtp(e.detail.value ?? "")}
                placeholder="123456"
              />
            </IonItem>

            <IonButton
              expand="block"
              onClick={onConfirmOtp}
              disabled={loading || otp.trim().length === 0}
            >
              Confirm OTP
            </IonButton>
          </>
        )}

        {status && (
          <IonText color="danger">
            <p>{status}</p>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
