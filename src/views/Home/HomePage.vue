<template>
    <div class="Banner_6">
        <Banner_6 :ContentBanner="contentData_10"/>
    </div>
    <!-- <div class="Banner_1">
        <Banner_1/>
    </div> -->
    <br>
  
    <div data-aos="fade-left" data-aos-duration="4000" class="Layout_1">
        <LayoutIntroduce_1 :Content="contentData_1"/>
    </div>
    <br>
    <div data-aos="fade-right" data-aos-duration="4000" class="Layout_2">
        <LayoutIntroduce_2 :Content="contentData_2"/>
    </div>
    <div data-aos="fade-left" data-aos-duration="4000" class="Layout_3">
        <LayoutIntroduce_1 :Content="contentData_3"/>
    </div>
    <div data-aos="fade-right" data-aos-duration="4000" class="Layout_4">
         <LayoutIntroduce_2 :Content="contentData_4"/>
    </div>
    <div class="Banner_2">
        <Banner_2/>
    </div>
    <div data-aos="fade-left" data-aos-duration="4000" class="Banner_3">
        <Banner_3 :ContentBanner="contentData_5"/>
    </div>
    <div data-aos="fade-right" data-aos-duration="4000" class="Layout_3">
        <LayoutIntroduce_3 :Content="contentData_6"/>
    </div>
    <br>
    <div data-aos="fade-left" data-aos-duration="4000" class="layout_4">
        <LayoutIntroduce_4 :Content="contentData_7"/>
    </div>
    <div data-aos="fade-right" data-aos-duration="4000" class="Layout_5">
        <LayoutIntroduce_3 styleWidth="600px" :Content="contentData_8"/>
    </div>
    <br/>
    <div data-aos="fade-left" data-aos-duration="4000" class="layout_6">
        <LayoutIntroduce_4 styleWidth="450px" :Content="contentData_9"/>
    </div>
    <br>
    <div  data-aos="fade-right" data-aos-duration="4000" class="banner-topic_1">
        <TopicBanner_1/>
    </div>
    <br>
    <div class="Contact-card">
        <div data-aos="fade-left" data-aos-duration="4000" class="contactcard">
            <ContactCard_1/>
        </div>
    </div>
    
    <div data-aos="zoom-out" data-aos-duration="4000" class="Banner_4">
        <Banner_4/>
    </div>

</template>

