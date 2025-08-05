<template>
  <header class="header">
    <div class="top-banner flex-column flex-md-row align-items-center gap-1 mt-8 mt-md-0" :class="{ show: isMenuOpen_2 }">
        <div class="container" data-aos="fade-left" data-aos-duration="4000">
            <p class="text-title">HỌC TIẾNG ANH GIAO TIẾP CÙNG GIÁO VIÊN IELTS 8.0+, GIÁO VIÊN BẢN XỨ & PHƯƠNG PHÁP SHADOWING</p>
        </div>

       <div class="button-header" data-aos="fade-left" data-aos-duration="4000">
        <div class="search">
            <i class="fa-solid fa-magnifying-glass" @click="showDialog_Search = true"></i>
        </div>
        <div class="location">
            <i class="fa-solid fa-location-dot" @click="showDialog_Map = true"></i>
        </div>
        <div class="notification">
            <i class="fa-solid fa-bell" @click="showDialog = true"> </i>
        </div>
         <div class="button-start">
             <button class="btn cta-button-start" data-aos="fade-left" data-aos-duration="4000">
                   Bất đầu
             </button>
        </div>
        <div class="dropdown" data-aos="fade-left" data-aos-duration="4000">
            <Cascader
              v-model="lang"
                :options="languageOptions"
                placeholder="Ngôn ngữ hiển thị"
                bgColor="#dd0182"
                styleWidth="120px"
              
                />
        </div>
       </div>
      
    </div>
    <NotificationCard v-model="showDialog" data-aos="zoom-in" data-aos-duration="10000" />
    <SearchCard v-model="showDialog_Search" data-aos="zoom-in" data-aos-duration="10000"/>
    <MapCard v-model="showDialog_Map" data-aos="zoom-in" data-aos-duration="10000"></MapCard>
    <nav class="navbar navbar-expand-lg main-header" :class="{ show: isMenuOpen_2 }">
        <div class="container" data-aos="fade-left" data-aos-duration="4000">
            <a class="logo" href="#">
                <div class="logo-img">
                    <img class="logo-main" :class="{ show: isMenuOpen_2 }" src="https://media.istockphoto.com/id/1306202399/vector/vector-logo-or-icon-with-big-ben-for-learn-english.jpg?s=612x612&w=0&k=20&c=bYjpgt6laegr5hkj0wZBSf03Qd06W6ToXBuL4_kgg8E=" alt="">
                </div>
                <h1 class="logo-text" :class="{ show: isMenuOpen_2 }">Learn English</h1>
            </a>

           <button class="navbar-toggler" :class="{ show: isMenuOpen_2 }" type="button" @click="toggleMenu">
                <span class="navbar-toggler-icon" :class="{ show: isMenuOpen_2 }"></span>
            </button>

            <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Từ vựng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">
                            Phương pháp học
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Video</a>
                    </li>
                    <li class="nav-item" @click="showDialog_Login = true">
                        <button class="btn cta-button" >
                            <i class="fas fa-sign-in-alt me-2"></i>
                            Đăng nhập
                        </button>
                    </li>
                    <li class="nav-item" @click="showDialog_Register = true">
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
    <RegisterDialog v-model="showDialog_Register" @open-loginapp="openLoginDialog" data-aos="zoom-in" data-aos-duration="10000"></RegisterDialog>
    <LoginDialog v-model="showDialog_Login"  @open-register="openRegisterDialog" data-aos="zoom-in" data-aos-duration="10000"></LoginDialog>
</template>


