<template>
    <section class="Banner mt-5 mt-sm-4 mt-md-3 mt-lg-2">
        <div class="container-banner">
            <div class="row-banner">
                <div class="col-12">
                    <div class="container-fluid bsb-hero-6 bsb-overlay border"
                    :style="{
                        '--bsb-overlay-opacity': '0.6',
                        '--bsb-overlay-bg-color': 'var(--bs-light-rgb)',
                        backgroundImage: `url(${require('@/assets/image/banner_1/banner_image_1.jpg')})`
                        }">                
                        <div class="row justify-content-md-center align-items-center">
                            <div class="col-12 col-md-11 col-xl-10 mt-5 mt-sm-4 mt-md-3 mt-lg-2 content-banner">
                                <h2 class="display-1 text-center text-md-center text-shadow-head fw-bold mb-4  mt-5 ">Học ngoại ngữ miễn phí, vui nhộn và hiệu quả!</h2>
                                <p class="lead text-center text-md-start text-shadow-body mb-5 d-flex justify-content-sm-center justify-content-md-center">
                                    <span class="col-12 col-sm-10 col-md-8 col-xxl-7 span-text">Khám phá cách học tiếng Anh hiệu quả, dễ hiểu và đầy cảm hứng – đồng hành cùng bạn trên hành trình chinh phục ngôn ngữ toàn cầu.</span>
                                </p>
                                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-center">
                                    <a href="#!" class="btn bsb-btn-2xl btn-outline-dark">
                                        <i class="fa-solid fa-graduation-cap me-2"></i> Bắt đầu học ngay
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
    name:'Banner_1',
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

    .btn{
        background-color: #dd0182 !important;
        border: 2px solid white;
        color: white !important;
        border-radius: 10px !important;
      
    }
    .btn:hover{
        background-color:white !important;
        border: 2px solid #dd0182;
        color: #dd0182 !important;
    }
    .content-banner{
        margin-bottom: 180px;
        color: #4a33d9;
    }

    .display-1{
        font-size:55px;
    }

    @media (max-width: 768px) {
        .display-1 {
            font-size: 35px !important;
        }
        .btn{
            width: 150px;
            margin-left: auto;
            margin-right: auto;
            font-size: 12px;
        }

    }
</style>