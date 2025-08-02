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
</template>

<script>
import Banner_1 from '@/components/Banners/Banner_1.vue';
import LayoutIntroduce_1 from '@/components/LayoutIntroduce/LayoutIntroduce_1.vue';
import LayoutIntroduce_2 from '@/components/LayoutIntroduce/LayoutIntroduce_2.vue';
export default{
    name:'HomePage',
    components:{ Banner_1, LayoutIntroduce_1,LayoutIntroduce_2},
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
        }
    }
  }
}
</script>

<style scoped>
    .Banner_1{
        margin-top: 135px;
    }
</style>