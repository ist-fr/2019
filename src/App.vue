
<template>
  <div id="app">
    <img id="logo" src='./assets/logo_istfr.svg' height="150px" width="550px">
    <!-- <navbar></navbar> -->
    <!-- <img src="./assets/logo.png" width="50px"> -->
    <customFooter></customFooter>
  </div>
</template>

<script>
import navbar from '@/components/Frist/NavBar'
import customFooter from '@/components/General/Footer'
export default {
  components: {
    navbar,
    customFooter
  },
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo');
#logo {
  margin-left: 30px;
  margin-top: 10px;
}
#app {
  font-family: '', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #ddd;

  width: 100%;
  height: 100%;
}
body {
    background-color: #ffffff;
    /* background-image: url("./assets/1.svg"); */
}
* {
font-family: 'Arimo';
}

</style>
