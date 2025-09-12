<template>
    <div class="word-detail-container">
        <div class="title-word-page"  data-aos="fade-left" data-aos-duration="8000">
            <Title_2 />
        </div>
        <div class="message-card-detail" data-aos="fade-right" data-aos-duration="8000">

            <p data-aos="fade-left" data-aos-duration="8000" class="content-notice">Chú ý: bạn được học tối đa 20 từ mới một ngày. Đây là lượng từ phù hợp để bạn có thể học hiệu quả.</p>
        </div>
        <br>
        <div class="container-progress">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-bullseye"></i>
            
            <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: progressPercent + '%' }">
                              <i class="fa-solid fa-rocket plane-icon" :style="{ left: progressPercent + '%' }"></i>
                </div>
      
            </div>
            
        </div>
        <br>
        <div class="container-word-detail" data-aos="fade-left" data-aos-duration="8000" v-if="closecardword">
            <StudyCard_1
                 v-for="(item,index) in paginatedWords" 
                :key="index"
                :Words="item"
                :showFlash="showEnglish"
                 @update:showEnglish="handleShowEnglish"
            />
        </div>
         <div v-if="cardmessage" class="modal-overlay">

             <div class="notice-message-complete container-word-message alert alert-success text-center position-relative modal-overlay"
                data-aos="fade-right" data-aos-duration="2000"
             >
                 <div>
                     <i class="fa-solid fa-circle-check fa-3x text-success mb-3"   data-aos="fade-right" data-aos-duration="2000"></i>
                     <h3 class="fw-bold title-bold"   data-aos="fade-right" data-aos-duration="2000">Chúc mừng!</h3>
                     <p class="mb-0"   data-aos="fade-right" data-aos-duration="2000">Bạn đã hoàn thành bài học</p>
                 </div>
                 <div class="button-close" @click="closeModal">
                    <i class="fa-solid fa-circle-xmark"></i>
                 </div>
             </div>
         </div>
        <br>
        <div class="container-word-level" v-if="closecardword">
            <div class="icon-easy icon-list" >
                <i class="fa-solid fa-face-smile icon-click"></i>
                <p class="title-level">Dễ</p>
            </div>

            <div class="icon-midlle icon-list" >
                <i class="fa-solid fa-face-meh icon-click"></i>
                <p class="title-level">Trung bình</p>
            </div>

            <div class="icon-hard icon-list" >
                <i class="fa-solid fa-face-frown icon-click"></i>
                <p class="title-level">Khó</p>
            </div>

          <div class="icon-next icon-list" >
               <i class="fa-solid fa-forward icon-click" @click="nextCard()"></i>
       
            <p class="title-level">
               Tiếp theo
            </p>
          </div>
        </div>
        <br>
        <div class="back-page-before">
            <RouterLink to="/learn-english/tu-vung-tieng-anh/chu-de" >

                <button class="back-button" >
         
                    <i class="fa-solid fa-backward" ></i>
                    Quay lại
                </button>
            </RouterLink>

        </div>
        <br>
    </div>
</template>
<script>
import Title_2 from '@/components/TitleCard/Title_2.vue';
import StudyCard_1 from '@/components/Studys/StudyCard_1.vue';
import WordService from '@/services/WordServices/WordService';
export default{
    name:'WordDetailPage',
    components:{
        Title_2,StudyCard_1
    },
    data(){
        return{
            currentPage:1,
            itemsPerPage:1,
            cardmessage:false,
            closecardword:true,
            showEnglish:true,
        }
    },
    created(){
        console.log({data:this.wordlist.Words})
    },
    computed:{
        wordlist(){
            const wordservice = new WordService()
            return wordservice.LoadData()
        },
           totalPages() {
           
            return Math.ceil(this.wordlist.length / this.itemsPerPage);
            
        },
        progressPercent(){
            return (this.currentPage/this.totalPages)*100;
        },
          paginatedWords() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            console.log({currentPage:this.currentpage})
            const end = start + this.itemsPerPage;
            return this.wordlist.slice(start, end);
        },
        
    },
    methods:{
         nextCard() {
                if (this.currentPage === this.totalPages) {
                    this.cardmessage=!this.cardmessage
                    this.closecardword=!this.closecardword
                   
                } else {
                    this.currentPage++;
                    this.showEnglish = true
                }
            },

            // cập nhật dữ liệu từ con ---> cha thông qua $emit truyền từ con 
            handleShowEnglish(newValue) {
                this.showEnglish = newValue;
            },
        
            closeModal(){
                this.cardmessage=false;
            }
           
       
    }


  
}
</script>

