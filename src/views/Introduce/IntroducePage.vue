<template>
    <div class="Container-introduce">
        <div data-aos="fade-left" data-aos-duration="4000" class="Banner_3">
            <Banner_5 :ContentBanner="contentData_5"/>
        </div>
        <div class="Introduce-about-us">
             <div data-aos="fade-right" data-aos-duration="4000" class="layout_4">
                <LayoutIntroduceAboutUs :Content="contentData_7"/>
            </div>
        </div>
        <div class="Introduce-about-card">
            <div data-aos="fade-left" data-aos-duration="4000" class="About-Card" >
                <IntroduceCard_1 />
            </div>
        </div>

        <div class="Banner-statistic">
            <div data-aos="fade-right" data-aos-duration="4000" class="BannerStatistic">
                <BannerStatistic/>
            </div>
        </div>
          <div class="Commnunicatio-Card">
            <div data-aos="fade-left" data-aos-duration="4000" class="Commnunicationcard">
                <Communicationcard_1 :SlideBanner="slidebanner" :images="smallImages"/>
            </div>
        </div>
        <div class="Banner-google-map">
           <div data-aos="fade-right" data-aos-duration="4000" class="Banner-map">
             <BannerGoogleMap/>
           </div>
        </div>
      
    </div>
  
</template>
<script>
import Banner_5 from '@/components/Banners/Banner_5.vue';
import LayoutIntroduceAboutUs from '@/components/LayoutIntroduce/LayoutIntroduceAboutUs.vue';
import IntroduceCard_1 from '@/components/IntroduceCard/IntroduceCard_1.vue';
import BannerStatistic from '@/components/Banners/Banner_Statistic.vue';
import BannerGoogleMap from '@/components/Banners/Banner_GoogleMap.vue';
import Communicationcard_1 from '@/components/CommunicationCard/Communicationcard_1.vue';
export default{
    name:'AppIntroduce',
    components:{
        Banner_5,
        LayoutIntroduceAboutUs,
        IntroduceCard_1,
        BannerStatistic,
        BannerGoogleMap,
        Communicationcard_1
    },
    data(){
        return{
            contentData_5:{
                title_small:'Nâng tầm - Vươn xa',
                title_large: 'Siêu học từ vựng tiếng Anh',
                image: 'https://images.gostudy.com.au/cb:B5fG.2d141/w:1400/h:800/q:mauto/f:best/ig:avif/id:bdd9e92e8b790d65d12fbc9fa03f79b5/https://www.gostudy.com.au/Study_english_header-1.jpg'
            },
            contentData_7:{
                title: 'Về chúng tôi',
                content: 'Chúng tôi tin rằng tiếng Anh không chỉ là ngôn ngữ, mà còn là chìa khóa, mở ra cơ hội. Sứ mệnh của chúng tôi là mang lại phương pháp học cá nhân hoá, giúp bạn học hiệu quả hơn mỗi ngày.',
                // image:require('@/assets/image/Layout/english.png'),
                image:'https://bostontutoringservices.com/wp-content/uploads/2018/07/Group-Work.jpg',
                button_goal:'Mục tiêu',
                button_method:'Phương pháp'
            },
            slidebanner:{
           
                    images: [
                        'https://promova.com/content/group_learning_e69e5bd76b.jpg',
                        'https://buildconfianza.com/wp-content/uploads/2018/02/img-1.jpg',
                        'https://www.betterup.com/hubfs/coworkers-giving-high-five-to-each-other-after-meeting-benefits-of-temwork-1.jpg',
                    ]
                },

                smallImages: [
                        'https://kidsdiscover.com/wp-content/uploads/2018/09/Teaching_Teamwork.jpg',
                        'https://previews.123rf.com/images/dolgachov/dolgachov1611/dolgachov161105006/65553746-education-school-teamwork-and-people-concept-group-of-international-students-with-hands-on-top.jpg',
                        'https://www.rmcad.edu/wp-content/uploads/2025/01/shutterstock_2253876977-scaled.jpg',
                        'https://www.flyfive.org/wp-content/uploads/2022/11/11_28_22_Flyby_article_image_1Website.png',
                    ]
        }
    },
    
}
</script>

<style scoped>
.Container-introduce{
    margin-top: 150px;
    margin-bottom: 20px;
}
</style>