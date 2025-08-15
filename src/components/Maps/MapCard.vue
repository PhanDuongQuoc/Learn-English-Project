<template>
  <el-dialog
  v-model="visiblemap"
  :width="dialogWidth"
  center
  destroy-on-close
  @close="handleClose"
  class="custom-dialog custommap"
  
  >
  <template #header>
    <div class="titlecard-container">
     
      <div class="titlecard">
        <div class="Search" data-aos="fade-left" data-aos-duration="20000">
           <i class="fa-solid fa-location-dot"></i>
        </div>
        <h4 class="title" data-aos="fade-left" data-aos-duration="20000">
          Google Map
        </h4>
      </div>
    </div>
  </template>

  <div class="SearchMap" data-aos="fade-left" data-aos-duration="20000">
    <div class="ratio ratio-16x9 border-map" >
        <iframe class="iframe-map"  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.637159614036!2d106.7122688!3d10.7799315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4649e7ca29%3A0x55f531b6120cae3b!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1754358494411!5m2!1svi!2s" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  </div>



  

    <template #footer>
        <div class="close-icon">
          <i class="fa-solid fa-circle-xmark" @click="visiblemap = false"></i>
        </div>
    </template>

  </el-dialog>
</template>

<script>
export default {
  name: 'MapCard',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      visiblemap: this.modelValue,
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
      this.visiblemap = val
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
    this.visiblemap = false;
    this.$emit('update:modelValue', false);
  },

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


 .Search {
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
  
   
  }
</style>
<style>

.custommap {
  border: 2px solid #4a33d9 !important; /* màu hồng đậm */
  border-radius: 30px !important;  
  top:3px !important;
}
</style>
