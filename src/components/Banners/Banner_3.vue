<template>
 <el-row :span="24" class="container">
    <el-col :span="10">
        <div class="Media">
            <div class="media-image">
                <img :src="ContentBanner.image" alt="">
            </div>
        </div>
    </el-col>

    <el-col data-aos="fade-up"  data-aos-duration="8000"  :span="14">
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
                              
                               Thử 1 tuần miễn phí
                        </button>
                    </div>
                </div>
                
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'Banner_3',
    props:{
        ContentBanner:{
            type: Object,
            required: true
        }
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
    .title-large {
        color: #dd0182;
        font-size: 70px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
    }
    .title-small{
        color: #4a33d9;
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
    .media-image img{
            width: 550px;
    }
    .cta-button {
            background:  #4a33d9;
            border: none;
            border-radius: 25px;
            padding: 15px;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#4a33d9 ;
            border: 2px solid #4a33d9;
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