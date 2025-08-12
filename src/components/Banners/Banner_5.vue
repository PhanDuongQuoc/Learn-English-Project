<template>
 <el-row :span="24" class="container-introduce-wrap">


    <el-col data-aos="fade-up"  data-aos-duration="8000"  :span="12">
        <div class="Content">
                <div class="content-wrap">
                    <h3 class="title-small">
                        <i class="fas fa-rocket icon-title"></i> 
                        {{ ContentBanner.title_small }}
                        <i class="fas fa-chart-line icon-title"></i>
                    </h3>
                    <h2 class="title-large">
                        {{ContentBanner.title_large}}
                    </h2>
                    <br>
                    <div class="button-click">
                        <button class="btn cta-button">
                              <i class="fas fa-route"></i>
                               Xem lộ trình
                        </button>
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
                <img :src="ContentBanner.image" alt="">
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'Banner_5',
    props:{
        ContentBanner:{
            type: Object,
            required: true
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
            font-size: 35px;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
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
        
    }

</style>