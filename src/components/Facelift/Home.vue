<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <img class="img-logo" src="../../assets/logo_istfr.svg" alt="Logo">
        Promoting academic excellence in Computer Science<br>through academic industry collaborative research
      </div>
      <!-- PROMOTING ACADEMIC EXCELLENCE IN COMPUTER SCIENCE THROUGH ACADEMIC INDUSTRY COLLABORATIVE RESEARCH -->
    </div>
    <br>
    <key-dates></key-dates>
    <announcements class="bg-dark"></announcements>
    <committee class="bg-light"></committee>
    <program class="bg-dark"></program>
    <speakers></speakers>
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
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
  }

  @media (min-width: 992px) {
    .header-jumbotron {
      padding: 50px 20% 30px;
    }
  }
  
  section {
    padding: 60px 0;
  }

  .header-jumbotron, #key-dates {
    /* background: linear-gradient(-90deg, rgb(142, 77, 221) 0%, rgb(255, 62, 110) 100%) !important; */
    /* background: linear-gradient(-90deg, rgb(255, 84, 126) 0%, rgb(155, 83, 243) 100%) !important; */
    /* background: linear-gradient(90deg, rgb(172, 120, 255) -0%, rgb(255, 110, 141) 100%) !important; */
    height: 100vh;
  }

  .navbar, footer{
    /* background: linear-gradient(90deg, rgb(125, 8, 37) -0%,rgb(76, 52, 106) 100%) !important; */
    /* background: linear-gradient(-90deg, rgb(119, 64, 185) 0%, rgb(199, 48, 85) 100%) !important; */
    /* background: linear-gradient(90deg, rgb(179, 132, 255) -0%,rgb(255, 85, 122) 100%) !important; */
    /* background: linear-gradient(90deg, rgb(157, 96, 255) 0%,rgba(255, 71, 111, 1) 100%) !important; */
    /* background: linear-gradient(90deg, rgb(164, 107, 255) -0%, rgb(255, 32, 80) 100%) !important; */
    /* background: linear-gradient(90deg, rgb(164, 107, 255) -0%, rgb(255, 55, 98) 100%) !important; */
    /* (88, 46, 145) (160, 34, 58) (255, 216, 0) (248, 186, 0) */
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
