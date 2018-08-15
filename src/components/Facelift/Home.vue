<template>
  <div class="home">
    <navbar></navbar>
    <header class="header-jumbotron">
      <div class="container-logo text-center">
        <img class="img-logo" src="../../assets/logo_istfr_white.svg" alt="Logo">
      </div>
      <!-- <div class="container text-center">
        <h1>Welcome to Scrolling Nav</h1>
        <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </div> -->
    </header>
    <announcements class="bg-light"></announcements>
    <timeline class="bg-dark"></timeline>
    <committee class="bg-light"></committee>
    <program class="bg-dark"></program>
    <speakers class="bg-light"></speakers>
    <accomodation class="bg-dark"></accomodation>
    <registration class="bg-light"></registration>
    <submission class="bg-dark"></submission>
    <gallery class="bg-light"></gallery>
    <contact class="bg-dark"></contact>
  </div>
</template>

<script>
  import Announcements from '@/components/Facelift/Announcements'
  import Timeline from '@/components/Facelift/Timeline'
  import Committee from '@/components/Facelift/Committee'
  import Program from '@/components/Facelift/Program'
  import Speakers from '@/components/Facelift/Speakers'
  import Accomodation from '@/components/Facelift/Accomodation'
  import Registration from '@/components/Facelift/Registration'
  import Submission from '@/components/Facelift/Submission'
  import Gallery from '@/components/Facelift/Gallery'
  import Contact from '@/components/Facelift/Contact'
  import Navbar from '@/components/Facelift/Navbar'
  export default {
    name: 'Home',
    methods: {},
    components: {
      Announcements,
      Timeline,
      Committee,
      Program,
      Speakers,
      Accomodation,
      Registration,
      Submission,
      Gallery,
      Contact,
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
    background: linear-gradient(90deg, rgb(179, 132, 255) -0%,rgb(255, 85, 122) 100%) !important;
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

  .header-jumbotron {
    background: linear-gradient(90deg, rgb(169, 115, 255) -0%,rgb(255, 71, 111) 100%) !important;
  }

  .bg-light {
    background: linear-gradient(45deg, rgba(160, 92, 255, 0.3) -50%, rgba(160, 92, 255, 0.1) 90%) !important;
  }

  .bg-dark {
    background: linear-gradient(45deg, rgba(255, 90, 128, 0.3) -50%, rgba(255, 90, 128, 0.1) 90%) !important;
  }
</style>
