// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'store',
        name: 'Store',
        component: () => import('@/components/StoreFront.vue'),
      },
      {
        path: 'Product/:name',
        name: 'Product',
        component: () => import('@/components/ProductDescription.vue'),
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: () => import('@/views/Privacy.vue'),
      },
      {
        path: 'data-deletion',
        name: 'DataDeletion',
        component: () => import('@/views/DataDeletion.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
