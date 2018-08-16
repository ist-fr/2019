<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <img class="img-logo" src="../../assets/logo_istfr.svg" alt="Logo">
        Promoting academic excellence in Computer Science<br>through academic industry collaborative research
      </div>
    </div>
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
  .header-jumbotron {
    padding: 50px 5% 30px;
    display: flex;
    justify-content: center; 
    align-items: center;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    .header-jumbotron {
      padding: 50px 20% 30px;
    }
  }
  
  section {
    padding: 60px 0;
  }

  .header-jumbotron {
    height: 100vh;
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
  }

  .bg-light {
    /* background: linear-gradient(45deg, rgba(160, 92, 255, 0.3) -50%, rgba(160, 92, 255, 0.1) 90%) !important; */
  }

  .bg-dark {
    background-color: #fff !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .75);
    font-size: .725rem;
    font-weight: 800;
  }

  .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 1);
  }

  .img-logo {
    margin-bottom: 50px;
  }

  /* h2 .fa {
    padding-top: -50px;
    font-size: 90%;
  } */
</style>