<script>
import LayoutIntroduce_1 from '@/components/LayoutIntroduce/LayoutIntroduce_1.vue';
import LayoutIntroduce_2 from '@/components/LayoutIntroduce/LayoutIntroduce_2.vue';
import LayoutIntroduce_3 from '@/components/LayoutIntroduce/LayoutIntroduce_3.vue';
import LayoutIntroduce_4 from '@/components/LayoutIntroduce/LayoutIntroduce_4.vue';
// import Banner_1 from '@/components/Banners/Banner_1.vue';
import Banner_2 from '@/components/Banners/Banner_2.vue';
import Banner_3 from '@/components/Banners/Banner_3.vue';
import Banner_4 from '@/components/Banners/Banner_4.vue';
import Banner_6 from '@/components/Banners/Banner_6.vue';
import TopicBanner_1 from '@/components/TopicBanners/TopicBanner_1.vue';
import ContactCard_1 from '@/components/ContactCards/ContactCard_1.vue';
export default{
    name:'HomePage',
    components:{ Banner_2,Banner_3, Banner_4,Banner_6,
                LayoutIntroduce_1,LayoutIntroduce_2,
                LayoutIntroduce_3,LayoutIntroduce_4,TopicBanner_1,ContactCard_1},
    data() {
    return {
        contentData_1: {
        title: 'Miễn phí. vui nhộn. hiệu quả',
        content: 'Học cùng LearnEnglish rất vui nhộn, các nghiên cứu đã chứng minh ứng dụng thật sự hiệu quả! Các bài học nhỏ gọn sẽ giúp bạn ghi điểm, mở khóa cấp độ mới và luyện tập kỹ năng giao tiếp hữu dụng.',
        image: require('@/assets/image/banner_1/media_1.png')
        },
        contentData_2:{
            title: 'Dựa trên căn cứ khoa học',
            content: 'Chúng tôi kết hợp các phương pháp giảng dạy khoa học với nội dung học thú vị để tạo nên những khóa học hữu ích giúp bạn luyện tập nghe, nói, đọc và viết!',
            image: require('@/assets/image/banner_1/media_2.png')
        },
        contentData_3:{
            title: 'Tiếp thêm động lực',
            content: 'Ứng dụng giúp người học dễ dàng xây dựng thói quen học tập, qua những tính năng mô phỏng trò chơi, các thử thách vui vẻ, và nhắc nhở từ người bạn thân thiện - cú Learn English.',
            image: require('@/assets/image/banner_1/media_3.png')
        },
        contentData_4:{
            title: 'Cá nhân hóa trải nghiệm học',
            content: 'Kết hợp những điểm mạnh nhất của trí tuệ nhân tạo (AI) và khoa học về ngôn ngữ, các bài học được cá nhân hóa để giúp bạn tìm được cấp độ và nhịp độ học phù hợp nhất.',
            image: require('@/assets/image/banner_1/media_4.png')
        },
        contentData_5:{
            title_small:'Power Up With',
            title_large: 'Super Learn English',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/012/025/326/small_2x/united-kingdom-flag-in-grunge-style-png.png'
        },

        contentData_6:{
            title: 'Learn english test',
            content: 'Là kỳ thi tiếng Anh tiện lợi, nhanh chóng với chi phí phải chăng, với sự kết hợp từ những nghiên cứu khoa học mới nhất và trí thông minh nhân tạo (AI) nhằm trao cơ hội giúp tất cả mọi người có thể thực hiện bài thi từ bất kỳ đâu, vào bất kỳ lúc nào khi họ thấy thoải mái nhất.',
            image: 'https://images.credly.com/images/52b4c697-5bc3-44eb-9413-56abe393cf8c/twitter_thumb_201604_Artboard_1_copy_6.png',
            button:'CHỨNG NHẬN TRÌNH ĐỘ TIẾNG ANH'
        },

        contentData_7:{
            title: 'Learn english for schools',
            content: 'Dành cho các giáo viên! Công cụ hỗ trợ miễn phí giúp học viên của bạn học ngoại ngữ thông qua ứng dụng Duolingo, cả trong và ngoài lớp học.',
            image:require('@/assets/image/Layout/english.png'),
            button:'MỞ LỚP HỌC CỦA BẠN NGAY NÀO'
        },
        contentData_8:{
            title: 'Learn English ABC',
            content: 'Từ học ngoại ngữ cho tới học đọc! Với các bài học đánh vần vui nhộn và những câu chuyện thú vị, Duolingo ABC giúp trẻ em từ 3-8 tuổi học đọc và viết - 100% miễn phí.',
            image:require('@/assets/image/Layout/english_1.png'),
            button:'Tìm hiểu thêm về abc'
        },
        contentData_9:{
            title: 'Learn english math',
            content: 'Vẫn là các bài học miễn phí và nhỏ gọn - nhưng là dành cho môn Toán! Các bài học vui nhộn giúp học sinh tiến bộ trên lớp còn người lớn có thể sử dụng để luyện tập thêm trí não và nâng cấp khả năng toán học.',
            image:require('@/assets/image/Layout/englishmath.png'),
            button:'CHINH PHỤC MÔN TOÁN BẰNG TIẾNG ANH'
        },
        contentData_10:{
            title_small:'Từ mới - Tầm mới',
            title_large: 'Học từ vựng cùng Learn English',
            images: [
                'https://www.teachingenglish.org.uk/sites/teacheng/files/images/GettyImages-612249076_web_0.jpeg',
                 'https://bridge.edu/tefl/blog/wp-content/uploads/2024/08/Developing-Teamwork-and-Social-Skills-in-Business-English.jpg',
                  'https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_1395144844_h8h2eo.jpg',
            ]
        },

    }
  }
}
</script>

<style scoped>
    .Banner_6{
        margin-top: 150px;
    }
    
</style>