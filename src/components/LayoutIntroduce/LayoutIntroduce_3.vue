<template>
 <el-row :span="24" class="container">
    <el-col :span="14">
       <div class="Content">
            <div class="content-wrap">
                <h2 class="title">
                    {{Content.title}}
                </h2>
                <br>
                <p class="content">
                    {{ Content.content }}
                </p>
                <br>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-center">
                    <a href="#!" class="btn bsb-btn-2xl btn-outline-dark">
                         Chứng nhận trình độ tiếng anh
                    </a>
                </div>
            </div>
       </div>
    </el-col>
    <el-col :span="10">
        <div class="Media">
            <div class="media-image">
                <img :src="Content.image" alt="">
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'AppLayoutIntroduce_3',
    props:{
        Content:{
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
    .title{
        color: #dd0182;
        font-size: 45px;
    }
    .content{
        font-size: 20px;
    }
    .content-link{
        color: #4a33d9;
        text-decoration: none;
    }
    .media-image img{
            width: 500px;
    }
     .btn{
        background-color: #dd0182 !important;
        border: 2px solid white;
        color: white !important;
        border-radius: 10px !important;
        text-transform: uppercase;
        padding: 10px;
        box-shadow: 14px 4px 15px rgba(0,0,0,0.2);
      
    }
    .btn:hover{
        background-color:white !important;
        border: 2px solid #dd0182;
        color: #dd0182 !important;
    }
    @media(max-width:768px){
        .container{
            flex-direction: column;
            align-items: center;
          
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