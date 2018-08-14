
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
  // import navbar from '@/components/Frist/NavBar'
  // import customFooter from '@/components/General/Footer'
  export default {
    components: {
      // navbar,
      // customFooter
    },
    name: 'app'
  }
</script>

<style>
  /*cyan #8be9fd */
  
  .active {
    background: #1c1e26;
  }
  
  .navbar-brand-lg {
    color: #8be9fd !important;
    text-align: center !important;
  }
  
  li {
    cursor: pointer;
  }
  
  .logo {
    min-width: 10%;
    min-height: 10%;
    max-width: 18%;
    max-height: 18%;
    float: left;
  }
  
  .navbar-brand {
    color: #8be9fd !important;
    text-align: center !important;
  }
  
  .nav-link {
    color: #8be9fd !important;
  }
  
  .nav-link:hover {
    color: #77c7d8 !important;
  }
  
  .bg-inverse {
    /*background-color:transparent!important; */
    background-color: #282a36 !important;
  }
</style>
