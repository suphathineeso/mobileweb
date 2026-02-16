<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vision Studio</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" :disabled="loading" @click="resetAll">
            รีเซ็ต
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- hidden file input -->
      <input ref="fileEl" type="file" accept="image/*" hidden @change="onFileChange" />

      <!-- top status pills -->
      <div class="pills">
        <div class="pill">
          <span class="dot" :class="{ on: isNative }"></span>
          <span>{{ isNative ? "Native (Android/iOS)" : "Web (PC/Browser)" }}</span>
        </div>
        <div class="pill" v-if="img">
          <span class="dot on"></span>
          <span>Image Ready • {{ img.mimeType }}</span>
        </div>
        <div class="pill warn" v-if="!isNative && !isSecureContext">
          <span class="dot"></span>
          <span>Webcam ต้องใช้ localhost/https</span>
        </div>
      </div>

      <ion-grid>
        <ion-row>
          <!-- LEFT: CAMERA STAGE -->
          <ion-col size="12" size-lg="7">
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title>Camera Stage</ion-card-title>
                <ion-card-subtitle>
                  Web: Live Preview + ถ่ายภาพ • Native: เปิดกล้องด้วย Capacitor
                </ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                <!-- WEB CAMERA -->
                <div v-if="!isNative" class="stage">
                  <div class="stage-head">
                    <div class="stage-title">
                      <ion-icon :icon="videocamOutline" />
                      <span>Webcam Preview</span>
                    </div>

                    <ion-segment v-model="webFacing" :disabled="loading || !canUseWebCam">
                      <ion-segment-button value="environment">
                        <ion-label>กล้องหลัง</ion-label>
                      </ion-segment-button>
                      <ion-segment-button value="user">
                        <ion-label>กล้องหน้า</ion-label>
                      </ion-segment-button>
                    </ion-segment>
                  </div>

                  <!-- IMPORTANT: video stays in DOM (v-show), so ref is always ready -->
                  <div class="viewport">
                    <video
                      ref="videoEl"
                      class="video"
                      playsinline
                      autoplay
                      muted
                      v-show="webStreaming"
                    ></video>

                    <div class="viewport-overlay" v-show="webStreaming">
                      <div class="hint-bubble">จัดเฟรมแล้วกด “ถ่ายภาพ”</div>
                    </div>

                    <div class="placeholder" v-show="!webStreaming">
                      <ion-icon :icon="cameraOutline" class="placeholder-icon" />
                      <div class="placeholder-title">ยังไม่เปิดกล้อง</div>
                      <div class="placeholder-sub">
                        กด “เปิดกล้อง” แล้วอนุญาตสิทธิ์กล้องในเบราว์เซอร์
                      </div>
                    </div>
                  </div>

                  <div class="actions">
                    <ion-button
                      expand="block"
                      color="tertiary"
                      size="large"
                      :disabled="loading || !canUseWebCam"
                      @click="startWebCam"
                      v-if="!webStreaming"
                    >
                      <ion-icon :icon="playOutline" slot="start" />
                      เปิดกล้อง
                    </ion-button>

                    <ion-button
                      expand="block"
                      color="medium"
                      size="large"
                      :disabled="loading"
                      @click="stopWebCam"
                      v-else
                    >
                      <ion-icon :icon="stopOutline" slot="start" />
                      ปิดกล้อง
                    </ion-button>

                    <ion-button
                      expand="block"
                      color="primary"
                      size="large"
                      :disabled="loading || !webStreaming"
                      @click="captureFromWebCam"
                    >
                      <ion-icon :icon="apertureOutline" slot="start" />
                      ถ่ายภาพ
                    </ion-button>
                  </div>

                  <ion-text color="danger" v-if="webCamError">
                    <p class="msg">{{ webCamError }}</p>
                  </ion-text>
                </div>

                <!-- NATIVE CAMERA -->
                <div v-else class="stage">
                  <div class="viewport">
                    <div class="placeholder">
                      <ion-icon :icon="phonePortraitOutline" class="placeholder-icon" />
                      <div class="placeholder-title">โหมด Native</div>
                      <div class="placeholder-sub">
                        กด “ถ่ายรูป (Native)” เพื่อเปิดกล้องมือถือ
                      </div>
                    </div>
                  </div>

                  <div class="actions">
                    <ion-button
                      expand="block"
                      color="tertiary"
                      size="large"
                      :disabled="loading"
                      @click="takeNativePhoto"
                    >
                      <ion-icon :icon="cameraOutline" slot="start" />
                      ถ่ายรูป (Native)
                    </ion-button>
                  </div>
                </div>

                <!-- PREVIEW IMAGE -->
                <div v-if="previewUrl" class="preview">
                  <div class="preview-head">
                    <div class="preview-title">
                      <ion-icon :icon="imageOutline" />
                      <span>Captured / Selected</span>
                    </div>
                    <ion-button fill="clear" size="small" :disabled="loading" @click="openFilePicker">
                      เปลี่ยนรูป
                    </ion-button>
                  </div>

                  <ion-img :src="previewUrl" class="preview-img" />
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>

          <!-- RIGHT: ACTIONS + RESULT -->
          <ion-col size="12" size-lg="5">
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title>Workflow</ion-card-title>
                <ion-card-subtitle>เลือก/ถ่าย → วิเคราะห์ → แสดงผล</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                <ion-button expand="block" size="large" :disabled="loading" @click="openFilePicker">
                  <ion-icon :icon="imageOutline" slot="start" />
                  เลือกไฟล์ภาพ
                </ion-button>

                <ion-button
                  expand="block"
                  size="large"
                  color="primary"
                  :disabled="!img || loading"
                  @click="analyze"
                >
                  <ion-icon :icon="sparklesOutline" slot="start" />
                  วิเคราะห์ด้วย Gemini
                </ion-button>

                <ion-progress-bar v-if="loading" type="indeterminate" class="mt12" />

                <ion-text color="danger" v-if="errorMsg">
                  <p class="msg">{{ errorMsg }}</p>
                </ion-text>

                <ion-text color="medium" v-if="hintMsg">
                  <p class="msg hint">{{ hintMsg }}</p>
                </ion-text>

                <div class="mini-tip">
                  <ion-icon :icon="informationCircleOutline" />
                  <span>
                    ถ้าเป็น Web ให้เปิดผ่าน <b>http://localhost</b> หรือ <b>https</b> และกด Allow กล้อง
                  </span>
                </div>
              </ion-card-content>
            </ion-card>

            <ion-card v-if="result" class="card">
              <ion-card-header>
                <ion-card-title>Analysis Result</ion-card-title>
                <ion-card-subtitle>Structured Output (JSON)</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                <div class="section">
                  <div class="k">Caption</div>
                  <div class="caption">{{ result.caption }}</div>
                </div>

                <div class="section">
                  <div class="k">Tags</div>
                  <div class="chips">
                    <ion-chip v-for="t in result.tags" :key="t" outline>
                      <ion-icon :icon="pricetagOutline" />
                      <ion-label>{{ t }}</ion-label>
                    </ion-chip>
                  </div>
                </div>

                <div class="section" v-if="result.objects?.length">
                  <div class="k">Objects</div>
                  <ion-list inset>
                    <ion-item v-for="(o, idx) in result.objects" :key="idx">
                      <ion-label>
                        <h2>{{ o.name }}</h2>
                        <p v-if="o.confidence !== undefined">
                          ความมั่นใจ: {{ (o.confidence * 100).toFixed(0) }}%
                        </p>
                        <p v-else>ความมั่นใจ: ไม่ระบุ</p>
                      </ion-label>
                      <ion-badge slot="end" color="dark" v-if="o.confidence !== undefined">
                        {{ (o.confidence * 100).toFixed(0) }}%
                      </ion-badge>
                    </ion-item>
                  </ion-list>
                </div>

                <div class="section" v-if="result.safety">
                  <div class="k">Safety</div>
                  <ion-badge :color="result.safety.isSensitive ? 'danger' : 'success'">
                    {{ result.safety.isSensitive ? "Sensitive" : "OK" }}
                  </ion-badge>
                  <div v-if="result.safety.notes" class="notes">
                    {{ result.safety.notes }}
                  </div>
                </div>

                <ion-accordion-group>
                  <ion-accordion value="raw">
                    <ion-item slot="header">
                      <ion-icon :icon="codeSlashOutline" slot="start" />
                      <ion-label>ดู JSON ดิบ</ion-label>
                    </ion-item>
                    <div slot="content" class="raw">
                      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
                    </div>
                  </ion-accordion>
                </ion-accordion-group>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- hidden canvas -->
      <canvas ref="canvasEl" class="hidden"></canvas>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick } from "vue";
