<template>
  <header class="header">
    <div class="top-banner flex-column flex-md-row align-items-center gap-1 mt-8 mt-md-0" :class="[{ show: isMenuOpen_2 }, { hidden: isBannerHidden }]">
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

            <div class="collapse navbar-collapse navbar-collapse-1" :class="{ show: isMenuOpen }" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click="toggleMenu" to="/">Trang chủ</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click="toggleMenu" to="/learn-english/gioi-thieu">Giới thiệu</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" @click="toggleMenu" to="/learn-english/tu-vung-tieng-anh">Từ vựng</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toggleMenu" href="#">Video</a>
                    </li>

                </ul>
            </div>
            <div class="collapse navbar-collapse navbar-collapse-2" :class="{ show: isMenuOpen }" >
                <ul class="navbar-nav ms-auto align-items-center d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
                    <li class="nav-item" @click="showDialog_Login = true" v-if="!showLogin_Register('Login')">
                            <button class="btn cta-button cta-button-1"  @click="toggleMenu" >
                                <i class="fas fa-sign-in-alt fa-sign-in-alt-1 me-2"></i>
                                Đăng nhập
                            </button>
                        </li>
                        <li class="nav-item" @click="showDialog_Register = true" v-if="!showLogin_Register('Register')">
                            <button class="btn cta-button"  @click="toggleMenu">
                                <i class="fas fa-user-plus me-2"></i>
                                Đăng ký ngay
                            </button>
                        </li>
                        <!--Logout-->
                        <!-- <li class="nav-item" v-if="!showLogin_Register('Logout')">
                            <button class="btn cta-button" >
                                <i class="fas fa-sign-in-alt me-2"></i>
                            </button>
                        </li> -->
                        <li class="nav-item"  @click="showDialog_Setting = true" v-if="showLogin_Register('Setting')">
                            <div class="search setting">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                        </li>
                        
                        <li class="nav-item">
                            <div class="location logout-item">
                                <i class="fas fa-sign-in-alt me-2" v-if="showLogin_Register('Logout')"></i>
                            </div>
                        </li>
                        <li class="nav-item arrow-logo" v-if="showLogin_Register('represent')">
                            <a class="logo-replace" href="#">
                                <div class="logo-img-replace">
                                    <img class="logo-main-replace" :class="{ show: isMenuOpen_2 }" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="">
                                </div>
                            
                            </a>
                            <i class="fa-solid arrow-icon fa-chevron-down"></i>
                        </li>
                </ul>
            </div>
        </div>
  
    </nav>
  </header>
    <RegisterDialog v-model="showDialog_Register" @open-loginapp="openLoginDialog" @open-clause="openResetClause"  data-aos="zoom-in" data-aos-duration="10000"></RegisterDialog>
    <LoginDialog v-model="showDialog_Login"  @open-register="openRegisterDialog" @open-reset="openResetPasswordDialog" @open-clause="openResetClause" 
         data-aos="zoom-in" data-aos-duration="10000">
    </LoginDialog>
    <ResetPasswordDialog v-model="showDialog_ResetPassword" @open-register="openRegisterDialog" data-aos="zoom-in" data-aos-duration="10000"></ResetPasswordDialog>
    <ClauseCard v-model = "showDialog_Clause" @close-clause="closeResetClause"></ClauseCard>
    <SettingCard v-model="showDialog_Setting"></SettingCard>
    <MapCard v-model="showDialog_Map" data-aos="zoom-in" data-aos-duration="10000"></MapCard>
</template>


<script>
import Cascader from '@/components/Cascaders/Cascader.vue';
import NotificationCard from '@/components/Notifications/NotificationCard.vue';
import SearchCard from '@/components/Searchs/SearchCard.vue';
import MapCard from '@/components/Maps/MapCard.vue';
import RegisterDialog from '@/components/AuthDialog/RegisterDialog.vue';
import LoginDialog from '@/components/AuthDialog/LoginDialog.vue';
import ResetPasswordDialog from '@/components/AuthDialog/ResetPasswordDialog.vue';
import ClauseCard from '@/components/AuthDialog/ClauseCard.vue';
import SettingCard from '@/components/Settings/SettingCard.vue';
import { RouterLink } from 'vue-router';

