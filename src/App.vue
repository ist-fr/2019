
<template>
  <div id="app">
    <auth v-on:login="updateLogin($event)" v-bind:loggingIn="loggingIn"></auth>
    <!-- <img src="./assets/logo.png" width="50px"> -->
    <router-view  v-bind:loggingIn="loggingIn"></router-view>
    <customFooter></customFooter>
  </div>
</template>

<script>
import auth from '@/components/NavBar/NavBar'
import customFooter from '@/components/General/Footer'
export default {
  components: {
    auth,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddd;

  width: 100%;
  height: 100%;
}
body {
    background-color: #ffffff;
}
</style>
