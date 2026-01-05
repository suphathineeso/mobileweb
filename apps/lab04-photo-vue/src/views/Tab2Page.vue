<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-text class="ion-padding">
        <p>รหัสนักศึกษา: 673380245-4</p>
        <p>ชื่อ–สกุล: นางสาวศุภาฐิณี ซอสูงเนิน</p>
      </ion-text>

      <!-- ปุ่มลบรูปทั้งหมด -->
      <!--<ion-button expand="block" color="danger" @click="clearPhotos">-->
        <!--ลบรูปทั้งหมด-->
      <!--</ion-button>-->

      <!-- แสดงรูปเป็น Grid -->
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="photo in photos" :key="photo.filepath">
            <ion-img :src="photo.webviewPath" />
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- ปุ่มกล้อง -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto">
          <ion-icon :icon="camera" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { camera } from 'ionicons/icons'
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonFab, IonFabButton, IonIcon,
  IonGrid, IonRow, IonCol, IonImg, IonText,
  IonButton
} from '@ionic/vue'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'

interface UserPhoto {
  filepath: string
  webviewPath?: string
}

const PHOTO_STORAGE = 'photos'
const photos = ref<UserPhoto[]>([])

/* แปลงรูปเป็น base64 (แก้ปัญหารูปหาย) */
const readAsBase64 = async (webPath: string) => {
  const response = await fetch(webPath)
  const blob = await response.blob()

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      resolve((reader.result as string).split(',')[1])
    }
    reader.readAsDataURL(blob)
  })
}

/* ถ่ายรูป + บันทึก */
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 90
  })

  const base64Data = await readAsBase64(photo.webPath!)
  const fileName = new Date().getTime() + '.jpeg'

  await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  })

  const newPhoto: UserPhoto = {
    filepath: fileName,
    webviewPath: photo.webPath
  }

  photos.value = [newPhoto, ...photos.value]

  await Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value)
  })
}

/* โหลดรูปกลับมา */
const loadSaved = async () => {
  const { value } = await Preferences.get({ key: PHOTO_STORAGE })
  photos.value = value ? JSON.parse(value) : []

  for (const photo of photos.value) {
    const file = await Filesystem.readFile({
      path: photo.filepath,
      directory: Directory.Data
    })
    photo.webviewPath = `data:image/jpeg;base64,${file.data}`
  }
}

/* ลบรูปทั้งหมด */
const clearPhotos = async () => {
  for (const photo of photos.value) {
    await Filesystem.deleteFile({
      path: photo.filepath,
      directory: Directory.Data
    })
  }

  photos.value = []
  await Preferences.remove({ key: PHOTO_STORAGE })
}

onMounted(loadSaved)
</script>
