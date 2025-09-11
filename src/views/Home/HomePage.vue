<template>
    <div class="home-container">
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
        <div data-aos="fade-right" data-aos-duration="4000" class="banner-topic_1">
            <TopicBanner_1/>
        </div>
        <br>
        <div class="Contact-card">
            <div data-aos="fade-left" data-aos-duration="4000" class="contactcard">
                <ContactCard_1/>
            </div>
        </div>
        <div class="Testimonial-card" data-aos="fade-right" data-aos-duration="4000">
            <button class="page-btn btn-left" @click="backPage()" :disabled="currentPage===1"
                data-aos="fade-right" data-aos-duration="4000"
            >
                <i class="fa-solid fa-chevron-left icon-pagination"></i>
            </button>
            <div class="title-wrap">
                <Title_1 :Title="title"/>
            </div>
     
            <section class="py-5 py-xl-8 container-testimonial-card">
                <div class="container">
                    <div class="row gy-4 gy-md-0 gx-xxl-5">
                        <TestimonialCard_1
                         v-for="(item,index) in paginationTestiminials" 
                            :key="index"
                            :Testiminials="item"/>
                    </div>
                </div>
            </section>
              <button class="page-btn btn-right" @click="nextPage()" :disabled="currentPage===totalPage"
                data-aos="fade-left" data-aos-duration="4000"
              >
                <i class="fa-solid fa-chevron-right icon-pagination"></i>
            </button>
        </div>
        
        <div data-aos="zoom-out" data-aos-duration="4000" class="Banner_4">
            <Banner_4/>
        </div>
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
import TestimonialCard_1 from '@/components/Testimonials/TestimonialCard_1.vue';
import Title_1 from '@/components/TitleCard/Title_1.vue';

