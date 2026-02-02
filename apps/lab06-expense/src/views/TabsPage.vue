<template>
  <ion-page class="ios-page">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="ios-tab-bar">
        <ion-tab-button tab="tab1" href="/tabs/tab1" class="ios-tab">
          <ion-icon name="list-outline"></ion-icon>
          <ion-label>รายการ</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2" class="ios-tab">
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-label>เพิ่ม</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="edit" href="/tabs/tab1" class="ios-tab">
  <ion-icon name="create-outline"></ion-icon>
  <ion-label>แก้ไข</ion-label>
</ion-tab-button>


      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue';
</script>

<style scoped>
/* หน้าโดยรวม */
.ios-page {
  background: #ffffff;
}

/* tab bar ด้านล่าง */
.ios-tab-bar {
  --background: #ffffff;
  border-top: 1px solid #e5e5ea; /* เส้นบางแบบ iOS */
  height: 60px;
  padding-bottom: env(safe-area-inset-bottom);
}

/* ปุ่ม tab */
.ios-tab {
  --color: #8e8e93;          /* เทา iOS */
  --color-selected: #007aff; /* น้ำเงิน iOS */
  font-weight: 600;
}

/* icon */
.ios-tab ion-icon {
  font-size: 22px;
}

/* label */
.ios-tab ion-label {
  font-size: 11px;
  margin-top: 2px;
}

/* ทำให้ดูนุ่มขึ้นตอนกด */
ion-tab-button {
  transition: color 0.2s ease;
}
</style>
