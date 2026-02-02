import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },

      // tab1 = หน้าแสดงรายการ (Read realtime)
      {
        path: 'tab1',
        component: () => import('@/views/ExpenseList.vue')
      },

      // tab2 = หน้าเพิ่มข้อมูล (Create)
      {
        path: 'tab2',
        component: () => import('@/views/AddExpense.vue')
      },

      //  tab3 = หน้าสำรอง (จะใช้หรือไม่ใช้ก็ได้)
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },

      //หน้าแก้ไข/ลบ (Update / Delete) → ไม่เป็นแท็บ
      {
        path: 'edit/:id',
        component: () => import('@/views/EditExpense.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
