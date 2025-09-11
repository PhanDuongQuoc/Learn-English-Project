<template>
    <div class="word-list-container">
        <div class="title-word-page"  data-aos="fade-left" data-aos-duration="8000">
            <Title_2 :Title="title"/>
        </div>
         <div class="search-word-page"  data-aos="fade-right" data-aos-duration="8000">
            <div class="search-word">
                <SearchWordCard />
            </div>
        </div>
        <br>
        <br>
        <div class="header-content-container" data-aos="fade-right" data-aos-duration="8000"> 
            <div class="start-study-button">
                <button class="start-button">
                    <i class="fa-solid fa-play start-solid start-fa-solid"></i>
                    Bất đầu học
                </button>

            </div>
            <div class="container-wrap">
                <div class="ppt-download margin-all">
                    <i class="fa-solid fa-file"></i>
                </div>
                <div class="excel  margin-all">
                    <i class="fa-solid fa-file-excel"></i>
                </div>
                <div class="reset  margin-all">
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
          

            </div>
        </div>
         <br>
  
        <div class="Word-card-wrap" data-aos="fade-right" data-aos-duration="8000">
            <WordCard
                v-for="(item,index) in paginatedWords" 
                :key="index"
                :Words="item"
            />
        </div>
        

        <div class="pagination-container">
            <button
                class="page-btn"
                :disabled="currentPage === 1"
                @click="backCurrentPage"
            >
                <i class="fa-solid fa-chevron-left icon-pagination"></i>
            </button>

        <span class="page-info">
             {{ currentPage }} - {{ totalPages }}
        </span>

        <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="nextCurrentPage"
        >
            <i class="fa-solid fa-chevron-right icon-pagination"></i>
        </button>
        </div>

        <br /><br />

        <div class="back-page-before" data-aos="fade-right" data-aos-duration="8000">
            <RouterLink to="/learn-english/tu-vung-tieng-anh">

                <button class="back-button">
         
                    <i class="fa-solid fa-backward"></i>
                    Quay lại
                </button>
            </RouterLink>

        </div>
    </div>
