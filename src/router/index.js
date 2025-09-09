import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import Introducepage from '@/views/Introduce/IntroducePage.vue'
import WordPage from '@/views/Word/WordPage.vue'
import ListWordPage from '@/views/ListWord/ListWordPage.vue'
import WordDetailPage from '@/views/WordDetail/WordDetailPage.vue'
const routes = [
    {path:'/',component:HomePage},
    {path:'/learn-english/gioi-thieu',component:Introducepage},
    {path:'/learn-english/tu-vung-tieng-anh',component:WordPage},
    {path:'/learn-english/tu-vung-tieng-anh/chu-de', component:ListWordPage},
    {path:'/learn-english/tu-vung-tieng-anh/chu-de/chi-tiet-tu-vung',component:WordDetailPage}

]
const router = createRouter({
  history: createWebHistory(),
  routes,
 scrollBehavior() {
     return { left: 0, top: 0,right:0 }
 },
})

export default router