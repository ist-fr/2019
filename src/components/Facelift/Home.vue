<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <div>
          <img class="img-logo" src="../../assets/logo_istfr.svg" alt="Logo">
        </div>
        <div>
          <img class="img-separator" src="../../assets/separator.svg">
        </div>
        <div class="row">
          <div class="col-md-12">
            Promoting academic excellence in
            Computer Science through academic
            industry collaborative research
          </div>
        </div>
      </div>
      <div class="div-scroll-down"></div>
      <img class="img-hero-bg" src="../../assets/line_header.svg">
    </div>
    <key-dates class="bg-light"></key-dates>
    <announcements class="bg-dark"></announcements>
    <committee class="bg-light"></committee>
    <program class="bg-dark"></program>
    <speakers class="bg-light"></speakers>
    <accommodation class="bg-dark"></accommodation>
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
  import Accommodation from '@/components/Facelift/Accommodation'
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
      Accommodation,
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
  .header-jumbotron {
    padding: 50px 5% 30px;
    display: flex;
    justify-content: center; 
    align-items: center;
    font-weight: 600;
    height: 100vh;
    font-size: 1.25rem;
    background: linear-gradient(to bottom, #fff 0%, #f8f9fa 100%)
  }

  @media (min-width: 992px) {
    .header-jumbotron {
      padding: 50px 20% 30px;
    }
  }
  
  section {
    padding: 60px 0;
  }

  .navbar, footer{
    background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));
    color: rgba(255, 255, 255, 0.75) !important;
  }

  footer {
    font-size: small;
  }

  .nav-container {
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0;
  }

  .container-logo {
    width: 100%;
    padding-bottom: 10%;
  }

  .bg-dark {
    background-color: #fff !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .6);
    font-size: .725rem;
    font-weight: 800;
  }

  .is-active, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 1) !important;
  }

  .img-logo {
    margin-bottom: .75vh;
    max-height: 30vh;
  }

  .img-separator {
    margin: 2vh 0;
    max-height: 5vh;
    max-width: 10vh;
  }

  .img-hero-bg {
    position: absolute;
    width: 100%;
    bottom: -7.5vh;
    opacity: .75;
  }

  .div-scroll-down {
    background-color: orange;
  }
  
  a, a:visited {
    color: rgb(88, 46, 145);
  }

  a:focus, a:active, a:hover     {
    color: rgb(160, 34, 58);
  }
</style>
