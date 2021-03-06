import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Play',
    component: Game
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
