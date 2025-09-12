import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import Introducepage from '@/views/Introduce/IntroducePage.vue'
import WordPage from '@/views/Word/WordPage.vue'
import ListWordPage from '@/views/ListWord/ListWordPage.vue'
import WordDetailPage from '@/views/WordDetail/WordDetailPage.vue'
import StartStudyPage from '@/views/Study/StartStudyPage.vue'
import BlogPage from '@/views/Blog/BlogPage.vue'
const routes = [
    {path:'/',component:HomePage},
    {path:'/learn-english/gioi-thieu',component:Introducepage},
    {path:'/learn-english/tu-vung-tieng-anh',component:WordPage},
    {path:'/learn-english/tu-vung-tieng-anh/chu-de', component:ListWordPage},
    {path:'/learn-english/tu-vung-tieng-anh/chu-de/chi-tiet-tu-vung/:id',component:WordDetailPage,props:true},
    {path:'/learn-english/tu-vung-tieng-anh/chu-de/hoc-trai-nghiem',component:StartStudyPage},
    {path:'/learn-english/tin-tuc-tieng-anh',component:BlogPage}
]
const router = createRouter({
  history: createWebHistory('/Learn-English-Project/'),
  routes,
 scrollBehavior() {
     return { left: 0, top: 0,right:0 }
 },
})

export default router