<template>
  <div id="App">
    <AppHeader />

    <div v-if="isLoading" class="page-loader">
      <div class="spinner"></div>
      
      <div class="loading">Đang tải...</div>
    </div>

    <router-view v-show="!isLoading" />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './share/Header.vue'
import AppFooter from './share/Footer.vue'
import { ref } from 'vue'
import router from './router'
import AOS from 'aos'
export default {
  name: 'App',
  components: { AppHeader, AppFooter },
  setup() {
    const isLoading = ref(false)

    router.beforeEach((to, from, next) => {
      isLoading.value = true
      setTimeout(() => {
        next()
      }, 100)
    })

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 500) 
    })

    return { isLoading }
  },
   mounted() {
        AOS.init({
            duration: 1200,
            once: false, 
            mirror: true
        });
        
        this.$nextTick(() => {
            AOS.refresh();
        });
    },
    updated() {
        AOS.refresh();
    },
    beforeUnmount() {
        AOS.refresh();
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&display=swap');

html, body {
  max-width: 100%;
  overflow-x: hidden;
  scroll-behavior: auto !important;
  
}
#app {
  font-family: "Mozilla Text", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-dialog {
  margin-top: auto !important;
  margin-bottom: auto !important;
  bottom: 30px !important;
}
.loading{
  color: #4a33d9;
  margin-left: 15px;
}
.page-loader {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;

}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc; 
  border-top-color: #4a33d9; 
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.el-overlay-dialog {
  align-items: flex-start !important;
  background-color: rgba(2, 2, 2, 0.5);
  padding-top: 40px;
  overflow: hidden !important;
}

@media (max-width:768px) {
  .el-overlay-dialog {
    top: 0;
  }
  .el-dialog {
    top: 25px !important;
  }
}
</style>