<script>
import Cascader from '@/components/Cascaders/Cascader.vue';
import NotificationCard from '@/components/Notifications/NotificationCard.vue';
import SearchCard from '@/components/Searchs/SearchCard.vue';
import MapCard from '@/components/Maps/MapCard.vue';
import RegisterDialog from '@/components/AuthDialog/RegisterDialog.vue';
import LoginDialog from '@/components/AuthDialog/LoginDialog.vue';
export default{
    name:'AppHeater',
    components:{
        Cascader,
        NotificationCard,
        SearchCard,
        MapCard,
        RegisterDialog,
        LoginDialog
    },
    data(){
        return{
            showDialog_Login:false,
            showDialog_Register:false,
            showDialog_Map:false,
            showDialog_Search:false,
            showDialog: false,
            isMenuOpen: false,
            isMenuOpen_2:false,
            lang: ['tieng_viet'],
            languageOptions :[
                { value: 'tieng_viet', label: 'Tiếng Việt' },
                { value: 'tieng_anh', label: 'Tiếng Anh' },
                { value: 'tieng_nhat', label: 'Tiếng Nhật' },
                { value: 'tieng_han', label: 'Tiếng Hàn' },
                { value: 'tieng_trung', label: 'Tiếng Trung' },
                { value: 'tieng_phap', label: 'Tiếng Pháp' },
                { value: 'tieng_duc', label: 'Tiếng Đức' },
                { value: 'tieng_tay_ban_nha', label: 'Tiếng Tây Ban Nha' },
                { value: 'tieng_nga', label: 'Tiếng Nga' },
                { value: 'tieng_y', label: 'Tiếng Ý' },
                { value: 'tieng_bo_dao_nha', label: 'Tiếng Bồ Đào Nha' },
                { value: 'tieng_thai', label: 'Tiếng Thái' },
                { value: 'tieng_in_do', label: 'Tiếng Ấn Độ' },
                { value: 'tieng_arap', label: 'Tiếng Ả Rập' },
                { value: 'tieng_thuy_dien', label: 'Tiếng Thụy Điển' },
                { value: 'tieng_phan_lan', label: 'Tiếng Phần Lan' },
                { value: 'tieng_dan_mach', label: 'Tiếng Đan Mạch' },
                { value: 'tieng_hy_lap', label: 'Tiếng Hy Lạp' },
                { value: 'tieng_latinh', label: 'Tiếng Latinh' },
                { value: 'tieng_ha_lan', label: 'Tiếng Hà Lan' },
                { value: 'tieng_se_rbi', label: 'Tiếng Serbia' },
                { value: 'tieng_ba_lan', label: 'Tiếng Ba Lan' },
                { value: 'tieng_séc', label: 'Tiếng Séc' },
            ]

        }
        
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.isMenuOpen_2 = !this.isMenuOpen_2; 
        },
         openRegisterDialog() {
            this.showDialog_Register = true
        },
        openLoginDialog(){
            this.showDialog_Login = true
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
        .notification , .location , .search{
            font-size: 23px;
            margin-right: 15px;
            color: white;
    
        }
        .fa-solid{
             box-shadow: 0 2px 10px rgba(0,0,0,0.1);

        }

      

        .fa-solid:hover{
         color: #dd0182;
        }
        .button-header{
            display: flex;
        }
      
        .text-title{
            margin-left: 200px;
        
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

        .cta-button-start {
            background:  #dd0182;
            border: none;
            width: 130px;
            font-size: 14px;
            border-radius: 25px;
            color: white;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            margin-right: 5px;
        }

        .cta-button-start:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#dd0182 ;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: white ;
            color:#4a33d9 ;
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
             .cta-button {
                background: #dd0182;
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
                color:#dd0182 ;
            }
            .top-banner.show {
                display: none !important;
            }
            .navbar-toggler-icon.show{
               background-color: #dd0182;
               border-radius: 5px;
            }
            .main-header.show{
                background-color: white;
            }
            .navbar-toggler.show{
                border: 1px solid white;
            }
            .logo-main{
                    width: 50px;
                    height: 50px;
                    margin-left: 25px;
                    border: 3px solid #1e3c72;
            }
            .logo-text.show{
                font-size: 20px;
                color: #dd0182;
              
            }
            .nav-item .nav-link{
                color: #4a33d9 !important;
            }
            .dropdown{
                margin: 0 auto;
            }
            .text-title{
                margin: 0 auto;
                font-size: 12px;
            }
             .cta-button-start {
                background:  #dd0182;
                margin-right: 5px;
                border: none;
                width: 120px;
                font-size: 14px;
                border-radius: 25px;
                color: white;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .navbar-toggler{
                border: 1px solid #dd0182;
            }
            .cta-button{
                width: 150px;
                font-size: 13px;
            }
            .navbar-collapse{
                background-color: white;
            }
           
            .logo-main{
                width: 50px;
                height: 50px;
                margin-left: 25px;
            }
            .logo-text{
                font-size: 20px;
              
            }
         
        }
        
</style>