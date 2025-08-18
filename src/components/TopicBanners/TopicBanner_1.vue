<template>
    <div class="Title-container">
        <div class="title-wrap">
            <Title_1 :Title="title"/>
        </div>
    </div>
    <div class="Banner-topic-container">
        <div class="banner-topic-wrap">
            <div class="first-banner">
                <el-row  class="content-first-banner">
                    <el-col :xs="24" :sm="11" class="wrap-card-1">
                        <div class="content-title">
                            <h4  data-aos="fade-left" data-aos-duration="4000" class="title">IELTS tại trung tâm</h4>
                            <p  data-aos="fade-left" data-aos-duration="4000" class="content">
                                Lộ trình học IELTS toàn diện, được nghiên cứu, thiết kế riêng biệt, xây nền tảng Tiếng Anh vững chắc & tư duy ngôn ngữ phù hợp với mọi lứa tuổi, trình độ khác nhau.
                            </p>
                        </div>
                        <div  data-aos="fade-left" data-aos-duration="4000" class="content-logo">
                            <img class="img-banner"  src="../../assets/image/banner_topic/ielts.png" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="13" class="wrap-card-2"  data-aos="fade-right" data-aos-duration="4000">
                        <div class="img-cetificate">
                            <img class="image-cer" src="https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/06/06/124625-ielts.png" alt="">
                        </div>
                    </el-col>
                    
                </el-row>
            
            </div>

        </div>
        <br>
        <div class="banner-topic-wrap">
            <div class="second-banner">
                <div class="content-second-banner">
                    <el-row :gutter="20" class="wrap-card">
                         <el-col :xs="24" :sm="12" class="wrap-card-3">
                           <div class="card-inner blue-card">
                                <div class="content-title">
                                    <h4  data-aos="fade-left" data-aos-duration="4000" class="title">Kid & Teenager</h4>
                                    <p  data-aos="fade-left" data-aos-duration="4000" class="content">
                                    Xây dựng nền tảng tiếng Anh toàn diện, phát triển khả năng tư duy logic, phản biện. Đào tạo theo chuẩn đầu ra của chứng chỉ Cambridge
                                    </p>
                                </div>
                                <div class="content-img">
                                    <img data-aos="fade-left" data-aos-duration="4000" src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/kids-and-teens-health/kids-and-teens-health-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1297&hash=872C5B0EB8CA7CD30E8CDB4DB96CFC8B" alt="">
                                </div>
                           </div>
                        </el-col>
                       <el-col :xs="24" :sm="12" class="wrap-card-4">
                            <div class="card-inner cream-card">
                                <div class="content-title">
                                <h4  data-aos="fade-left" data-aos-duration="4000" class="title">SAT Preparation</h4>
                                <p  data-aos="fade-left" data-aos-duration="4000" class="content">
                                Luyện thi SAT tại The Forum với lộ trình học tập khoa học, giúp cải thiện và phát triển toàn diện kỹ năng cho học viên với trọng tâm sát nhất với các tiêu chí đánh giá của bài thi             
                               </p>
                            </div>
                            <div class="content-img" >
                                <img  data-aos="fade-left" data-aos-duration="4000" src="https://www.endurosat.com/wp-content/uploads/2019/10/EnduroSat-is-now-a-member-of-the-International-Astronautical-Federation-IAF-3-1504x1080.jpg" alt="">
                            </div>
                            </div>
                        </el-col>
                    </el-row>

                </div>

            </div>
        </div>
    </div>
    
</template>
<script>
import Title_1 from '../TitleCard/Title_1.vue';
export default{
    name:'AppTopicBanner_1',
    components:{
        Title_1
    },
      data(){
        return{
             title:{
                title:'Các Chủ Đề Có Thể Phù Hợp Với Bạn'
            },
          
        }
    },
}
</script>
<style scoped>
.title-wrap{
    width: 550px;
    margin: 0 auto;
}
.banner-topic-wrap{
    
    max-width: 1200px;
    
    margin: 0 auto;


}
.content-img{
    height: 230px;
    margin-top: 125px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

}
.content-img img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-top-left-radius: 70%;
    border-top-right-radius: 70%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
.content-img img:hover{
    opacity: 0.5;
}
.blue-card{
    background-color: #E6F0F2;

    height: 500px;
    border-radius: 40px;
    
}
.cream-card{
     background-color: #F7F4ED;

    height: 500px;
    border-radius: 40px;
}
.second-banner{
    width: 100%;
  width: 1200px;
  margin: 0 auto;
   
}

.content-first-banner{
    width: 100%;
    background-color:rgba(255, 180, 180, 0.2);
    /* background-color: #ebe6e9; */
    border-radius: 40px;
}

.wrap-card-1{
    position: relative;
}
.title{
    font-size: 23px;
    color: #dd0182;
    font-weight: bold;
}
.image-cer{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    border-top-left-radius: 70%;
    
    border-top-right-radius:40px;
    border-bottom-right-radius:40px;

    
}
.image-cer:hover{
       opacity: 0.5;
        
}
.img-cetificate{
    width: 100%;
    height: 100%;
    overflow: hidden;
    
}
.content{
    font-size: 16px;
    color: rgb(119,119,119);
}
.content-title{
    text-align: start;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 20px;
}
.wrap-card-2{
    width: 100%;
    height: 400px;
   
}
.content-logo{
    width: 200px;
    margin-top: 150px;

}
.img-banner{
    width: 120px;
    height: 50;
}
@media(max-width:768px){
    .title-wrap{
        width: 300px;
        margin: 0 auto;
    }
    .content-first-banner{
        width: 90%;
        background-color:rgba(255, 180, 180, 0.2);
        /* background-color: #ebe6e9; */
        border-radius: 40px;
        margin: 0 auto;
    }

    .image-cer{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        border-top-left-radius: 0% !important;
        
        border-top-left-radius:70% !important;
        border-bottom-right-radius:40px;
        border-bottom-left-radius:40px;

        
    }
    .content-logo{
        width: 200px;
        margin-top: 0;

    }
    .wrap-card-2{
        width: 100%;
        height: 300px;
    
    }
  
     .card-inner {
        margin-bottom: 40px;
        width: 31%;
        margin-left: 20px;
    }
    
    .content-img{
        height: 230px;
        margin-top: 95px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;

    }

    
    
}
</style>