</template>
<script>
import Title_2 from '@/components/TitleCard/Title_2.vue';
import SearchWordCard from '@/components/Searchs/SearchWordCard.vue';
import WordCard from '@/components/WordCards/WordCard.vue';
import { RouterLink } from 'vue-router';
export default{
    name:'AppListWordPage',
    components:{
        Title_2,SearchWordCard,WordCard, RouterLink
    },
    data(){
        return{
            title:{title:'Chủ đề #',content:'Khám phá thế giới giao thông vận tải với từ vựng về các phương tiện, quy tắc giao thông và cách hỏi đường.'},
           wordlist: [
            { word: "apple", pronunciation: "/ˈæp.əl/" },
            { word: "banana", pronunciation: "/bəˈnɑː.nə/" },
            { word: "orange", pronunciation: "/ˈɒr.ɪndʒ/" },
            { word: "grape", pronunciation: "/ɡreɪp/" },
            { word: "mango", pronunciation: "/ˈmæŋ.ɡoʊ/" },
            { word: "pear", pronunciation: "/per/" },
            { word: "peach", pronunciation: "/piːtʃ/" },
            { word: "strawberry", pronunciation: "/ˈstrɔːˌber.i/" },
            { word: "watermelon", pronunciation: "/ˈwɑː.t̬ɚˌmel.ən/" },
            { word: "pineapple", pronunciation: "/ˈpaɪnˌæp.əl/" },
            { word: "dog", pronunciation: "/dɑːɡ/" },
            { word: "cat", pronunciation: "/kæt/" },
            { word: "bird", pronunciation: "/bɝːd/" },
            { word: "fish", pronunciation: "/fɪʃ/" },
            { word: "elephant", pronunciation: "/ˈel.ə.fənt/" },
            { word: "tiger", pronunciation: "/ˈtaɪ.ɡɚ/" },
            { word: "lion", pronunciation: "/ˈlaɪ.ən/" },
            { word: "car", pronunciation: "/kɑːr/" },
            { word: "bus", pronunciation: "/bʌs/" },
            { word: "bicycle", pronunciation: "/ˈbaɪ.sɪ.kəl/" }
            ],

            currentPage: 1,
            itemsPerPage: 8,

        }
    },

     computed: {
        
        totalPages() {
           
            return Math.ceil(this.wordlist.length / this.itemsPerPage);
            
        },
        paginatedWords() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            console.log({current:this.currentPage,items:this.itemsPerPage})
            const end = start + this.itemsPerPage;
            return this.wordlist.slice(start, end);
        },
    },
    methods:{
        nextCurrentPage(){
            return this.currentPage++;
        },
        backCurrentPage(){
            return this.currentPage--;
        }
    }
  
}
</script>
<style scoped>
.word-list-container{
      margin-top: 220px;
    margin-bottom: 120px;
}
.header-content-container{
    background-color: #dd0182;
    width: 1200px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    margin: 0 auto;

}
.start-solid{
    font-size: 20px !important;
    margin-right: 5px;
    margin-left: 5px;
}
.start-study-button{
    width: 20%;
    justify-content: center;
    align-items: center;
    display: flex;


}
.start-button{
    background-color: #4a33d9;
    color: white;
    border-radius: 20px;
    width:  150px;
    font-size: 15px;
    border:1px solid #4a33d9;
    padding: 5px;
       display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.start-button:active{
    background-color: white;
    color: #4a33d9;
}

.start-button:active .start-fa-solid{
    filter: brightness(0) saturate(100%) invert(19%) sepia(100%) saturate(2713%) hue-rotate(245deg) brightness(86%) contrast(99%);
}
.fa-solid{
    font-size: 25px;
    color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.fa-solid:active{
    font-size: 25px;
    color: #4a33d9;
}
.container-wrap{
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: auto;
}
.margin-all{
    margin: 0 auto;
    

}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.page-btn {
  background: #dd0182;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  display: block;
}
.page-btn:disabled {
  background: #4a33d9;
  cursor: not-allowed;
}
.page-info {
  font-size: 0.8rem;
  color: #4a33d9;
  font-weight: bold;
}
.icon-pagination{
    font-size: 15px;
}

.Word-card-wrap{
    width: 1200px;
    background-color: #dd0182;
    padding: 40px;
    /* border-top-right-radius: 100%;
    border-bottom-left-radius: 100%; */
    border-radius: 20px;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
    margin: 0 auto;

}
.back-button{
    width: 150px;
    border: 1px solid #dd0182;
    background-color: #dd0182;
    color: white;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px;   
    border-radius: 20px;
}
.back-button:hover{
    background-color: white;
    color: #dd0182;
}
.fa-backward{
    margin-right: 10px;
    
}

.back-button:hover .fa-backward{
   filter: brightness(0) saturate(100%) invert(13%) sepia(97%) saturate(6587%) hue-rotate(317deg) brightness(88%) contrast(104%);
}

@media (max-width:768px)
{
    .word-list-container{
         width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .header-content-container{
        background-color: #dd0182;
        width: 100%;
   
        border-radius: 20px;
        margin: 0 auto;
    }
    .Word-card-wrap{
        width: 100%;
        padding: 15px;
        grid-template-columns: repeat(2,1fr);
        border-radius: 20px;
        gap: 10px;
    }
    .container-wrap{
        width: 30%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-left: auto;
    }
    .start-solid{
        font-size: 15px !important;
        
    }
    .fa-solid{
        font-size: 20px;
        color: white;
    }

    .start-button{
        background-color: #4a33d9;
        color: white;
        border-radius: 20px;
        width:  100px;
        font-size: 10px;
        border:1px solid #4a33d9;
        padding: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
    }
    .start-study-button{

        width: 35%;


    }
    .icon-pagination{
        font-size: 12px;
    }

}
</style>