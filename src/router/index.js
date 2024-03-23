import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/examination',
      component: () => import('../components/Exam/Exam.vue')
    },
    {
      path: '/rmam',
      component: () => import('../components/Rmam/Rmam.vue')
    },
    {
      path: '/test',
      component: () => import('@/components/Dashboard/Graph.vue')
    },
  ]
})

export default router
