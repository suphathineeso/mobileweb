import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonButton,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { authService } from "../auth/auth-service";
import type { AuthUser } from "../auth/auth-interface";

const Tab1: React.FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const u = await authService.getCurrentUser();
      setUser(u);
      setLoading(false);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    window.location.href = "/login";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab1 : User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {loading && <p>Loading...</p>}

        {!loading && user && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>User Information</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {user.photoUrl && (
                <IonAvatar style={{ margin: "16px auto", width: 100, height: 100 }}>
                  <IonImg src={user.photoUrl} />
                </IonAvatar>
              )}

              <IonItem>
                <IonLabel>
                  <strong>UID:</strong>
                  <p>{user.uid}</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <strong>Email:</strong>
                  <p>{user.email ?? "-"}</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <strong>Phone Number:</strong>
                  <p>{user.phoneNumber ?? "-"}</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <strong>Display Name:</strong>
                  <p>{user.displayName ?? "-"}</p>
                </IonLabel>
              </IonItem>

              <IonButton
                expand="block"
                color="danger"
                style={{ marginTop: 16 }}
                onClick={handleLogout}
              >
                Logout
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}

        {!loading && !user && (
          <p style={{ textAlign: "center" }}>
            No user data (not logged in)
          </p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
