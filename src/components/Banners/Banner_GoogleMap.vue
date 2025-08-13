<template>
    <div class="Title-container">
        <Title_1 :Title="title"/>
    </div>
    <div class="Container-wrap">
        <el-row class="container-wrap-google-map">
            <el-col :xs="16" :sm="18" class="container-card container-google-map"  data-aos="fade-left" data-aos-duration="20000">
                 <div class="map-wrapper">
                        <iframe class="iframe-map"  
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.637159614036!2d106.7122688!3d10.7799315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4649e7ca29%3A0x55f531b6120cae3b!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1754358494411!5m2!1svi!2s" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            </el-col>
            <el-col :xs="8" :sm="6" class="container-card container-title" data-aos="fade-right" data-aos-duration="20000">
                 <div class="Media">
                    <div class="media-image" >
                        <img src="https://www.bgca.org/wp-content/uploads/2024/01/BGCA_Workforce-Blog3-Teamwork_945x625.jpeg" alt="">
                    </div>
                    <div class="media-text">
                        <div class="icon-cocated" data-aos="fade-right" data-aos-duration="20000">
                            <i class="fa-solid fa-location-dot" ></i>
                        </div>
                        <h2 class="title" data-aos="fade-right" data-aos-duration="20000">Learn English</h2>
                       
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Title_1 from '../TitleCard/Title_1.vue';
export default{
    name:'AppBannerGoogleMap',
    components:{
        Title_1
    },
    data(){
        return{
            title:{
                title:'Google Map'
            }
        
        }
    }
}
</script>
<style scoped>
.Container-wrap{
     margin-bottom: 80px;
}
.container-google-map{

    height: 500px;
    border-top-right-radius: 70%;
    overflow: hidden;
    border-right: 15px solid #4a33d9;
}
.map-wrapper{
    height: 100%;
}
.iframe-map {
    width: 100%;
    height: 100%;
    border: none;
}

.container-title{
 border-left: 15px solid #dd0182;
 border-top-left-radius: 100%;
 position: relative;
}
.Media{
        
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    background-repeat: no-repeat;
    border-top-left-radius: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    
    
}

.media-image {
    width: 100%;
    height: 100%;
    
}

.media-image img {
    width: 100%;
    height: 100%;
    object-fit:cover; 
    display: block;
    opacity: 0.3;
}

.media-text {
    position: absolute;
    top: 50%;  
    left: 60%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    border-radius: 8px;
 
}


.fa-location-dot{
    color: #dd0182;
    font-size: 30px;
}
.media-text .title{
    color: #dd0182;   
     
    
}

@media(max-width:768px){
    .container-google-map{
        height: 350px;
    }
    .media-image img {
        transform: translate( 1px, 10px);
    }
    .container-title, .Media{
          border-top-left-radius: 60%;
    }
}

</style>