
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Home/Navbar'
  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>

<style>
  #app {
    font-family: 'Raleway', sans-serif;
  }

  a, a:visited {
    color: rgb(88, 46, 145);
  }

  a:focus, a:active, a:hover     {
    color: rgb(160, 34, 58);
  }
</style>
