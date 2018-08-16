
<template>
  <div id="app">
    <!-- <img id="logo" src='./assets/logo_istfr.svg' height="150px" width="550px"> -->
    <!-- <navbar></navbar> -->
    <router-view></router-view>
    <!-- <img src="./assets/logo.png" width="50px"> -->
    <!-- <customFooter></customFooter> -->
  </div>
</template>

<script>
  import Navbar from '@/components/Facelift/Navbar'
  // import navbar from '@/components/Frist/NavBar'
  // import customFooter from '@/components/General/Footer'
  export default {
    name: 'app',
    components: {
      Navbar
      // customFooter
    }
  }
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css?family=Prompt');  */
  #app {
    /* font-family: 'Prompt'; */
    font-family: 'Raleway', sans-serif;
    /* font-family: 'Montserrat', sans-serif; */
  }
</style>
