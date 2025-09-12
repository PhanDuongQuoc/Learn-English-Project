<template>
    <div class="container-page-blog">
        <div class="title-word-page"  data-aos="fade-left" data-aos-duration="8000">
            <Title_3 :Title="titlecontent"/>
        </div>
    </div>
</template>

<script>
import Title_3 from '@/components/TitleCard/Title_3.vue';
export default{
    name:'AppBlogPage',
    components:{
        Title_3
    },
    data(){
        return{
            titlecontent:{title:'Blog Learn English',content:'Chia sẻ kiến thức, tin tức, sự kiện và báo chí'}
        }
    }
}
</script>
<style scoped>
.container-page-blog{
    margin-top: 200px;
    margin-bottom: 150px;
}
</style>