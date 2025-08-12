import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import Introducepage from '@/views/Introduce/IntroducePage.vue'
const routes = [
    {path:'/',component:HomePage},
    {path:'/learn-english/gioi-thieu',component:Introducepage},

]
const router = createRouter({
  history: createWebHistory(),
  routes,
 scrollBehavior() {
     return { left: 0, top: 0 }
 },
})

export default router