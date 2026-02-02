<template>
  <ion-page class="ios-page">
    <ion-header class="ios-header">
      <ion-toolbar class="ios-toolbar">
        <ion-title class="ios-title">รายการ</ion-title>
        <ion-buttons slot="end">
          <ion-button class="ios-add" router-link="/tabs/tab2">
            เพิ่ม
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ios-content ion-padding">
      <div class="summary">
        <div class="summary-card">
          <div class="summary-title">รายรับรวม</div>
          <div class="summary-value income">{{ totalIncome.toLocaleString() }}</div>
        </div>
        <div class="summary-card">
          <div class="summary-title">รายจ่ายรวม</div>
          <div class="summary-value expense">{{ totalExpense.toLocaleString() }}</div>
        </div>
        <div class="summary-card">
          <div class="summary-title">คงเหลือ</div>
          <div class="summary-value">{{ (totalIncome - totalExpense).toLocaleString() }}</div>
        </div>
      </div>

      <ion-list class="ios-list" lines="none">
        <ion-item
          v-for="e in expenses"
          :key="e.id"
          class="ios-item"
          button
          @click="goEdit(e.id)"
        >
          <ion-label class="ios-label">
            <div class="row1">
              <span class="title">{{ e.title }}</span>
              <span class="badge" :class="e.type">{{ e.type === 'income' ? 'รายรับ' : 'รายจ่าย' }}</span>
            </div>
            <div class="row2">
              <span class="meta">{{ e.category || 'ไม่ระบุหมวด' }}</span>
              <span class="dot">•</span>
              <span class="meta">{{ e.note || 'ไม่มีหมายเหตุ' }}</span>
            </div>
          </ion-label>

          <ion-note
            slot="end"
            class="amount"
            :class="e.type"
          >
            {{ e.amount.toLocaleString() }}
          </ion-note>
        </ion-item>

        <div v-if="expenses.length === 0" class="empty">
          ยังไม่มีรายการ กด “เพิ่ม” เพื่อเริ่มบันทึก
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";

type Expense = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  note: string;
};

const router = useRouter();
const expenses = ref<Expense[]>([]);

const q = query(collection(db, "expenses"), orderBy("createdAt", "desc"));
const unsub = onSnapshot(q, (snap) => {
  expenses.value = snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title ?? "",
      amount: Number(data.amount ?? 0),
      type: (data.type ?? "expense") as "income" | "expense",
      category: data.category ?? "",
      note: data.note ?? "",
    };
  });
});

onUnmounted(() => unsub());

const totalIncome = computed(() =>
  expenses.value
    .filter((x) => x.type === "income")
    .reduce((s, x) => s + (x.amount || 0), 0)
);

const totalExpense = computed(() =>
  expenses.value
    .filter((x) => x.type === "expense")
    .reduce((s, x) => s + (x.amount || 0), 0)
);

const goEdit = (id: string) => router.push(`/tabs/edit/${id}`);
</script>

<style scoped>
/* บังคับโทนขาวคลีนแบบ iOS */
.ios-page {
  background: #ffffff;
  color: #111111;
}
.ios-header,
.ios-toolbar {
  --background: #ffffff;
  --color: #111111;
  border-bottom: 1px solid #e5e5ea;
}
.ios-title {
  font-weight: 700;
}
.ios-add {
  --color: #007aff;
  font-weight: 600;
}
.ios-content {
  --background: #f5f5f7;
}

/* summary 3 ช่อง */
.summary {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}
.summary-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.summary-title {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 6px;
}
.summary-value {
  font-size: 16px;
  font-weight: 800;
  color: #111111;
}
.summary-value.income { color: #16a34a; }
.summary-value.expense { color: #dc2626; }

/* list item style */
.ios-list {
  background: transparent;
}
.ios-item {
  --background: #ffffff;
  --color: #111111;
  border-radius: 14px;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.ios-label .row1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.title {
  font-weight: 700;
  font-size: 15px;
}
.badge {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 700;
}
.badge.income {
  background: rgba(22,163,74,0.12);
  color: #16a34a;
}
.badge.expense {
  background: rgba(220,38,38,0.12);
  color: #dc2626;
}
.row2 {
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dot { color: #9ca3af; }

.amount {
  font-size: 15px;
  font-weight: 800;
}
.amount.income { color: #16a34a; }
.amount.expense { color: #dc2626; }

.empty {
  text-align: center;
  color: #6b7280;
  margin-top: 30px;
  font-size: 14px;
}
@media (max-width: 420px) {
  .summary { grid-template-columns: 1fr; }
}
</style>
