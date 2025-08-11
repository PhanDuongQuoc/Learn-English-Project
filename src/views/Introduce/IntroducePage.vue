<template>
    <div class="Container-introduce">
        <div data-aos="fade-left" data-aos-duration="4000" class="Banner_3">
            <Banner_5 :ContentBanner="contentData_5"/>
        </div>
    </div>
</template>
<script>
import Banner_5 from '@/components/Banners/Banner_5.vue';
export default{
    name:'AppIntroduce',
    components:{
        Banner_5
    },
    data(){
        return{
        contentData_5:{
            title_small:'Nâng tầm - Vươn xa',
            title_large: 'Siêu học từ vựng tiếng Anh',
            image: 'https://images.gostudy.com.au/cb:B5fG.2d141/w:1400/h:800/q:mauto/f:best/ig:avif/id:bdd9e92e8b790d65d12fbc9fa03f79b5/https://www.gostudy.com.au/Study_english_header-1.jpg'
        },
        }
    }
}
</script>
<style scoped>
.Container-introduce{
    margin-top: 150px;
    margin-bottom: 20px;
}
</style>