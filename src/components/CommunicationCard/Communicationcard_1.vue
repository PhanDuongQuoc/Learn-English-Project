<template>
   <div class="Title-container">
        <Title_1 :Title="title"/>
    </div>
    <div class="Commnication-Card">
       <div class="communication-wrap-card">
            <el-row :gutter="20"  class="wrap-card-big">
                <el-col :xs="24" :sm="12" class="wrap-card-1">
                    <div class="image-card" data-aos="fade-right"  data-aos-duration="4000">
                        <button class="arrow arrow-left" @click="prevImage">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                       <img 
                        v-if="SlideBanner.images && SlideBanner.images.length" 
                        :key="currentIndex" 
                        :src="SlideBanner.images[currentIndex]" 
                        alt=""
                            >
                        <button class="arrow arrow-right" @click="nextImage">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </el-col>
               <el-col :xs="24" :sm="12" class="wrap-card-2">
                    <el-row :gutter="20" class="inner-row">
                        <el-col  :xs="12" :sm="12" v-for="(img, index) in images" :key="index">
                        <div class="small-box">
                            <img :src="img" alt="small image" data-aos="fade-left"  data-aos-duration="4000" />
                        </div>
                        </el-col>
                    </el-row>
                </el-col>
               
            </el-row>

       </div>
    </div>
</template>

<script>
import Title_1 from '../TitleCard/Title_1.vue';
export default{
    name:'AppCommunicationCard_1',
    components:{
        Title_1
    },
     props:{
        SlideBanner:{
            type: Object,
            required: true
        },
         images: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
             title:{
                title:'Cộng Đồng Giao Tiếp'
            },
            currentIndex: 0,
            intervalId: null
        }
    },
      mounted() {
        this.startAutoSlide()
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    },
    methods: {
        startAutoSlide() {
            if (this.SlideBanner.images && this.SlideBanner.images.length > 0) {
                this.intervalId = setInterval(this.nextImage, 4000)
            }
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.SlideBanner.images.length
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.SlideBanner.images.length) % this.SlideBanner.images.length
        }
    }
}
</script>
<style scoped>
.Commnication-Card{
  max-width: 1200px;  
  margin: 0 auto;
}
.communication-wrap-card{
    width: 100%;
    margin:0 auto;
   

    
}



.wrap-card-1{
    height: 100%;


}
.wrap-card-2{
     height: 100%;
     margin: auto 0;
     
}

.inner-row {
  height: 100%;
}
.small-box {
  height: calc(100% - 10px);
  display: flex;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  overflow: hidden;
}
.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #4a33d9;
    border: none;
    color: white;
    font-size: 24px;
    padding: 5px 15px;
    cursor: pointer;
    z-index: 2;
    border-radius: 50%;
    transition: background 0.3s;
}
.small-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  
}
.arrow:hover {
    opacity: 0.5;
}

.small-box img:hover{
    transform: scale(1.5);
}
.arrow-left {
    left: 20px;
}
.arrow-right {
   margin-left: 240px;
}
.wrap-card-big{
    overflow: hidden;
    height: 100%;
}
.image-card{
    width: 100%;
    height: 100%;
    overflow: hidden;
   border-radius:50px;

}
.wrap-card-1 .image-card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius:50px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
   
}

.wrap-card-1 .image-card img:hover{
    transform: scale(1.5);
   
}


@media(max-width:768px){
    .communication-wrap-card{
        width: 90%;
        margin:0 auto;
    

        
    }

    .wrap-card-2{
        padding-top: 10px;
    }
    .arrow-right {
        margin-left: 115px;
    }
    .small-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
     
        
    }
    .wrap-card-1 .image-card img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius:50px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    }
}

</style>