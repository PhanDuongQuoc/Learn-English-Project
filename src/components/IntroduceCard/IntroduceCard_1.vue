<template>
    <div class="Container-card-wrap" >
        <el-row :span="24" class="Introduce-card">
            <div class="container-card">
                    <el-row :span="24" class="Card-wrap">
                        <el-col :xs="24" :sm="8" class="Card p-3" data-aos="fade-right" data-aos-duration="20000">
                            <div class="card h-100 text-center shadow-sm p-4 card-1">
                                <div class="icon-wrap  bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:60px; height:60px;">
                                    <i class="fa-solid fa-book-open fa-2x text-primary-icon"></i>
                                </div>
                                <h5 class="fw-bold title-card">Lộ trình học rõ ràng</h5>
                                <p class="text-muted">Nền tảng tuyệt vời giúp tập ôn và cải thiện tiếng Anh một cách hiệu quả.</p>
                                <div class="arrow">
                                     <a href="#">
                                     <i class="fa-notdog fa-solid fa-eye"></i>
                                   </a>
                                </div>
                            </div>
                        </el-col>

                        <el-col :xs="24" :sm="8" class="Card p-3" data-aos="zoom-in" data-aos-duration="20000">
                            <div class="card h-100 text-center shadow-sm p-4 card-2">
                                <div class="icon-wrap bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:60px; height:60px;">
                                   <i class="fa-solid fa-microphone fa-2x text-primary-icon"></i>
                                </div>
                                <h5 class="fw-bold title-card">Luyện phát âm với AI</h5>
                                <p class="text-muted">Bài học tương tác và thú vị giúp bạn phát âm dễ dàng hơn.</p>
                                <div class="arrow">
                                   <a href="#">
                                     
                                     <i class="fa-notdog fa-solid fa-eye"></i>
                               
                                   </a>
                                </div>
                            </div>
                        </el-col>

                        <el-col :xs="24" :sm="8" class="Card p-3" data-aos="fade-left" data-aos-duration="20000">
                            <div class="card h-100 text-center shadow-sm p-4 card-3">
                                <div class="icon-wrap  bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:60px; height:60px;">
                                   <i class="fa-solid fa-chart-line fa-2x text-primary-icon"></i>
                                </div>
                                <h5 class="fw-bold title-card">Theo dõi tiến bộ</h5>
                                <p class="text-muted">Dễ dàng theo dõi quá trình học tập và cải thiện kỹ năng tốt hơn.</p>
                                <div class="arrow">
                                   <a href="#">
                                     
                                    <i class="fa-notdog fa-solid fa-eye"></i>
                               
                                   </a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

            </div>
        </el-row>
    </div>
</template>

<script>
export default{
    name:'appIntroducecard_1',
    components:{

    }
}
</script>
<style lang="css" scoped>
.Container-card-wrap{

   padding-bottom:10px ;
}

.container-card{
    width: 1000px;
 
    margin-left: auto;
    margin-right: auto;
}

.Card{
    height: 400px;
    
}
.icon-wrap{
    border-left: 3px solid #dd0182;
    border-right: 3px solid #4a33d9;
}
.card{
  border-radius: 15px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-left: 10px solid #dd0182;
  border-right: 10px solid #4a33d9;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transition: transform 0.6s;

}

.card:hover{
    transform: rotate(-5deg);
}
/* .card-1{
     background-color: #E6F0F2;
}

.card-2{
     background-color:rgba(255, 180, 180, 0.2);
}

.card-3{
        background-color: #F7F4ED;
} */
.title-card{
    color: #4a33d9;
}
.text-primary-icon{
    color: #dd0182;
}
.arrow a{
    font-size: 20px;
    color: #dd0182;
}
.arrow a:hover{
    color: #4a33d9;
}
@media(max-width:768px){
    .card{
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    .text-mute{
        font-size: 15px;
    }
}
</style>