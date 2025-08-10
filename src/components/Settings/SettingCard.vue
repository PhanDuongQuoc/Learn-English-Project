<template>
  <el-dialog
  v-model="visible"
  :width="dialogWidth"
  center
  destroy-on-close
  @close="handleClose"
  class="custom-dialog custom-setting"
  >
  <template #header>
    <div class="titlecard-container">
     
      <div class="titlecard">
        <div class="notification" data-aos="fade-left" data-aos-duration="20000">
           <i class="fa-solid fa-gear"  @click="showDialog = true"></i>
        </div>
        <h4 class="title" data-aos="fade-left" data-aos-duration="20000">
          Cài đặt
        </h4>
      </div>
    </div>
  </template>

  
    <div class="dialog-content" data-aos="fade-left" data-aos-duration="20000">
      <div clas="Content-setting">
        <AppContentSetting/>
      </div>
    </div>

    <template #footer>
        <div class="close-icon">
          <i class="fa-solid fa-circle-xmark" @click="visible = false"></i>
        </div>
    </template>

  </el-dialog>
</template>

<script>
import AppContentSetting from './ContentSetting.vue';
export default {
  name: 'SettingCard',
  components:{
    AppContentSetting
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      visible: this.modelValue,
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
      this.visible = val
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
    this.visible = false;
    this.$emit('update:modelValue', false);
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
    margin-left: 35px;

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

.custom-setting{
  border: 2px solid #4a33d9 !important; 
  border-radius: 30px !important;
  top: 5px !important;       
}
</style>
