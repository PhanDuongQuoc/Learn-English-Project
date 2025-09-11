<template>
    <div class="Title-Card">
        <div class="Title-wrap">
            <h3 class="Tilte" data-aos="fade-right" data-aos-duration="20000" v-if="currentTilte">
                Từ vựng {{ currentTilte?.word}} 
            </h3>
            <h3 class="Tilte" data-aos="fade-right" data-aos-duration="20000"  v-else>
                Luyện tập
            </h3>
            <p class="Content" data-aos="fade-right" data-aos-duration="20000" v-if="currentTilte">
                Chi tiết từ vựng tiếng Anh giao tiếp cơ bản hằng ngày.
            </p>
            <p class="Content" data-aos="fade-right" data-aos-duration="20000" v-else>
               Từ vựng tiếng Anh giao tiếp
            </p>
        </div>

    </div>
</template>

<script>
import WordService from '@/services/WordServices/WordService';
import { useRoute } from 'vue-router';
export default{
    name:'AppTitleCard_2',
    components:{

    },
    props:{
        Title:{
            type:String,
            default:'Empty'
        }
    },
    data(){
        return{
            currentTilte:null,
          
        }
    },
    created(){
        this.nameData()
    },
     computed:{
        wordlist(){
            const wordservice = new WordService()
            return wordservice.LoadData()
        }
    },
    methods:{
        nameData(){
            const route =  useRoute()
            const wordid = route.params.id
            this.currentTilte = this.wordlist.find(s=>s.id==wordid)
        }


    }
    
}
</script>
<style scoped>
.Title-Card{
    margin:50px 0;
    text-align: center;

    
}
.Tilte{
    color: #dd0182;
    font-size: 40px;
    font-weight: bold;

}
.Content{
    font-size: 18px;
    font-weight: lighter;
}
@media(max-width:768px){
    .Tilte{
        color: #dd0182;
        font-size: 25px;
    }
    .Content{
    font-size: 15px;
    font-weight: lighter;
}
}
</style>