<template>
  <header class="header">
    <div class="top-banner flex-column flex-md-row align-items-center gap-1 mt-8 mt-md-0">
        <div class="container">
            <p class="text-title">HỌC TIẾNG ANH GIAO TIẾP CÙNG GIÁO VIÊN IELTS 8.0+, GIÁO VIÊN BẢN XỨ & PHƯƠNG PHÁP SHADOWING</p>
        </div>

        <div class="dropdown">
            <Cascader
              v-model="lang"
                :options="languageOptions"
                placeholder="Ngôn ngữ hiển thị"
                bgColor="#dd0182"
                styleWidth="120px"
                />
        </div>
    </div>

    <nav class="navbar navbar-expand-lg main-header">
        <div class="container">
            <a class="logo" href="#">
                <div class="logo-img">
                    <img class="logo-main" src="https://media.istockphoto.com/id/1306202399/vector/vector-logo-or-icon-with-big-ben-for-learn-english.jpg?s=612x612&w=0&k=20&c=bYjpgt6laegr5hkj0wZBSf03Qd06W6ToXBuL4_kgg8E=" alt="">
                </div>
                <h1 class="logo-text">Learn English</h1>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Từ vựng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Phương pháp học
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Video</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn cta-button">
                            <i class="fas fa-sign-in-alt me-2"></i>
                            Đăng nhập
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn cta-button">
                            <i class="fas fa-user-plus me-2"></i>
                            Đăng ký ngay
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>


<script>
import Cascader from '@/components/Cascaders/Cascader.vue';
export default{
    name:'AppHeater',
    components:{
        Cascader
    },
    data(){
        return{
            lang: ['tieng_viet'],
            languageOptions: [
                { value: 'tieng_viet', label: 'Tiếng Việt' },
                { value: 'tieng_anh', label: 'Tiếng Anh' },
                { value: 'tieng_nhat', label: 'Tiếng Nhật' },
                { value: 'tieng_han', label: 'Tiếng Hàn' },
                { value: 'tieng_trung', label: 'Tiếng Trung' },
                { value: 'tieng_phap', label: 'Tiếng Pháp' }
            ]
        }
    }
}
</script>

<style scoped>
    .header{
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    
  .top-banner {
            background: #4a33d9 ;
            color: white;
            padding: 12px 0;
            font-size: 14px;
            text-align: center;
            display: flex;
            
        }
      
            .text-title{
                margin-left: 50px;
            
            }
        .dropdown{
            margin-right: 20px;
        }

        .main-header {
            background: #dd0182;
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: white;
        }
        
        .logo-img , .logo-main{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
        }
        
        .navbar-nav .nav-link {
            color: white !important;
            font-weight: 500;
            margin: 0 15px;
            transition: all 0.3s ease;
            position: relative;
            

        }
        
        .navbar-nav .nav-link:hover {
            color: #1e3c72 !important;
            transform: translateY(-2px);
        }
        
        .navbar-nav .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 50%;
            background-color: #4a33d9;
            transition: all 0.3s ease;
        }
        
        .navbar-nav .nav-link:hover::after {
            width: 100%;
            left: 0;
        }

        
        .cta-button {
            background:  #4a33d9;
            border: none;
        
            border-radius: 25px;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#1e3c72 ;
        }
        
        .navbar-toggler {
            border: 2px solid white;
            padding: 4px 8px;
        }
        
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
        
        @media (max-width: 991px) {
            .navbar-collapse {
                background: rgba(0,0,0,0.1);
                border-radius: 10px;
                padding: 20px;
                margin-top: 15px;
            }
            
            .navbar-nav .nav-link {
                margin: 5px 0;
                padding: 10px;
                border-radius: 5px;
            }
            
            .navbar-nav .nav-link:hover {
                background: rgba(255,255,255,0.1);
            }
         
        }
        @media (max-width:768px){
            .dropdown{
                margin: 0 auto;
            }
            .text-title{
                margin: 0 auto;
            }
        }
</style>