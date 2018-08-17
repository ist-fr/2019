
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Facelift/Navbar'
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
</style>
