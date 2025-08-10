<template>

    <div class="container-fluid p-0">

        <div class="card border-0 ">
            <div class="card-header bg-transparent border-0 pb-2">
                <h6 class="text-primary mb-0">
                <i class="fas fa-palette me-2"></i>GIAO DIỆN
                </h6>
            </div>
            <div class="card-body py-2">
                <div class="d-flex justify-content-between align-items-center py-2">
                <div>
                    <i class="fas color-icon fa-moon text-muted me-3"></i>
                    <span>Chế độ tối</span>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox">
                </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2">
                <div>
                    <i class="fas color-icon fa-text-height text-muted me-3"></i>
                    <span>Kích thước font</span>
                </div>
                 <div class="dropdown" data-aos="fade-left" data-aos-duration="4000">
                    <Cascader
                        v-model="lang"
                        :options="languageOptions"
                        placeholder="kích thước"
                        bgColor="#dd0182"
                        styleWidth="120px"
                    
                        />
                </div>
                </div>
            </div>
        </div>

        <!-- Bảo mật -->
        <div class="card border-0 ">
            <div class="card-header bg-transparent border-0 pb-2">
                <h6 class="text-primary mb-0">
                <i class="fas fa-shield-alt me-2"></i>BẢO MẬT
                </h6>
            </div>
            <div class="card-body py-2">
                <div class="d-flex justify-content-between align-items-center py-2">
                <div>
                    <i class="fas color-icon fa-key text-muted me-3"></i>
                    <span>Xác thực 2 lớp</span>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox">
                </div>
                </div>
                <a href="#" class="d-block text-decoration-none text-dark py-2">
                <i class="fas color-icon fa-history text-muted me-3"></i>
                <span>Lịch sử đăng nhập</span>
                <i class="fas fa-chevron-right float-end text-muted"></i>
                </a>
            </div>
        </div>



        <!-- Hỗ trợ -->
        <div class="card border-0 mb-3">
`       <div class="card-header bg-transparent border-0 pb-2">
            <h6 class="text-primary mb-0">
            <i class="fas fa-question-circle me-2"></i>HỖ TRỢ
            </h6>
        </div>
        <div class="card-body py-2">
            <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action border-0 py-2">
                <i class="fas color-icon fa-life-ring text-muted me-3"></i>
                <span>Trung tâm hỗ trợ</span>
                <i class="fas fa-chevron-right float-end text-muted"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action border-0 py-2">
                <i class="fas color-icon fa-bug text-muted me-3"></i>
                <span>Báo lỗi</span>
                <i class="fas fa-chevron-right float-end text-muted"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action border-0 py-2">
                <i class="fas color-icon fa-info-circle text-muted me-3"></i>
                <span>Về chúng tôi</span>
                <i class="fas fa-chevron-right float-end text-muted"></i>
            </a>
            </div>
        </div>`
        </div>


    </div>
    
</template>
<script>
import Cascader from '../Cascaders/Cascader.vue';
export default{
    name:'AppContentSetting',
    components:{
        Cascader
    },
    data(){
        return{
            lang: ['lon'],
            languageOptions :[
                {value:"nho",label:"Nhỏ"},
                {value:"trung_bình",label:"Trung bình"},
                {value:"lon",label:"Lớn"}

            ]
        }
    }
}
</script>
<style scoped>
.text-primary{
    color: #dd0182 !important;
}
.color-icon{
    color: #4a33d9 !important;
}
.checkbox{
    color:#4a33d9 !important;
}
.form-switch .form-check-input:checked{
    background-color: #4a33d9 !important;
}
</style>