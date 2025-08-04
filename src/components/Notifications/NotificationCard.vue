<template>
  <el-dialog
  v-model="visible"
  :width="dialogWidth"
  center
  destroy-on-close
  @close="handleClose"
  class="custom-dialog"
  >
    <div class="titlecard-container">
        <div class="titlecard">
            <div class="notification">
                <i class="fa-solid fa-bell" @click="showDialog = true"> </i>
            </div>
            <h4 class="title">
                Thông báo
            </h4>
        </div>
    </div>
  
    <div class="dialog-content">
      <p class="intro">Bạn có 3 thông báo mới:</p>
      <ul class="noti-list">
        <li>Lịch học mới đã được cập nhật</li>
        <li>Bạn nhận được tin nhắn từ giáo viên</li>
        <li>Đừng quên làm bài tập hôm nay</li>
      </ul>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button class="button-notifi" type="primary" size="large" @click="visible = false">Đóng</el-button>
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
      visible: this.modelValue,
    screenWidth: window.innerWidth
    }
  },
  mounted() {
  window.addEventListener('resize', this.handleResize);
    },
  computed: {
    dialogWidth() {
        return this.screenWidth <= 768 ? '90%' : '800px';
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
 .notification {
    font-size: 23px;
    margin-right: 15px;
    margin-top: -2px;
    color: #dd0182;


}
.fa-solid{
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    
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
  }
</style>
