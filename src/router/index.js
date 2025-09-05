import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import Introducepage from '@/views/Introduce/IntroducePage.vue'
import WordPage from '@/views/Word/WordPage.vue'
const routes = [
    {path:'/',component:HomePage},
    {path:'/learn-english/gioi-thieu',component:Introducepage},
    {path:'/learn-english/tu-vung-tieng-anh',component:WordPage}

]
const router = createRouter({
  history: createWebHistory(),
  routes,
 scrollBehavior() {
     return { left: 0, top: 0,right:0 }
 },
})

export default router