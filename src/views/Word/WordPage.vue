<template>
    <div class="Word-page">
        <div class="title-word-page"  data-aos="fade-left" data-aos-duration="8000">
            <Title_2 :Title="title"/>
        </div>
        <div class="search-word-page"  data-aos="fade-right" data-aos-duration="8000">
            <div class="search-word">
                <SearchWordCard />
            </div>
        </div>
        <div class="topic-card-wrap"  data-aos="fade-left" data-aos-duration="8000">
            <div class="topic-card-container">
                <TopicCard_1/>
            </div>
        </div>
      

    </div>
    
</template>
<script>
import Title_2 from '@/components/TitleCard/Title_2.vue';
import SearchWordCard from '@/components/Searchs/SearchWordCard.vue';
import TopicCard_1 from '@/components/TopicCard/TopicCard_1.vue';
export default{
    name:'AppWordPage',
    components:{
        Title_2, SearchWordCard, TopicCard_1
    }, 
     data(){
        return{
            title:{title:'Danh sách từ vựng',content:'Khám phá thư viện của chúng tôi với hơn 1500 từ vựng được tuyển chọn.'},
        }
    },
}
</script>
<style scoped>
.Word-page{
    margin-top: 220px;
    margin-bottom: 150px;
}

.topic-card-wrap{
    margin-top: 60px;

}

@media(max-width:768px){
 .Word-page{
    margin-top: 220px;
    margin-bottom: 150px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}   

}
</style>