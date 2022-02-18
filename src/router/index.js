import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listar',
      component: () => import('../views/ListarView.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../views/EditarView.vue')
    },
    {
      path: '/crear',
      name: 'crear',
      component: () => import('../views/CrearView.vue')
    }
  ]
})

export default router
