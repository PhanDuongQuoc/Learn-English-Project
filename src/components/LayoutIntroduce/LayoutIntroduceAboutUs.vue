<template>
 <el-row :span="24" class="container">
    <el-col :span="10">
        <div class="Media">
            <div class="media-image" data-aos="fade-right" data-aos-duration="4000">
                <img :style="customStyle" :src="Content.image" alt="">
            </div>
        </div>
    </el-col>

    <el-col :span="14">
        <div class="Content">
                <div class="content-wrap" data-aos="fade-right" data-aos-duration="4000">
                    <h2 class="title" data-aos="fade-right" data-aos-duration="4000">
                        
                        {{Content.title}}
                    </h2>
                    <br>
                    <p class="content" data-aos="fade-right" data-aos-duration="4000">
                        {{ Content.content }}
                    </p>
                     <br>
                     <!--Muốn để vào gữa thì sử dụng cái này -->
                    <!--justify-content-sm-center justify-content-md-center-->
                    <div class="button-wrap d-grid gap-2 d-sm-flex " data-aos="fade-right" data-aos-duration="4000">
                        <a href="#!" class="btn bsb-btn-2xl btn-outline-dark ">
                            <i class="fa-solid fa-bullseye"></i>
                            {{ Content.button_goal }}
                        </a>
                        <a href="#!" class="btn bsb-btn-2xl btn-outline-dark ">
                            <i class="fa-solid fa-file"></i>
                            {{ Content.button_method }}
                        </a>
                    </div>
                    
                </div>
         
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'AppLayoutIntroduceAboutUs',
    props:{
        Content:{
            type: Object,
            required: true
        },
        styleWidth:{
            type:String,
            default:'500px'
        },
        styleHeight:{
            type:String,
            default:'300px'
        }
    },
    computed:{
            customStyle() {
            return {
                '--style-width': this.styleWidth,
                '--style-height':this.styleHeight,
            }
        },
    }
}
</script>
<style scoped>
    .Content,.Media{
        height: 500px;
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
    }
    .content-wrap{
        width: 75%;
        
    }
    
     .btn{
        background-color: #dd0182 !important;
        border: 2px solid white;
        color: white !important;
        border-radius: 10px !important;
        padding: 10px;
        box-shadow: 14px 4px 15px rgba(0,0,0,0.2);
      
      
    }
    .btn:hover{
        background-color:white !important;
        border: 2px solid #dd0182;
        color: #dd0182 !important;
    }
    .fa-solid{
        margin-right: 5px;
       
    }
    .title{
        color: #4a33d9;
        font-size: 45px;
        text-align: start;
    }
    .content{
        font-size: 20px;
        color: rgb(119,119,119);
        text-align: start;
    }
    .content-link{
        color: #4a33d9;
        text-decoration: none;
    }
    .media-image img{
            width: var(--style-width);
            height: var(--style-height);
            border-radius: 20px;
            box-shadow: 2px 2px 10px rgba(1, 1, 0, 0.1);
            border-bottom-left-radius: 15%;
            border-top-right-radius: 15%;
            border-bottom: 10px solid #4a33d9 ;
            border-top:10px solid #dd0182;
    }
   
    @media(max-width:768px){
        .container{
            flex-direction: column;
            align-items: center;
          
        }
         .Media{
              height: 300px;
        }
        .Content{
            height: 450px;
        }
        .title{
            color: #dd0182;
            font-size: 20px;
            text-align: center;
        }
        .content{
            font-size: 15px;
            text-align: center;
        }
        .media-image img{
            width: 350px !important;
              height: 250px;
        }
        .btn{
        background-color: #dd0182 !important;
        border: 2px solid white;
        color: white !important;
        border-radius: 10px !important;
        text-transform: uppercase;
        font-size: 10px;
        box-shadow: 14px 4px 15px rgba(0,0,0,0.2);
    
        }
    }

</style>