import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/react';

import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
          <IonTitle size="small">
            Lab 05 - โดย ศุภาฐิณี ซอสูงเนิน รหัส 673380245-4
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

      </IonContent>

      <IonFab
        vertical="bottom"
        horizontal="center"
        slot="fixed"
        style={{ marginBottom: '18px' }}
      >
        <IonFabButton className="camera-fab" onClick={takePhoto}>
          <IonIcon icon={camera} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Tab2;
