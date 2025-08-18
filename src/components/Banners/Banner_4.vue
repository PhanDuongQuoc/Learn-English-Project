<template>
    <section class="Banner mt-5 mt-sm-4 mt-md-3 mt-lg-2">
        <div class="container-banner">
            <div class="row-banner">
                <div class="col-12">
                    <div class="container-fluid bsb-hero-6  border"
                    >                
                        <div data-aos="fade-up"  data-aos-duration="8000"  class="row justify-content-md-center align-items-center">
                            <div class="col-12 col-md-11 col-xl-10 mt-5 mt-sm-4 mt-md-3 mt-lg-2 content-banner">
                                <h2 class="display-1 text-center text-md-center text-shadow-head fw-bold mb-4  mt-5 ">Học ngoại ngữ cùng Learn English</h2>
                                <!-- <p class="lead text-center text-md-start text-shadow-body mb-5 d-flex justify-content-sm-center justify-content-md-center">
                                    <span class="col-12 col-sm-10 col-md-8 col-xxl-7 span-text">Khám phá cách học tiếng Anh hiệu quả, dễ hiểu và đầy cảm hứng – đồng hành cùng bạn trên hành trình chinh phục ngôn ngữ toàn cầu.</span>
                                </p> -->
                                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-center">
                                    <a href="#!" class="btn bsb-btn-2xl btn-outline-dark">
                                        BẤT ĐẦU
                                    </a>
                                </div>


                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name:'Banner_4',
    components:{

    },
    data(){
        return{

        }
    },
    props:{
      banners:{
        type: Object,
        required: true
      }
    }
}
</script>

<style scoped>
.container-banner{
    margin-bottom: 75px;
}
    .container-fluid {
       background: linear-gradient(135deg, #4a33d9 0%, #4a33d9 100%);
         border-top-left-radius: 25%;
        border-top-right-radius: 25%;
        border-bottom-left-radius: 60%;
  
    }
    .btn{
        background-color: #dd0182 !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        border: 2px solid #dd0182;
        color: white !important;
        border-radius: 10px !important;
        width: 300px;
      
    }
    .btn:hover{
        background-color:white !important;
        border: 2px solid white;
        color: #dd0182 !important;
    }
    .content-banner{
        margin-bottom: 160px;
        color: #dd0182;
    }

    .display-1{
        font-size:55px;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        .display-1 {
            font-size: 25px !important;
        }
        .btn{
            width: 150px;
            margin-left: auto;
            margin-right: auto;
            font-size: 10px;
        }
        .container-fluid {
            background: linear-gradient(135deg, #4a33d9 0%, #4a33d9 100%);
            border-top-left-radius: 25%;
            border-top-right-radius: 25%;
            border-bottom-left-radius: 65%;
            height: 320px;
        
        }
        .display-1{
            font-size:55px;
            width: 350px;
            margin-left: auto;
            margin-right: auto;
        }
        .content-banner{
            margin-top: auto;
            margin-bottom: auto;
            color: #dd0182;
        }
    }
</style>