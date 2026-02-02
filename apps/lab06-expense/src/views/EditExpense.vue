<template>
  <ion-page class="ios-page">
    <ion-header class="ios-header">
      <ion-toolbar class="ios-toolbar">
        <ion-title class="ios-title">แก้ไขรายการ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ios-content">
      <div class="wrap">
        <div class="section-title">รายละเอียด</div>

        <ion-list inset class="ios-list">
          <ion-item class="ios-item">
            <ion-input
              label="ชื่อรายการ"
              label-placement="stacked"
              v-model="title"
              clear-input
            />
          </ion-item>

          <ion-item class="ios-item">
            <ion-input
              label="จำนวนเงิน"
              label-placement="stacked"
              type="number"
              inputmode="decimal"
              v-model="amount"
            />
          </ion-item>

          <!-- ประเภท (ชัด ไม่หาย) -->
          <ion-item class="ios-item">
            <ion-select
              label="ประเภท"
              label-placement="stacked"
              v-model="type"
              interface="popover"
              placeholder="เลือกประเภท"
              class="ios-select"
            >
              <ion-select-option value="income">รายรับ</ion-select-option>
              <ion-select-option value="expense">รายจ่าย</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item class="ios-item">
            <ion-input
              label="หมวดหมู่"
              label-placement="stacked"
              v-model="category"
            />
          </ion-item>

          <ion-item class="ios-item">
            <ion-textarea
              label="หมายเหตุ"
              label-placement="stacked"
              v-model="note"
              auto-grow
            />
          </ion-item>
        </ion-list>

        <div class="btns">
          <ion-button expand="block" class="btn-primary" @click="updateExpense">
            อัปเดต
          </ion-button>

          <ion-button expand="block" class="btn-danger" @click="openConfirm">
            ลบรายการ
          </ion-button>

          <ion-button expand="block" fill="clear" class="btn-cancel" @click="goBack">
            กลับ
          </ion-button>
        </div>
      </div>

      <!-- confirm delete -->
      <ion-alert
        :is-open="isOpen"
        header="ยืนยันการลบ"
        message="ต้องการลบรายการนี้ใช่หรือไม่?"
        :buttons="alertButtons"
        @didDismiss="isOpen = false"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton,
  IonAlert, alertController
} from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const title = ref("");
const amount = ref<number | string>("");
const type = ref<"income" | "expense">("expense");
const category = ref("");
const note = ref("");

onMounted(async () => {
  const snap = await getDoc(doc(db, "expenses", id));
  if (!snap.exists()) {
    const a = await alertController.create({
      header: "ไม่พบข้อมูล",
      message: "รายการนี้ไม่มีอยู่แล้ว",
      buttons: ["OK"],
    });
    await a.present();
    return router.push("/tabs/tab1");
  }

  const d = snap.data() as any;
  title.value = d.title ?? "";
  amount.value = d.amount ?? "";
  type.value = d.type ?? "expense";
  category.value = d.category ?? "";
  note.value = d.note ?? "";
});

const updateExpense = async () => {
  const amt = Number(amount.value);
  if (!title.value.trim() || Number.isNaN(amt) || amt <= 0) {
    const a = await alertController.create({
      header: "ข้อมูลไม่ถูกต้อง",
      message: "กรุณากรอกชื่อและจำนวนเงินให้ถูกต้อง",
      buttons: ["OK"],
    });
    return a.present();
  }

  await updateDoc(doc(db, "expenses", id), {
    title: title.value.trim(),
    amount: amt,
    type: type.value,
    category: category.value.trim(),
    note: note.value.trim(),
  });

  router.push("/tabs/tab1");
};

const goBack = () => router.push("/tabs/tab1");

/* delete confirm */
const isOpen = ref(false);
const openConfirm = () => (isOpen.value = true);

const alertButtons = [
  { text: "ยกเลิก", role: "cancel" },
  {
    text: "ลบ",
    role: "destructive",
    handler: async () => {
      await deleteDoc(doc(db, "expenses", id));
      router.push("/tabs/tab1");
    },
  },
];
</script>

<style scoped>
/* โทน iOS ขาวคลีน */
.ios-page { background: #fff; color: #111; }
.ios-header, .ios-toolbar {
  --background: #ffffff;
  --color: #111111;
  border-bottom: 1px solid #e5e5ea;
}
.ios-title { font-weight: 800; }

.ios-content { --background: #f5f5f7; }
.wrap { padding: 14px 12px 18px; }

.section-title {
  font-size: 13px;
  color: #6b7280;
  font-weight: 700;
  margin: 6px 6px 10px;
}

/* กล่องฟอร์ม */
.ios-list {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  overflow: hidden;
}

.ios-item {
  --background: #ffffff;
  --color: #111111;
  --padding-start: 14px;
  --inner-padding-end: 14px;
  --min-height: 74px;
  border-bottom: 1px solid #f0f0f0;
}
.ios-item:last-child { border-bottom: none; }

/* select ชัด */
.ios-select {
  --placeholder-color: #9ca3af;
  --placeholder-opacity: 1;
  --color: #111111;
}

/* ปุ่ม */
.btns { margin-top: 14px; }
.btn-primary {
  --background: #007aff;
  --border-radius: 14px;
  height: 48px;
  font-weight: 800;
}
.btn-danger {
  --background: #ff3b30;
  --border-radius: 14px;
  height: 48px;
  font-weight: 800;
  margin-top: 8px;
}
.btn-cancel {
  --color: #007aff;
  font-weight: 700;
}
</style>
