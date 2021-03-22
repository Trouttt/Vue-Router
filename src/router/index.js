import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import NestedRoute from '../views/NestedRoute'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/register/:id',
    name: 'Register',
    component:Register
  },
  {
    path:'/tek/',
    name: 'Tek',
    component:NestedRoute,
    children:[
      {
        path: "tok",
        name:"Tok",
        component: About

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
