<template>
  <div id="App">
    <AppHeader></AppHeader>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from './share/Header.vue'
import AppFooter from './share/Footer.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&display=swap');
html, body {
  max-width: 100%;
  overflow-x: hidden;
}
#app {
  font-family: "Mozilla Text", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-dialog{
    margin-top: auto !important;
    margin-bottom: auto !important;
    bottom: 30px !important;

}

.el-overlay-dialog {
  align-items: flex-start !important;
  background-color: rgba(2, 2, 2, 0.5);
  padding-top: 40px;
  overflow: hidden !important;


}
 @media (max-width:768px){
   
  .el-overlay-dialog {
     top: 0 ;
   
  }
  .el-dialog{
      top:25px  !important;

  }
    
  }
</style>
