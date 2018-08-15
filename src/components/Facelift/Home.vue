<template>
  <div class="home">
    <navbar></navbar>
    <header class="header-jumbotron">
      <div class="container-logo text-center">
        <img class="img-logo" src="../../assets/logo_istfr_white.svg" alt="Logo" height="300px" width="1000px">
      </div>
      <!-- <div class="container text-center">
        <h1>Welcome to Scrolling Nav</h1>
        <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </div> -->
    </header>
    <key-dates class="bg-light"></key-dates>
    <announcements class="bg-dark"></announcements>
    <committee class="bg-light"></committee>
    <program class="bg-dark"></program>
    <speakers class="bg-light"></speakers>
    <accomodation class="bg-dark"></accomodation>
    <registration class="bg-light"></registration>
    <submission class="bg-dark"></submission>
    <venue class="bg-light"></venue>
    <faq class="bg-dark"></faq>
    <contact class="bg-light"></contact>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
  import KeyDates from '@/components/Facelift/KeyDates'
  import Announcements from '@/components/Facelift/Announcements'
  import Committee from '@/components/Facelift/Committee'
  import Program from '@/components/Facelift/Program'
  import Speakers from '@/components/Facelift/Speakers'
  import Accomodation from '@/components/Facelift/Accomodation'
  import Registration from '@/components/Facelift/Registration'
  import Submission from '@/components/Facelift/Submission'
  import Venue from '@/components/Facelift/Venue'
  import Contact from '@/components/Facelift/Contact'
  import Navbar from '@/components/Facelift/Navbar'
  import CsFooter from '@/components/Facelift/Footer'
  import Faq from '@/Components/Facelift/FAQ'
  export default {
    name: 'Home',
    methods: {},
    components: {
      KeyDates,
      Announcements,
      Committee,
      Program,
      Speakers,
      Accomodation,
      Registration,
      Submission,
      Venue,
      Contact,
      Navbar,
      CsFooter,
      Faq
    }
  }
</script>

<style>
  header {
    padding: 90px 5% 0;
  }

  @media (min-width: 992px) {
    header {
      padding: 90px 20% 0;
    }
  }
  
  section {
    padding: 60px 0;
  }

  .header-jumbotron {
    background: linear-gradient(90deg, rgb(179, 132, 255) -0%,rgb(255, 85, 122) 100%) !important;
  }

  .navbar, footer{
    background: linear-gradient(90deg, rgb(169, 115, 255) -0%,rgb(255, 71, 111) 100%) !important;
    font-weight: 800;
    font-size: small;
    color: rgba(255, 255, 255, 0.75) !important;
  }

  .nav-container {
    min-width: 100% !important;
    max-width: 100% !important;
  }

  .container-logo {
    width: 100%;
  }

  .bg-light {
    background: linear-gradient(45deg, rgba(160, 92, 255, 0.3) -50%, rgba(160, 92, 255, 0.1) 90%) !important;
  }

  .bg-dark {
    background: linear-gradient(45deg, rgba(255, 90, 128, 0.3) -50%, rgba(255, 90, 128, 0.1) 90%) !important;
  }
</style>