import {
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import {
  apertureOutline,
  cameraOutline,
  codeSlashOutline,
  imageOutline,
  informationCircleOutline,
  phonePortraitOutline,
  playOutline,
  pricetagOutline,
  sparklesOutline,
  stopOutline,
  videocamOutline,
} from "ionicons/icons";

import { Capacitor } from "@capacitor/core";
import { PhotoService } from "../core/photo.service";
import { GeminiVisionService } from "../core/gemini.service";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";

const isNative = Capacitor.isNativePlatform();
const isSecureContext = window.isSecureContext || location.hostname === "localhost";

const fileEl = ref<HTMLInputElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);
const canvasEl = ref<HTMLCanvasElement | null>(null);

const img = ref<Base64Image | null>(null);
const previewUrl = ref("");
const result = ref<ImageAnalysisResult | null>(null);

const loading = ref(false);
const errorMsg = ref("");
const hintMsg = ref("");

// Web cam state
const webStreaming = ref(false);
const webFacing = ref<"environment" | "user">("environment");
const webCamError = ref("");
let mediaStream: MediaStream | null = null;

const canUseWebCam =
  !isNative &&
  isSecureContext &&
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function";

function openFilePicker() {
  errorMsg.value = "";
  hintMsg.value = "";
  fileEl.value?.click();
}

