<template>
  <ion-page class="ios-page">
    <ion-header class="ios-header">
      <ion-toolbar class="ios-toolbar">
        <ion-title class="ios-title">เพิ่มรายการ</ion-title>
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
              placeholder="เช่น ค่าอาหาร"
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
              placeholder="เช่น 120"
            />
          </ion-item>

          <!-- ใช้ IonSelect ใน IonItem จะเสถียรและสวยกว่า -->
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
              placeholder="เช่น อาหาร / เดินทาง"
            />
          </ion-item>

          <ion-item class="ios-item">
            <ion-textarea
              label="หมายเหตุ"
              label-placement="stacked"
              v-model="note"
              placeholder="เช่น กินข้าวกลางวัน"
              auto-grow
            />
          </ion-item>
        </ion-list>

        <div class="btns">
          <ion-button expand="block" class="btn-primary" @click="saveExpense">
            บันทึก
          </ion-button>

          <ion-button expand="block" fill="clear" class="btn-cancel" @click="goBack">
            ยกเลิก
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton,
  alertController,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const router = useRouter();

const title = ref("");
const amount = ref<number | string>("");
const type = ref<"income" | "expense">("expense"); //  default เป็นรายจ่าย
const category = ref("");
const note = ref("");

const saveExpense = async () => {
  if (!title.value.trim()) {
    const a = await alertController.create({
      header: "กรอกไม่ครบ",
      message: "กรุณากรอกชื่อรายการ",
      buttons: ["OK"],
    });
    return a.present();
  }

  const amt = Number(amount.value);
  if (Number.isNaN(amt) || amt <= 0) {
    const a = await alertController.create({
      header: "จำนวนเงินไม่ถูกต้อง",
      message: "กรุณากรอกจำนวนเงินมากกว่า 0",
      buttons: ["OK"],
    });
    return a.present();
  }

  await addDoc(collection(db, "expenses"), {
    title: title.value.trim(),
    amount: amt,
    type: type.value,
    category: category.value.trim(),
    note: note.value.trim(),
    createdAt: serverTimestamp(),
  });

  router.push("/tabs/tab1");
};

const goBack = () => router.push("/tabs/tab1");
</script>

<style scoped>
/* โทน iOS ขาว-คลีน */
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

/* กล่องฟอร์มแบบ iOS */
.ios-list {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  overflow: hidden;
}

/* แต่ละแถว */
.ios-item {
  --background: #ffffff;
  --color: #111111;
  --padding-start: 14px;
  --inner-padding-end: 14px;
  --min-height: 74px;
  border-bottom: 1px solid #f0f0f0;
}
.ios-item:last-child { border-bottom: none; }

/*  ทำให้ select เห็นค่า/placeholder ชัด */
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
.btn-cancel {
  --color: #007aff;
  font-weight: 700;
}
</style>
