<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Lab09 Arm Workout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Lab09 Sensors</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-content>
          <h2 style="font-weight: bold;">ข้อความล่าสุด</h2>
          <p style="font-size: 1.2rem; margin: 10px 0;">{{ status }}</p>
          
          <div v-if="errorMsg" style="color: #ff4961; margin-top: 15px;">
            <strong>{{ errorMsg }}</strong>
            <p style="font-size: 0.8rem;">(ถ้าใช้ iPhone แนะนำเปิดผ่าน HTTPS และอนุญาต Motion/Orientation ใน Settings)</p>
          </div>
        </ion-card-content>
      </ion-card>

      <div style="margin-top: 20px;">
        <ion-button expand="block" size="large" @click="requestSensorPermission" v-if="!isRunning">
          Start
        </ion-button>
        
        <ion-button expand="block" size="large" color="medium" @click="stopTracking" v-if="isRunning">
          Stop
        </ion-button>

        <ion-button expand="block" fill="clear" color="warning" @click="resetData">
          Reset
        </ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonButton, IonCard, IonCardContent 
} from '@ionic/vue';

// --- State Variables ---
const status = ref('เริ่มได้เลย');
const isRunning = ref(false);
const errorMsg = ref('');

// --- Functions ---

const requestSensorPermission = async () => {
  errorMsg.value = ''; // ล้างข้อความ Error เก่า
  
  try {
    // ตรวจสอบเงื่อนไขพิเศษของ iOS 13+
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      const permission = await (DeviceOrientationEvent as any).requestPermission();
      
      if (permission === 'granted') {
        startTracking();
      } else {
        errorMsg.value = 'เริ่มใช้งาน Sensor ไม่สำเร็จ (คุณปฏิเสธการเข้าถึง)';
      }
    } else {
      // สำหรับ Android หรือ Browser ที่ไม่ต้องขอ Permission พิเศษ
      startTracking();
    }
  } catch (err) {
    console.error(err);
    errorMsg.value = 'เริ่มใช้งาน Sensor ไม่สำเร็จ (ต้องใช้ HTTPS เท่านั้น)';
  }
};

const startTracking = () => {
  isRunning.value = true;
  status.value = 'กำลังทำงาน... ลองขยับมือถือดูครับ';
  window.addEventListener('deviceorientation', handleOrientation);
};

const stopTracking = () => {
  isRunning.value = false;
  status.value = 'หยุดการทำงานแล้ว';
  window.removeEventListener('deviceorientation', handleOrientation);
};

const resetData = () => {
  stopTracking();
  status.value = 'เริ่มได้เลย';
  errorMsg.value = '';
};

const handleOrientation = (event: DeviceOrientationEvent) => {
  // ค่าการเอียงเครื่อง
  const beta = event.beta ? event.beta.toFixed(2) : 0;   // เอียงหน้า-หลัง
  const gamma = event.gamma ? event.gamma.toFixed(2) : 0; // เอียงซ้าย-ขวา
  
  status.value = `Beta (หน้า-หลัง): ${beta}° | Gamma (ซ้าย-ขวา): ${gamma}°`;
};
</script>

<style scoped>
ion-card {
  margin-bottom: 20px;
  --background: #1e1e1e;
  color: white;
}
h2 {
  color: #ffffff;
}
</style>