<template>
 <el-row :span="24" class="container-introduce-wrap">
    <el-col data-aos="fade-up"  data-aos-duration="8000"  :span="12">
        <div class="Content">
                <div class="content-wrap">
                    <h3 class="title-small">
                        <!-- <i class="fas fa-rocket icon-title"></i>  -->
                        {{ ContentBanner.title_small }}
                        <!-- <i class="fas fa-chart-line icon-title"></i> -->
                    </h3>
                    <h2 class="title-large">
                        {{ContentBanner.title_large}}
                    </h2>
                    <br>
                    <div class="button-click">
                        <!-- <button class="btn cta-button">
                              <i class="fas fa-route"></i>
                               Xem lộ trình
                        </button> -->
                        <button class="btn cta-button">
                              <i class="fas fa-award"></i> 
                               Trải nghiệm ngay
                        </button>
                    </div>
                    
                </div>
                
        </div>
        
    </el-col>
    <el-col :span="12" class="bg-image" data-aos="fade-up"  data-aos-duration="8000">
        <div class="Media">
            <div class="media-image" data-aos="fade-up"  data-aos-duration="8000">
                 <button class="arrow arrow-left" @click="prevImage">
                    <i class="fas fa-chevron-left"></i>
                </button>

        
                <img 
                    v-if="ContentBanner.images && ContentBanner.images.length" 
                    :key="currentIndex" 
                    :src="ContentBanner.images[currentIndex]" 
                    alt=""
                >
      
                <button class="arrow arrow-right" @click="nextImage">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'Banner_6',
    props:{
        ContentBanner:{
            type: Object,
            required: true
        }
    },
     data() {
        return {
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
            if (this.ContentBanner.images && this.ContentBanner.images.length > 0) {
                this.intervalId = setInterval(this.nextImage, 4000)
            }
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.ContentBanner.images.length
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.ContentBanner.images.length) % this.ContentBanner.images.length
        }
    }
}
</script>
<style scoped>
    .container-introduce-wrap{
       background-color: #4a33d9;
    }
    .Content,.Media{
        height: 600px;
    }
    .Content{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Media{
        
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        background-repeat: no-repeat;
        border-top-left-radius: 70%;
        width: 100%;
        height: 100%;
        overflow: hidden;

        
    }
    .fa-chart-line{
        margin-left: 10px;
    }
    .title-large {
        color: #dd0182;
        font-size: 60px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
      
    }
    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #dd0182;
        border: none;
        color: white;
        font-size: 24px;
        padding: 8px 12px;
        cursor: pointer;
        z-index: 2;
        border-radius: 50%;
        transition: background 0.3s;
    }
    .arrow:hover {
        opacity: 0.5;
    }
    .arrow-left {
        left: 60px;
    }
    .arrow-right {
        right: 40px;
    }
    .fas{
        margin-right: 10px;
    }
    .title-small{
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
    }
    .icon-title{
        color:white;
    }
    .content{
        font-size: 20px;
    }
    .content-link{
        color: #4a33d9;
        text-decoration: none;
    }

   
    .cta-button {
            background: #dd0182;
            border: none;
            border-radius: 10px;
            margin-left: 5px;
            color: white;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            /* border: 1px solid white; */
           
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#dd0182 ;
            border: 1px solid #dd0182;
        }

        .media-image {
            width: 100%;
            height: 100%;
        }

    .media-image img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        display: block;
    }
    @media(max-width:768px){
       
        .container{
            flex-direction: column;
            align-items: center;
          
        }
  
        .media-image img{
            width: 350px;
        }
        .title-small{
            font-size: 12px;
        }
         .title-large {
            color: #dd0182;
            font-size: 25px;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
        }
        .arrow-left {
            left: 10px;
        }
        .arrow-right {
            right: 10px;
        }
         .cta-button {
            background:  #dd0182;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 9px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(1,1,0,0.2);
            /* border: 1px solid white; */
            width: 120px;
             margin-top: 10px;

     
        }

         .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#dd0182 ;
            border: 2px solid #dd0182;
        }
        .button-click{
           margin-top: -20px;
        }
        
    }

</style>