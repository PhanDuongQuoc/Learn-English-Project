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
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
#app {
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
