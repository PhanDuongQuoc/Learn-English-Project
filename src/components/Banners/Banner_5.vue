<template>
 <el-row :span="24" class="container-introduce-wrap">


    <el-col data-aos="fade-up"  data-aos-duration="8000"  :span="12">
        <div class="Content">
                <div class="content-wrap">
                    <h3 class="title-small">
                        {{ ContentBanner.title_small }}
                    </h3>
                    <h2 class="title-large">
                        {{ContentBanner.title_large}}
                    </h2>
                    <br>
                    <div class="button-click">
                        <button class="btn cta-button">
                              
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
    .title-large {
        color: #dd0182;
        font-size: 55px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
    }
    .title-small{
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
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
            border-radius: 25px;
            padding: 15px;
            color: white;
            
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#dd0182 ;
            border: 2px solid #dd0182;
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
        .Media{
            height: 300px;
        }
        .title{
            color: #dd0182;
            font-size: 20px;
        }
        .content{
            font-size: 15px;
        }
        .media-image img{
            width: 350px;
        }
         .title-large {
            color: #dd0182;
            font-size: 45px;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
        }
         .cta-button {
            background:  #4a33d9;
            border: none;
            border-radius: 25px;
            color: white;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
    }

</style>