export default{
    name:'HomePage',
    components:{ Banner_2,Banner_3, Banner_4,Banner_6,
                LayoutIntroduce_1,LayoutIntroduce_2,
                LayoutIntroduce_3,LayoutIntroduce_4,
                TopicBanner_1,ContactCard_1,TestimonialCard_1,
                Title_1},
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
        title:{
            title:'Đánh Giá Của Cộng Đồng'
        },

        itemTestiminials:[
                {
                    image:'https://media.vov.vn/sites/default/files/styles/large/public/2023-09/rose-1076012.jpg',
                    content:'Tôi thấy việc học từ vựng tiếng Anh theo thẻ từ thật sự hiệu quả. Mỗi ngày tôi đều học được thêm vài từ mới và nhớ lâu hơn rất nhiều.',
                    name:'Rose Nguyễn', level:'VIP', major:'Sinh viên'
                },
                {
                    image:'https://vcdn1-giaitri.vnecdn.net/2023/04/30/david-beckham-jpeg-9988-1682789339.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=g3EpmDJp1IKQxOgIRmQkBQ',
                    content:'Ứng dụng này giúp tôi luyện tập từ vựng tiếng Anh dễ dàng hơn. Tôi có thể vừa học vừa ôn tập mỗi ngày mà không bị chán.',
                    name:'David Trần', level:'Basic', major:'Chủ tịch'
                },
                {
                    image:'https://musicfeeds.com.au/wp-content/uploads/sites/7/justin-bieber-2016-press-pic-supplied.jpg',
                    content:'Nhờ có phương pháp học từ vựng bằng ví dụ và ngữ cảnh, tôi thấy mình ghi nhớ nhanh hơn và áp dụng vào giao tiếp tốt hơn.',
                    name:'Phạm Justin', level:'Standard', major:'Nhạc sỹ'
                },
                {
                    image:'https://kenh14cdn.com/2020/6/1/890418006244950681088149165964086477617723n-1590989017416651141586.jpg',
                    content:'Nhờ có phương pháp học từ vựng bằng ví dụ và ngữ cảnh, tôi thấy mình ghi nhớ nhanh hơn và áp dụng vào giao tiếp tốt hơn.',
                    name:'Maria Phạm', level:'VIP', major:'Diễn viên'
                },
                {
                    image:'https://media.vietnamplus.vn/images/42139c4ac0f1efdabeea97c7f4c534570a01cacb3a62c7fe1fb81643767844eefad65e27574ffa7784e526c1f5f7e26e/taylor-swift-0901.jpg',
                    content:'Học từ mới qua flashcard thật sự giúp tôi tiết kiệm thời gian và có động lực học mỗi ngày.',
                    name:'Taylor Lê', level:'Premium', major:'Ca sĩ'
                },
                {
                    image:'https://vcdn1-vnexpress.vnecdn.net/2024/05/20/1753-fix-hi-res-1716200842-171-1256-6470-1716201058.png?w=500&h=300&q=100&dpr=1&fit=crop&s=TGzGkB0fTNVtMYnZbY-bdA',
                    content:'Ứng dụng này như một người bạn đồng hành giúp tôi rèn luyện vốn từ vựng đều đặn.',
                    name:'Minh Elon', level:'VIP', major:'Doanh nhân'
                },
                {
                    image:'https://vcdn1-vnexpress.vnecdn.net/2024/02/08/intro1706819692-1707406630-170-6563-2076-1707408165.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=xAIvX5I1q7gb2CbCR7KYZw',
                    content:'Nhờ áp dụng cách học từ vựng có ví dụ minh họa, tôi thấy dễ nhớ và học vui hơn.',
                    name:'Emma Nguyễn', level:'Standard', major:'Sinh viên'
                },
                {
                    image:'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600',
                    content:'Tôi có thể học từ vựng mọi lúc mọi nơi, đặc biệt là khi đi làm về trên xe bus.',
                    name:'Trần Hồng', level:'Basic', major:'Nhân viên văn phòng'
                },
                {
                    image:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
                    content:'Tính năng nhắc nhở hằng ngày giúp tôi duy trì thói quen học tập rất hiệu quả.',
                    name:'Lan Anh', level:'VIP', major:'Giáo viên'
                },
                {
                    image:'https://media.vov.vn/sites/default/files/styles/large/public/2022-03/1_2.png.jpg',
                    content:'Ứng dụng rất dễ sử dụng, phù hợp với cả người mới bắt đầu học tiếng Anh.',
                    name:'Hoàng Nam', level:'Premium', major:'Lập trình viên'
                }
                ],


        currentPage: 1,
        itemsPerPage: 3,

     

    }
     
  },
  computed:{
    totalPage(){
        return Math.ceil(this.itemTestiminials.length/this.itemsPerPage)
    },
    paginationTestiminials(){
        const start = (this.currentPage-1)*this.itemsPerPage;
        const end  = start + this.itemsPerPage;
        
        return this.itemTestiminials.slice(start,end)
    }
  },
  methods:{
    nextPage(){
        return this.currentPage++;
    },
    backPage(){
        return this.currentPage--;
    }
  }

}
</script>

<style scoped>
    .Banner_6{
        margin-top: 150px;
    }

    .container-testimonial-card{
    
        width: 1200px;
        margin: 0 auto;
       
    
       
    }
    .page-btn{
        background-color: #4a33d9;
        border-radius: 50%;
        padding: 2px 8px;
        border: 1px solid #4a33d9;
        width: 50px;
        height: 50px;
        z-index: 999;

    }
    .page-btn:hover{
        background-color: #dd0182;
        border: 1px solid #dd0182;
        
    }
    .icon-pagination{
        color:white;
        font-weight: bold;
    }
    .Testimonial-card{
        position: relative;
        padding-bottom: 20px;
    }
    .btn-left{
        position: absolute;
        left: 8%;
        top: 50%;
        
       
    }

      .btn-right{
        position: absolute;
        right: 8%;
        top: 50%;
        
       
    }

    @media(max-width:768px){
         .container-testimonial-card{
            width: 100%;
            margin: 0 auto;
            
        }

        .page-btn{
            background-color: #4a33d9;
            border-radius: 50%;
            padding: 2px 8px;
            border: 1px solid #4a33d9;
            width: 30px;
            height: 30px;
            z-index: 999;

        }


          .btn-left{

            left: 2%;
          
            
        
        }

      .btn-right{

            right: 2%;
        
            
        
        }
        
    
    }



    
    
</style>