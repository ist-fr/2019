
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    border-radius: 0 !important;
  }

  .form-control {
    border-radius: 0;
  }

  a, a:visited {
    color: rgb(88, 46, 145);
  }

  a:focus, a:active, a:hover     {
    color: rgb(160, 34, 58);
  }

  .bg-dark {
    background-color: #fff !important;
  }
    
  section {
    padding: 60px 0;
  }

  .text-error {
    color: red;
  }

  .form-group.required .control-label:after { 
    content: " *";
    color: red;
  }
</style>
