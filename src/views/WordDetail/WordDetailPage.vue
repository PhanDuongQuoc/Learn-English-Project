<template>
    <div class="word-detail-container">
        <div class="title-word-page"  data-aos="fade-left" data-aos-duration="8000">
            <Title_2 :Title="title"/>
        </div>
        <div class="message-card-detail" data-aos="fade-right" data-aos-duration="8000">

            <p data-aos="fade-left" data-aos-duration="8000" class="content-notice">Chú ý: bạn được học tối đa 20 từ mới một ngày. Đây là lượng từ phù hợp để bạn có thể học hiệu quả.</p>
        </div>
        <br>
        <div class="container-word-detail" data-aos="fade-left" data-aos-duration="8000">
            <WordDetailCard/>
        </div>
        <br>
        <!-- <div class="container-word-level" data-aos="fade-left" data-aos-duration="2000">
            <div class="icon-easy icon-list" data-aos="fade-left" data-aos-duration="2000">
                <i class="fa-solid fa-face-smile icon-click"></i>
                <p class="title-level">Dễ</p>
            </div>

            <div class="icon-midlle icon-list" data-aos="fade-left" data-aos-duration="2000">
                <i class="fa-solid fa-face-meh icon-click"></i>
                <p class="title-level">Trung bình</p>
            </div>

            <div class="icon-hard icon-list" data-aos="fade-left" data-aos-duration="2000">
                <i class="fa-solid fa-face-frown icon-click"></i>
                <p class="title-level">Khó</p>
            </div>

          <div class="icon-next icon-list" data-aos="fade-left" data-aos-duration="2000">
               <i class="fa-solid fa-forward icon-click"></i>
       
            <p class="title-level title-next">
               Đã biết, loại khỏi danh sách ôn tập
            </p>
          </div>
        </div> -->
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
import WordDetailCard from '@/components/WordDetail/WordDetailCard.vue';
export default{
    name:'WordDetailPage',
    components:{
        Title_2,WordDetailCard
    },
    data(){
        return{
             title:{title:'Từ Vựng #',content:'Chi tiết từ vựng tiếng Anh giao tiếp cơ bản hằng ngày.'},
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
.message-card-detail{
    width: 800px;
    height: 50px;
    background-color: #f8efbc;
    margin: 0 auto;
    border-radius: 10px;
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
.content-notice{
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 15px;
    color: #855a1f;

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

    .message-card-detail{
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
   
}


</style>
