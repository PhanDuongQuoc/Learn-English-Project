<template>
  <el-dialog
  v-model="visiblesearch"
  :width="dialogWidth"
  center
  destroy-on-close
  @close="handleClose"
  class="custom-dialog custom-search"
  >
  <template #header>
    <div class="titlecard-container">
     
      <div class="titlecard">
        <div class="Search" data-aos="fade-left" data-aos-duration="20000">
           <i class="fa-solid fa-magnifying-glass" @click="showDialog_Search = true"></i>
        </div>
        <h4 class="title" data-aos="fade-left" data-aos-duration="20000">
          Tìm kiếm
        </h4>
      </div>
    </div>
  </template>

  <div class="search-wrap">
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" data-aos="fade-left" data-aos-duration="20000"> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </span>
            <input data-aos="fade-left" data-aos-duration="20000" type="text" class="form-control button-form-control" placeholder="Nhập từ khóa bạn muốn tìm...">
            </div>
        </div>
    </div>
  </div>

  

    <template #footer>
        <div class="close-icon">
          <i class="fa-solid fa-circle-xmark" @click="visiblesearch = false"></i>
        </div>
    </template>

  </el-dialog>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      visiblesearch: this.modelValue,
      screenWidth: window.innerWidth
    }
  },
  mounted() {
  window.addEventListener('resize', this.handleResize);
    },
  computed: {
    dialogWidth() {
        return this.screenWidth <= 768 ? '95%' : '1000px';
    }
 },
 beforeUnmount() {
  window.removeEventListener('resize', this.handleResize);
},
  watch: {
    modelValue(val) {
      this.visiblesearch = val
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
        this.visiblesearch = false;
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
  .btn .fa-solid{
    color: #dd0182;
  }
  .btn{
    border-top: 1px solid  rgb(224, 219, 219);
    border-left: 1px solid rgb(224, 219, 219);
    border-bottom:  1px solid rgb(224, 219, 219);
  }
  
  .btn:active{
    background-color: #dd0182;
    
  }
 .btn .fa-solid:active{
    color: white;
  }
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 10;
    margin-top:11px;
  }


 .Search {
    font-size: 23px;
    margin-right: 15px;
    color: #dd0182;
    margin-top: 3px;


}
.input-group{
  width: 950px;
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
    .Search{
      margin-left: 20px;
    }
    .input-group{
      width: 100%;
    }
  
   
  }
</style>
<style>

.custom-search {
  border: 2px solid #4a33d9 !important; 
  border-radius: 30px !important;  
  top: 25% !important;    
}
</style>
