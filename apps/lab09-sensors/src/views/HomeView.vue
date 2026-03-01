<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lab09 Arm Workout Sensors</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="card">
        <h2>รหัสนักศึกษา: 673380245-4</h2>
        <p>ชื่อ: นางสาวศุภาฐิณี ซอสูงเนิน</p>
        <p>สถานะ: {{ state?.status ?? "IDLE" }}</p>
      </div>

      <div class="counter card">
        <div class="label">รอบที่นับได้ (ถูก)</div>
        <div class="num">{{ state?.repDisplay ?? 0 }}</div>
      </div>

      <div class="card">
        <h3>สถิติ</h3>
        <p>รอบทั้งหมด: {{ state?.stats.repsTotal ?? 0 }}</p>
        <p>รอบถูก: {{ state?.stats.repsOk ?? 0 }}</p>
        <p>รอบผิด: {{ state?.stats.repsBad ?? 0 }}</p>
        <p>คะแนน: {{ state?.stats.score ?? 0 }}</p>
        <p>Tempo เฉลี่ย (ms): {{ state?.stats.avgRepMs ?? 0 }}</p>
        <p>Percent ถูก: {{ percentOk }}%</p>
      </div>

      <div class="card">
        <h3>ข้อความล่าสุด</h3>
        <p>{{ state?.stats.lastMessage ?? "-" }}</p>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </div>

      <ion-button expand="block" @click="start" :disabled="state?.status === 'RUNNING'">
        Start
      </ion-button>

      <ion-button expand="block" color="medium" @click="stop">
        Stop
      </ion-button>

      <ion-button expand="block" color="warning" @click="reset">
        Reset
      </ion-button>

      <ion-item lines="none" class="ion-margin-top">
        <ion-label>โหมดทดสอบบนคอม (Mock Sensor)</ion-label>
        <ion-toggle v-model="useMock"></ion-toggle>
      </ion-item>

      <p class="hint">
        * ถ้าเปิดบน iPhone แล้วต้องการใช้ sensor จริง แนะนำเปิดผ่าน HTTPS (เช่น GitHub Pages) และปิด Mock
      </p>
    </ion-content>

    <ion-footer class="ion-padding footer-text">
      Lab09 - Ionic + Sensors
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFooter,
  IonItem,
  IonLabel,
  IonToggle,
} from "@ionic/vue";

import { MotionService } from "../core/MotionService";
import { MockMotionService } from "../core/MockMotionService";
import { TtsService } from "../core/TtsService";
import { HapticsService } from "../core/HapticsService";
import { ArmWorkoutEngine } from "../core/ArmWorkoutEngine";
import type { WorkoutState } from "../core/types";

const state = ref<WorkoutState | null>(null);
const errorMsg = ref<string>("");

// ถ้าเป็น desktop ส่วนใหญ่ไม่มี DeviceMotionEvent → default เป็น mock
// ถ้าเป็นมือถือ (เช่น iPhone) มี DeviceMotionEvent → default เป็น sensor จริง
const useMock = ref(!("DeviceMotionEvent" in window));

const engine = new ArmWorkoutEngine();
const motion = new MotionService();
const mockMotion = new MockMotionService();
const tts = new TtsService();
const haptic = new HapticsService();

let unsub: (() => void) | undefined;

let lastSpokenRep = 0;
let lastSpokenMsg = "";

function numberToThai(n: number): string {

  return String(n);
}

onMounted(() => {
  unsub = engine.onChange(async (s) => {

    state.value = s;

  
    if (s.repDisplay > lastSpokenRep) {
      lastSpokenRep = s.repDisplay;
      lastSpokenMsg = ""; 
      try {
        await tts.speak(numberToThai(s.repDisplay));
        await haptic.success();
      } catch (e) {
        console.log("TTS/Haptics error:", e);
      }
      return;
    }

    const msg = s.stats.lastMessage ?? "";
    const isBad = msg && msg !== "OK" && s.status === "RUNNING";
    if (isBad && msg !== lastSpokenMsg) {
      lastSpokenMsg = msg;
      try {
        await tts.speak(msg);
        await haptic.warning();
      } catch (e) {
        console.log("TTS/Haptics error:", e);
      }
    }
  });
});

onBeforeUnmount(async () => {
  unsub?.();
  await motion.stop();
  await mockMotion.stop();
  await tts.stop();
});

const percentOk = computed(() => {
  if (!state.value) return 0;
  const total = state.value.stats.repsTotal;
  return total === 0 ? 0 : Math.round((state.value.stats.repsOk / total) * 100);
});

async function start() {
  errorMsg.value = "";
  lastSpokenRep = 0;
  lastSpokenMsg = "";

  try {
    await tts.speak("เริ่มกายบริหารแขน ยกขึ้นจนสุดแล้วลดลง");
  } catch (e) {
    console.log("TTS start error:", e);
  }

  engine.start();

  try {
    if (useMock.value) {
      await mockMotion.start((s) => {
        console.log("mock sample", s);
        engine.process(s);
      });
    } else {
      await motion.start((s) => {
        console.log("real sample", s);
        engine.process(s);
      });
    }
  } catch (e) {
    console.log("Start motion error:", e);
    errorMsg.value =
      "เริ่มใช้งาน Sensor ไม่สำเร็จ (ถ้าใช้ iPhone แนะนำเปิดผ่าน HTTPS และอนุญาต Motion/Orientation)";
  }
}

async function stop() {
  errorMsg.value = "";
  await motion.stop();
  await mockMotion.stop();
  engine.stop();

  try {
    await tts.speak("หยุดการทำงาน");
  } catch (e) {
    console.log("TTS stop error:", e);
  }
}

function reset() {

  errorMsg.value = "";
  lastSpokenRep = 0;
  lastSpokenMsg = "";
  engine.start();
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
}

.counter {
  text-align: center;
}

.counter .label {
  font-size: 14px;
  color: #666;
}

.counter .num {
  font-size: 48px;
  font-weight: bold;
  margin-top: 8px;
}

.footer-text {
  text-align: center;
  font-size: 12px;
  color: #666;
}

.error {
  margin-top: 8px;
  color: #b91c1c;
  font-weight: 600;
}

.hint {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
</style>