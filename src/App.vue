
<template>
  <div id="app">
    <img id="logo" src='./assets/logo_istfr.svg' height="150px" width="550px">
    <!-- <navbar></navbar> -->
    <!-- <img src="./assets/logo.png" width="50px"> -->
    <router-view  v-bind:loggingIn="loggingIn"></router-view>
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
  name: 'app',
  data () {
    return {
      loggingIn: false
    }
  },
  methods: {
    updateLogin (isLogin) {
      console.log(isLogin)
      this.loggingIn = isLogin
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo');
#logo {
  margin-left: 30px;
  margin-top: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
