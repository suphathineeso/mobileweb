import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo as CameraPhoto } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

const PHOTO_STORAGE = 'lab05-react-photos';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  /* ========= โหลดรูปตอนเปิดแอป (ข้อ 5) ========= */
  useEffect(() => {
    loadSaved();
  }, []);

  const loadSaved = async () => {
    const { value } = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPrefs = value ? JSON.parse(value) : [];

    const loadedPhotos = await Promise.all(
      photosInPrefs.map(async (photo: Photo) => {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });

        return {
          filepath: photo.filepath,
          webviewPath: `data:image/jpeg;base64,${file.data}`,
        };
      })
    );

    setPhotos(loadedPhotos);
  };

  /* ========= ถ่ายรูป (ข้อ 7) ========= */
  const takePhoto = async () => {
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedFile = await savePhoto(cameraPhoto);

    const newPhotos = [savedFile, ...photos];
    setPhotos(newPhotos);

    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(newPhotos),
    });
  };

  /* ========= บันทึกรูปลงเครื่อง (ข้อ 8) ========= */
  const savePhoto = async (photo: CameraPhoto): Promise<Photo> => {
    const base64Data = await base64FromPath(photo.webPath!);
    const fileName = new Date().getTime() + '.jpeg';

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  return {
    photos,
    takePhoto,
  };
}

/* ===== แปลงรูปเป็น Base64 ===== */
async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.readAsDataURL(blob);
  });
}
