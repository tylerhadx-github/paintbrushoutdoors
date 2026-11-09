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
        path: 'terms',
        name: 'Terms',
        component: () => import('@/views/Terms.vue'),
      },
      {
        path: 'support',
        name: 'Support',
        component: () => import('@/views/Support.vue'),
      },
      {
        path: 'data-deletion',
        name: 'DataDeletion',
        component: () => import('@/views/DataDeletion.vue'),
      },
      {
        path: 'guides',
        name: 'Guides',
        component: () => import('@/views/guides/GuidesIndex.vue'),
      },
      {
        path: ':product/:guide',
        name: 'HowTo',
        component: () => import('@/views/guides/HowToPage.vue'),
      },
      {
        path: ':product',
        name: 'ProductGuide',
        component: () => import('@/views/guides/ProductGuide.vue'),
      },
    ],
  },
]

function prefersReducedMotion () {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Wait for a hash target (Home is lazy-loaded) then scroll.
 * Legal pages link to /#contact; AppBar uses the same target.
 */
function scrollToHash (hash) {
  return new Promise((resolve) => {
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
    let attempts = 0
    const maxAttempts = 40

    const tick = () => {
      const el = document.querySelector(hash)
      if (el) {
        resolve({ el: hash, behavior })
        return
      }
      if (attempts++ < maxAttempts) {
        requestAnimationFrame(tick)
      } else {
        resolve({ top: 0 })
      }
    }

    requestAnimationFrame(tick)
  })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return scrollToHash(to.hash)
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
