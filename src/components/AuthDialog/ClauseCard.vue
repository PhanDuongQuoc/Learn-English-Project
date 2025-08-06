<template>
  <el-dialog
  v-model="visibleclause"
  :width="dialogWidth"
  center
  destroy-on-close
 
  class="custom-dialog custom-clause"
  >
  <template #header>
    <div class="titlecard-container">
     
      <div class="titlecard">
        <h4 class="title" data-aos="fade-left" data-aos-duration="20000">
          Điều khoản
        </h4>
      </div>
    </div>
  </template>

  
    <div class="dialog-content" data-aos="fade-left" data-aos-duration="20000">
      <p class="intro">Điều khoản và điều kiện</p>
      <ul class="noti-list">
       <li>Không chia sẻ tài khoản hoặc mật khẩu với người khác.</li>
        <li>Hãy đảm bảo đăng xuất khỏi hệ thống sau khi sử dụng trên thiết bị công cộng hoặc không an toàn.</li>
        <li>Chúng tôi không bao giờ yêu cầu bạn cung cấp mật khẩu qua email hoặc điện thoại.</li>
        <li>Người dùng có trách nhiệm bảo mật thông tin đăng nhập của mình.</li>
        <li>Nếu phát hiện hoạt động đăng nhập đáng ngờ, vui lòng liên hệ bộ phận hỗ trợ ngay lập tức.</li>
        <li>Mật khẩu phải đủ mạnh, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.</li>
        <li>Tài khoản có thể bị khóa tạm thời nếu phát hiện nhiều lần đăng nhập không hợp lệ.</li>

      </ul>
    </div>

    <template #footer>
        <div class="close-icon">
          <i class="fa-solid fa-circle-xmark" @click="closeClause"></i>
        </div>
    </template>

  </el-dialog>
</template>

<script>
export default {
    name: 'NotificationDialogCard',
    props: {
        modelValue: {
        type: Boolean,
        required: true
        }
    },
    data() {
        return {
        visibleclause: this.modelValue,
        screenWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    computed: {
        dialogWidth() {
            return this.screenWidth <= 768 ? '95%' : '800px';
        }
    },
    beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        modelValue(val) {
        this.visibleclause = val
        },
        visible(val) {
        this.$emit('update:modelValue', val)
        }
    },
  methods: {

     handleResize() {
        this.screenWidth = window.innerWidth;
    },
    handleClose() {
        this.visibleclause = false;
        this.$emit('update:modelValue', false);
    },
    closeClause() {
        this.$emit('update:modelValue', false)  
        this.$emit('close-clause')             
    }
    
  }
}
</script>

<style scoped>

.button-notifi{
    background-color: #dd0182;
    border: 1px solid #dd0182;
    
}

  .titlecard-container {
    position: relative;
    width: 100%;
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 10;
    margin-top:11px;
  }


 .notification {
    font-size: 23px;
    margin-right: 15px;
    color: #dd0182;
    margin-top: 3px;


}
.fa-circle-xmark {
    font-size: 25px;
    margin-right: 15px;
    margin-top: -2px;
    color: #dd0182;
}
.fa-solid {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
}
.fa-circle-xmark:active{
 
  color: white !important;
}


.titlecard{
    display: flex;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
.title{
    color: #dd0182;
    text-transform: uppercase;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
}
.button-notifi:hover{
    background-color: white;
    color: #dd0182;
    border: 1px solid #dd0182;
}
.dialog-content {
  padding: 10px 20px;
  font-size: 18px;
  color: #333;
}

.intro {
  margin-bottom: 12px;
  font-weight: 500;
}

.noti-list {
  padding-left: 20px;
  line-height: 1.8;
  font-size: 16px;
}
.intro{
    color: #4a33d9;
}

.noti-list li{
    color: rgb(119,119,119);
}

.dialog-footer {
  text-align: center;
  padding-top: 10px;
}

.el-button {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
}

  @media (max-width:768px){
    .custom-dialog {
        width: 500px;
    }
    .titlecard{
        display: flex;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    .notification{
      margin-left: 20px;
    }
  
   
  }
</style>
<style>

.custom-clause{
  border: 2px solid #4a33d9 !important; 
  border-radius: 30px !important;
  top: 5px !important;       
}
@media(max-width:768px){
    .custom-clause{
        /* top:-10px !important; */
    }
}
</style>
