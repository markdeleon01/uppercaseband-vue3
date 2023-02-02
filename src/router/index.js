import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about-view" */ '../views/About.vue')
    },
    {
      path: '/discography',
      name: 'discography-view',
      // route level code-splitting
      // this generates a separate chunk (discography.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "discography-view" */ '../views/Discography.vue'
        )
    },
    {
      path: '/',
      name: 'home-view',
      component: Home
    }
  ]
})

export default router
