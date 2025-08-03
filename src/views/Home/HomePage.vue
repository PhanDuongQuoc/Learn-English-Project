<template>
    <div class="Banner_1">
        <Banner_1/>
    </div>
    <br>
    <div class="Layout_1">
        <LayoutIntroduce_1 :Content="contentData_1"/>
    </div>
    <br>
    <div class="Layout_2">
        <LayoutIntroduce_2 :Content="contentData_2"/>
    </div>
    <div class="Layout_3">
        <LayoutIntroduce_1 :Content="contentData_3"/>
    </div>
    <div class="Layout_4">
         <LayoutIntroduce_2 :Content="contentData_4"/>
    </div>
    <div class="Banner_2">
        <Banner_2/>
    </div>
    <div class="Banner_3">
        <Banner_3 :ContentBanner="contentData_5"/>
    </div>
    <div class="Layout_3">
        <LayoutIntroduce_3 :Content="contentData_6"/>
    </div>
</template>

<script>
import LayoutIntroduce_1 from '@/components/LayoutIntroduce/LayoutIntroduce_1.vue';
import LayoutIntroduce_2 from '@/components/LayoutIntroduce/LayoutIntroduce_2.vue';
import Banner_1 from '@/components/Banners/Banner_1.vue';
import Banner_2 from '@/components/Banners/Banner_2.vue';
import Banner_3 from '@/components/Banners/Banner_3.vue';
import LayoutIntroduce_3 from '@/components/LayoutIntroduce/LayoutIntroduce_3.vue';
export default{
    name:'HomePage',
    components:{ Banner_1, Banner_2,Banner_3 ,LayoutIntroduce_1,LayoutIntroduce_2,LayoutIntroduce_3},
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
            image: 'https://images.credly.com/images/52b4c697-5bc3-44eb-9413-56abe393cf8c/twitter_thumb_201604_Artboard_1_copy_6.png'
        },

    }
  }
}
</script>

<style scoped>
    .Banner_1{
        margin-top: 135px;
    }
    .Banner_3{
        /* background-color: #dd0182; */
    }
</style>