function resetAll() {
  img.value = null;
  previewUrl.value = "";
  result.value = null;
  errorMsg.value = "";
  hintMsg.value = "";
  webCamError.value = "";
}

function formatError(err: any): string {
  const msg = err?.message ?? String(err);
  if (/NotAllowedError|denied/i.test(msg)) {
    return "ไม่ได้รับอนุญาตให้ใช้กล้อง: โปรดกด Allow กล้องในเบราว์เซอร์ แล้วลองใหม่";
  }
  if (/NotFoundError/i.test(msg)) {
    return "ไม่พบกล้อง: ตรวจสอบว่าเครื่องมี webcam และไม่ได้ถูกปิด/ปิดไดรเวอร์";
  }
  if (/NotReadableError/i.test(msg)) {
    return "กล้องถูกใช้งานโดยโปรแกรมอื่น (เช่น Zoom/Meet/OBS) ให้ปิดแล้วลองใหม่";
  }
  return msg;
}

async function onFileChange(e: Event) {
  errorMsg.value = "";
  hintMsg.value = "";

  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  img.value = await PhotoService.fromFile(file);
  previewUrl.value = URL.createObjectURL(file);
  result.value = null;

  input.value = "";
  hintMsg.value = "โหลดรูปสำเร็จ ✅ กดวิเคราะห์ได้เลย";
}

async function startWebCam() {
  webCamError.value = "";
  errorMsg.value = "";
  hintMsg.value = "";

  if (!canUseWebCam) {
    webCamError.value = "Webcam ต้องใช้ http://localhost หรือ https และเบราว์เซอร์ต้องรองรับ getUserMedia";
    return;
  }

  try {
    stopWebCam();

    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: webFacing.value },
      audio: false,
    });

    webStreaming.value = true;
    await nextTick(); // ให้ video element พร้อมแน่นอน

    if (!videoEl.value) throw new Error("Video element not ready");
    videoEl.value.srcObject = mediaStream;
    await videoEl.value.play();

    hintMsg.value = "เปิดกล้องแล้ว ✅ กดถ่ายภาพได้เลย";
  } catch (err: any) {
    webCamError.value = formatError(err);
    webStreaming.value = false;
    stopWebCam();
  }
}

