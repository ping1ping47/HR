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
      path: '/examresults',
      component: () => import('../components/ExamResults/ExamResults.vue')
    },
    {
      path: '/Post',
      component: () => import('../components/Post/Post.vue')
    },
    {
      path: '/test',
      component: () => import('@/components/Post/Graph.vue')
    },
  ]
})

export default router
