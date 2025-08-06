<template>
  <el-dialog
  v-model="visibleresetpassworddialog"
  :width="dialogWidth"
  center
  destroy-on-close
  @close="handleClose"
  class="custom-dialog customreset"
  
  >

    
    <ResetPassword  @open-register="handleOpenRegister"/>
    <template #footer>
        <div class="close-icon">
          <i class="fa-solid fa-circle-xmark" @click="visibleresetpassworddialog = false"></i>
        </div>
    </template>

  </el-dialog>
</template>

<script>
import ResetPassword from '@/share/Auth/ResetPassword.vue';
export default {
  name: 'ResetPasswordDialog',
  components:{
    ResetPassword,
    
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      visibleresetpassworddialog: this.modelValue,
      screenWidth: window.innerWidth
    }
  },
  mounted() {
  window.addEventListener('resize', this.handleResize);
    },
  computed: {
    dialogWidth() {
        return this.screenWidth <= 768 ? '95%' : '450px';
    }
 },
 beforeUnmount() {
  window.removeEventListener('resize', this.handleResize);
},
  watch: {
    modelValue(val) {
      this.visibleresetpassworddialog = val
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
        this.visibleresetpassworddialog = false;
        this.$emit('update:modelValue', false);
    },
    handleOpenRegister() {
        this.visibleresetpassworddialog = false
        this.$emit('update:modelValue', false) 
        this.$emit('open-register')          
    }
  }
}
</script>

<style scoped>

    .button-notifi{
        background-color: #dd0182;
        border: 1px solid #dd0182;
        
    }

    .iframe-map{
    
        border: 1px solid #dd0182;
        border-radius: 25px;
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
}
.button-notifi:hover{
    background-color: white;
    color: #dd0182;
    border: 1px solid #dd0182;
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

   
  }
  
</style>
<style>


.customreset {
  border: 2px solid #4a33d9 !important; 
  border-radius: 30px !important;  
  height: 425px;  
  top: 5%;
 
 
  
}
@media (max-width:768px) {
    .customreset{
        top: 20% !important;
    }
}


</style>
