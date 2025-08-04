<template>
 <el-row :span="24" class="container">
    <el-col :span="14">
       <div class="Content">
            <div class="content-wrap" data-aos="fade-left" data-aos-duration="4000">
                <h2 class="title">
                    {{Content.title}}
                </h2>
                <br>
                <p class="content">
                    {{ Content.content }}
                </p>
            </div>
       </div>
    </el-col>
    <el-col :span="10">
        <div class="Media">
            <div class="media-image" data-aos="fade-left" data-aos-duration="4000">
                <img :src="Content.image" alt="">
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default{
    name:'AppLayoutIntroduce_1',
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
        color: rgb(119,119,119);
    }
    .content-link{
        color: #4a33d9;
        text-decoration: none;
    }
    .media-image img{
            width: 500px;
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
    }

</style>