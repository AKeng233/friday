import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Item = () => import('../views/item/Item')
const Score = () => import('../views/score/Score')

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/score',
    component: Score
  }
]

const router = new vueRouter({
  routes,
  mode: 'history'
})

export default router