import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Songs from '../pages/Songs.vue'
import CreateSong from '../pages/CreateSong.vue'
import ViewSong from '../pages/ViewSong.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/songs/create',
    name: 'CreateSong',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