<style scoped>


.word-detail-container{
      margin-top: 200px;
    margin-bottom: 100px;
    width: 100%;
}
.fa-circle-check{
    color: #4a33d9 !important;
}
.message-card-detail{
    width: 800px;
    height: 50px;
    background-color: #f8efbc;
    margin: 0 auto;
    border-radius: 10px;
}
.title-bold{
    color: #dd0182;
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
  z-index: 1050;
}
.container-word-detail{
    /* width: 1000px;
    height: 500px;
    background-color: white;
    border: 1px solid #d4d8db;
    box-shadow: 10px 15px 10px rgba(15, 15, 15, 0.1);

    margin: 0 auto;
    border-radius: 20px; */
}


.container-progress{
    width: 700px;
    margin: 0 auto;
    position: relative;
}
.fa-flag{
    position: absolute;
    bottom: 0px;
    left: -30px;
    font-size: 25px;
    color:#4a33d9;
}
.fa-bullseye{
     position: absolute;
    bottom: px;
    right: -30px;
    font-size: 25px;
    color:#dd0182;
}

.progress-bar-container{
    width: 100%;
    height: 25px;
    background-color: #e0e0e0;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
    position: relative;
 
  
}

.progress-bar{
    height: 100%;
    background-color: #dd0182;
    transition: width 0.3s ease;
   
}

.plane-icon{
    color: #4a33d9;
    position: absolute;
    font-size: 28px;
    transform: translateX(-50%) rotate(45deg);
    
}
.title-next{
    width: 180px;
    margin: 0 auto;
}
.container-word-level{
    width:800px;
    height: 100px;
    background-color: white;
    border: 1px solid #d4d8db;
    box-shadow: 10px 15px 10px rgba(15, 15, 15, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 20px;
    padding-top: 15px;
   
}

.container-word-message{
     width:800px;
    height: 400px;
     background-color: white;
    border: 1px solid #d4d8db;
    box-shadow: 10px 15px 10px rgba(15, 15, 15, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 20px;
    padding-top: 15px;
    position: relative;
}

.content-notice{
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 15px;
    color: #855a1f;

}
.button-close{
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 20px;
    color: #dd0182;
    
}
.icon-list{
    margin: 0 auto;
    width: 100%;
    
}
.icon-easy{
    color:#4CAF50 ;
}
.icon-midlle{
    color: #FFC107;
}
.icon-hard{
    color:#F44336 ;
}
.icon-next{
    color:#4a33d9;
}
.icon-click{
    cursor:pointer;
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
    margin-bottom: 15px;
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


@media(max-width:768px){
    .word-detail-container{
        
    }
.container-progress{
    width: 70%;
   
}
    .message-card-detail{
        width: 90%;
    }

    .container-word-message{
        width: 90%;
    }
    .container-word-level{
        width: 90%;
    }
    .content-notice{
        font-size: 12px;
        display: inline-flex;
        justify-content: start;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

    }
    .back-page-before{
        width: 90%;
        margin: 0 auto;
    }
    .title-word-page{
        width: 90%;
        margin: 0 auto;
    }
    .plane-icon{
        font-size: 25px;
    }
   
}


</style>
