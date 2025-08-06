<template>
    <section class="bg-light ">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-12 col-md-12">
                <div class="card border border-light-subtle rounded-4">
                <div class="card-body">
                    <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <h2 class="h4 text-center title-header-register" data-aos="fade-left" data-aos-duration="20000">RESET MẬT KHẨU</h2>
                            <h3 class="fs-6 fw-normal text-secondary text-center m-0" data-aos="fade-left" data-aos-duration="20000">Nhập thông tin</h3>
                            </div>
                        </div>
                    </div>
                    <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                        <div class="col-12">
                            <div class="form-floating mb-1" data-aos="fade-left" data-aos-duration="20000">
                                <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
                                <label for="email" class="form-label">Email</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating mb-1" data-aos="fade-left" data-aos-duration="20000">
                                <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required>
                                <label for="password" class="form-label">Mật khẩu mới</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-grid" data-aos="fade-left" data-aos-duration="20000">
                                <button class="btn btn-register bsb-btn-xl btn-primary" type="submit">Reset mật khẩu</button>
                            </div>
                        </div>
                    </div>
                    </form>
                    <div class="row">
                        <div class="col-12" data-aos="fade-left" data-aos-duration="20000">
                            <hr class="border-secondary-subtle">
                            <p class="m-0 text-secondary text-center">Bạn đã có tài khoản chưa?
                                <a href="#!" class="link-primary text-decoration-none link" @click="openRegister">Đăng ký</a>
                            </p>
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
    name:'AppResetPassword',
    components:{
        
    },
    data(){
        return{
           
            
        }
    },
    methods: {
        openRegister() {
            this.$emit('open-register')
        }
    }
}
</script>
<style scoped>
.logo-main{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #4a33d9;
}
.btn-register{
    background-color: #dd0182 !important;
    border: 1px solid #dd0182;
}
.btn-register:hover{
    background-color: white !important;
    color: #dd0182;

}
.title-header-register{
    color: #dd0182;
}

.link{
    color: #4a33d9 !important;
}
        
.btn-contact{
    border: 1px solid #dd0182;
    color: #dd0182 !important;
    border-radius: 5px;
    
}
.btn-contact:hover{
    background-color: #dd0182;
    color: white !important;
}
        
</style>