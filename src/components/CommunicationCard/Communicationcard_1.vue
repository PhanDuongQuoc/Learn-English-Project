<template>
   <div class="Title-container">
        <Title_1 :Title="title"/>
    </div>
    <div class="Commnication-Card">
       <div class="communication-wrap-card">
            <el-row :span="24" class="wrap-card">
                <el-col :span="8" class="wrap-card-1">
                    <div class="image-card">
                        <img src="" alt="">
                    </div>
                </el-col>
                 <el-col :span="8" class="wrap-card-1">
                     <div class="image-card">
                        <img src="" alt="">
                    </div>
                </el-col>
                 <el-col :span="8" class="wrap-card-1">
                     <div class="image-card">
                        <img src="" alt="">
                    </div>
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
    data(){
        return{
             title:{
                title:'Cộng Đồng Tiếng Anh'
            },
        }
    }
}
</script>
<style scoped>
.communication-wrap-card{
    background-color: #4a33d9;
    height: 800px;
    width: 1000px;
    margin:0 auto;
    
}


</style>