export default{
    name:'AppHeater',
    components:{
        Cascader,
        NotificationCard,
        SearchCard,
        MapCard,
        RegisterDialog,
        LoginDialog,
        ResetPasswordDialog,
        ClauseCard,
        SettingCard,
        RouterLink
    },
    data(){
        return{
            isBannerHidden: false,
            showDialog_Setting:false,
            showbutton_Setting:false,
            showbutton_Represent:false,
            showbutton_Login:false,
            showbutton_Register:false,
            showbutton_Logout:false,
            showDialog_Clause:false,
            showDialog_ResetPassword:false,
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
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
         window.removeEventListener('scroll', this.handleScroll);
        },
    methods: {
        handleScroll() {
            const currentScroll = window.scrollY;
            const mainHeader = document.querySelector('.main-header');

            if (currentScroll > this.lastScrollY && currentScroll > 100) {
                this.isBannerHidden = true;
                if (mainHeader) {
                    mainHeader.classList.add('move-up');
                }
            } else {
                this.isBannerHidden = false;
                if (mainHeader) {
                    mainHeader.classList.remove('move-up');
                }
            }

            this.lastScrollY = currentScroll;
        },
                    
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.isMenuOpen_2 = !this.isMenuOpen_2; 
        },
         openRegisterDialog() {
            this.showDialog_Register = true
        },
        openLoginDialog(){
            this.showDialog_Login = true
        },
        openResetPasswordDialog(){
            this.showDialog_ResetPassword = true;
        },
         openResetClause(){
            this.showDialog_Clause = true;
        },
      
        closeResetClause(){
            this.showDialog_Login=true;
        },


        showLogin_Register(val){
            if(val ==='Login'){
                this.showbutton_Login = true;
            }
            if(val==='Register'){
                this.showbutton_Register = true;
            }
            if(val==='Logout'){
                this.showbutton_Logout = true
            }
            if(val==='Setting'){
                this.showbutton_Setting = true
            }
            if(val==='represent'){
                this.showbutton_Represent = true
            }
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

        .logo-main-replace{
            width: 30px;
            height: 30px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border: 3px solid #4a33d9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
           

        }

        .arrow-logo:hover{
            opacity: 0.7;
        }
        .arrow-logo{
            display: flex;
            background-color: #4a33d9;
            width: 70px;
            border-radius: 10px;
            padding: 2px 5px;
            /* border: 2px solid rgb(212, 201, 201); */
        }

        .fa-sign-in-alt:hover{
            color: #4a33d9;
        }
      
        .top-banner {
            background: #4a33d9;
            color: white;
            padding: 12px 0;
            font-size: 14px;
            text-align: center;
            display: flex;
            transition: all 0.3s ease-in-out;
            position: relative;
            width: 100%;
            z-index: 1001;
        }
        .notification , .location , .search{
            font-size: 23px;
            margin-right: 15px;
            color: white;
    
        }
         .fa-solid{
             box-shadow: 0 2px 10px rgba(0,0,0,0.1);

        }

       .arrow-icon{
            box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            margin-top: 10px;
            margin-left: 10px;
            color: white;
            font-size: 12px;
            
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
            position: relative;
            transition: all 0.3s ease-in-out;
            top: 0;
            margin-top: 60px;
        }

        .header:has(.top-banner.hidden) .main-header {
            transform: translateY(-60px);
        }

        .main-header.move-up {
            transform: translateY(-56px);
        }
                
        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: white;
            margin-left: 40px;
        }
        .arrow-logo{
            margin-right: 10px;
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
        .nav-item .fa-solid:hover{
            color: #4a33d9 !important;
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
            color:#4a33d9;
        }

        
       
        .navbar-toggler {
            border: 2px solid white;
            padding: 4px 8px;
        }
        
        
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
        
        .top-banner {
            transition: top 0.3s ease-in-out;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            }

            .top-banner.hidden {
                transform: translateY(-100%);
                opacity: 0;
            }
            
        @media (max-width: 991px) {
            .navbar-collapse {
                background: rgba(0,0,0,0.1);
                border-radius: 10px;
                
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
             .arrow-icon{
        
                color: #4a33d9;
            }
            .logo{
                margin-left: -8px;
            }
            .arrow-logo{
                background-color: white;
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
                margin-top: 0;
            }
             .main-header {
                background: #dd0182;
                padding: 15px 0;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                position: relative;
                transition: all 0.3s ease-in-out;
                top: 0;
                margin-top: 95px;
            }

            .header:has(.top-banner.hidden) .main-header {
                transform: translateY(-100px);
            }

            .main-header.move-up {
                transform: translateY(-56px);
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
            .fa-gear, .fa-sign-in-alt{
                color: #dd0182;
                
            }
            .fa-sign-in-alt-1{
                color: white;
            }
           
            .logout-item{
                margin-left: 15px;
            }
            .setting{
                margin-left: 10px;
            }
            .arrow-logo{
                border:1px solid white;
                margin-left: 15px;
            }

       
           
         
        }

    
        
</style>