<template>
  <div class="home">
    <navbar></navbar>
    <header class="header-gradient">
      <div class="container-logo text-center">
        <img class="img-logo" src="../../assets/logo_istfr_white.svg" alt="Logo">
      </div>
      <!-- <div class="container text-center">
        <h1>Welcome to Scrolling Nav</h1>
        <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </div> -->
    </header>
    <announcement></announcement>
    <committee></committee>
    <program></program>
  </div>
</template>

<script>
  import Announcement from '@/components/Facelift/Announcement'
  import Committee from '@/components/Facelift/Committee'
  import Program from '@/components/Facelift/Program'
  import Navbar from '@/components/Facelift/Navbar'
  export default {
    name: 'Home',
    methods: {},
    components: {
      Announcement,
      Committee,
      Program,
      Navbar
    },
    data () {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  header {
    padding: 90px 5% 100px;
  }

  @media (min-width: 992px) {
    header {
      padding: 90px 20% 100px;
    }
  }
  
  section {
    padding: 60px 0;
  }

  .navbar {
    background: linear-gradient(90deg, rgb(179, 132, 255) -0%,rgb(255, 71, 111) 100%) !important;
    font-weight: 800;
    font-size: small;
  }

  .nav-container {
    min-width: 100% !important;
    max-width: 100% !important;
  }

  .container-logo {
    width: 100%;
  }

  .header-gradient {
    background: linear-gradient(90deg, rgb(179, 132, 255) -0%,rgb(255, 71, 111) 100%) !important;
  }
</style>