function stopWebCam() {
  if (mediaStream) {
    mediaStream.getTracks().forEach((t) => t.stop());
    mediaStream = null;
  }
  webStreaming.value = false;
}

async function captureFromWebCam() {
  try {
    if (!videoEl.value || !canvasEl.value) return;

    const v = videoEl.value;
    const c = canvasEl.value;

    const w = v.videoWidth || 1280;
    const h = v.videoHeight || 720;

    c.width = w;
    c.height = h;

    const ctx = c.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    ctx.drawImage(v, 0, 0, w, h);

    const dataUrl = c.toDataURL("image/jpeg", 0.9);
    const b64 = dataUrl.split(",")[1];
    if (!b64) throw new Error("Invalid base64 from canvas");

    img.value = { base64: b64, mimeType: "image/jpeg" };
    previewUrl.value = dataUrl;
    result.value = null;

    hintMsg.value = "ถ่ายภาพสำเร็จ ✅ กดวิเคราะห์ได้เลย";
  } catch (err: any) {
    webCamError.value = formatError(err);
  }
}

watch(webFacing, async () => {
  if (webStreaming.value) {
    await startWebCam();
  }
});

onBeforeUnmount(() => {
  stopWebCam();
});

async function takeNativePhoto() {
  errorMsg.value = "";
  hintMsg.value = "";
  loading.value = true;

  try {
    const b64 = await PhotoService.fromCamera();
    img.value = b64;
    previewUrl.value = `data:${b64.mimeType};base64,${b64.base64}`;
    result.value = null;

    hintMsg.value = "ได้รูปจาก Native Camera ✅ กดวิเคราะห์ได้เลย";
  } catch (err: any) {
    errorMsg.value = formatError(err);
  } finally {
    loading.value = false;
  }
}

async function analyze() {
  if (!img.value) return;

  errorMsg.value = "";
  hintMsg.value = "";
  loading.value = true;

  try {
    result.value = await GeminiVisionService.analyze(img.value);
    hintMsg.value = "วิเคราะห์เสร็จแล้ว ✅";
  } catch (err: any) {
    errorMsg.value = formatError(err);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  font-weight: 800;
  font-size: 0.92rem;
}
.pill.warn {
  background: rgba(255, 196, 0, 0.22);
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.35);
}
.dot.on {
  background: rgba(0, 180, 60, 0.9);
}

.card {
  border-radius: 18px;
  overflow: hidden;
}

.stage {
  display: grid;
  gap: 12px;
}

.stage-head {
  display: grid;
  gap: 10px;
}
.stage-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  font-size: 1.02rem;
}

.viewport {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  /* ทำให้เห็นภาพเสมอ ไม่ยุบ */
  aspect-ratio: 16 / 9;
  min-height: 240px;
  display: grid;
  place-items: center;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* สำคัญ: ให้ภาพเต็มกรอบ */
  display: block;
}

.viewport-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 12px;
  pointer-events: none;
}
.hint-bubble {
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  padding: 8px 10px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.9rem;
}

.placeholder {
  text-align: center;
  padding: 18px;
}
.placeholder-icon {
  font-size: 42px;
  opacity: 0.75;
}
.placeholder-title {
  margin-top: 8px;
  font-weight: 900;
  font-size: 1.05rem;
  color: #fff;
}
.placeholder-sub {
  margin-top: 6px;
  opacity: 0.85;
  color: #fff;
}

.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.preview {
  margin-top: 14px;
}
.preview-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.preview-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
}
.preview-img {
  border-radius: 16px;
  overflow: hidden;
}

.mt12 {
  margin-top: 12px;
}
.msg {
  margin: 10px 0 0;
}
.msg.hint {
  opacity: 0.85;
}

.mini-tip {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.05);
  font-size: 0.92rem;
  line-height: 1.35;
}

.section {
  margin-top: 12px;
}
.k {
  font-weight: 900;
  opacity: 0.75;
  margin-bottom: 6px;
}
.caption {
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1.35;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.notes {
  margin-top: 8px;
  opacity: 0.9;
}

.raw {
  padding: 10px 14px 16px;
}
.raw pre {
  margin: 0;
  font-size: 0.85rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.hidden {
  display: none;
}
</style>
