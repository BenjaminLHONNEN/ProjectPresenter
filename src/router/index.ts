import { createRouter, createWebHistory } from 'vue-router'
import ProjectGrid from '../views/ProjectGrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'grid',
      component: ProjectGrid
    }
  ]
})

export default router
