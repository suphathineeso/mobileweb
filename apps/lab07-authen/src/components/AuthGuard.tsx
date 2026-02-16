import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router-dom";
import { authService } from "../auth/auth-service";

type Props = { children: React.ReactNode };

const AuthGuard: React.FC<Props> = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let alive = true;

    const timeout = setTimeout(() => {
      // กันค้าง: ถ้าเกิน 4 วิ ถือว่ายังไม่ login
      if (alive) {
        setOk(false);
        setChecking(false);
      }
    }, 4000);

    (async () => {
      try {
        const u = await authService.getCurrentUser();
        if (!alive) return;
        setOk(!!u);
      } catch {
        if (!alive) return;
        setOk(false);
      } finally {
        if (!alive) return;
        clearTimeout(timeout);
        setChecking(false);
      }
    })();

    return () => {
      alive = false;
      clearTimeout(timeout);
    };
  }, []);

  if (checking) return <IonLoading isOpen message="Checking auth..." />;
  if (!ok) return <Redirect to="/login" />;
  return <>{children}</>;
};

export default AuthGuard;
