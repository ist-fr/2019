<template>
  <div id="page-top" class="home">
    <navbar></navbar>
    <jumbotron></jumbotron>
    <key-dates class="bg-stripe"></key-dates>
    <announcements class="bg-stripe"></announcements>
    <committee class="bg-stripe"></committee>
    <program class="bg-stripe"></program>
    <speakers class="bg-stripe"></speakers>
    <registration class="bg-stripe"></registration>
    <submission class="bg-stripe"></submission>
    <venue class="bg-stripe"></venue>
    <contact class="bg-stripe"></contact>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
import Jumbotron from "@/components/Home/Jumbotron";
import KeyDates from "@/components/Home/KeyDates";
import Announcements from "@/components/Home/Announcements";
import Committee from "@/components/Home/Committee";
import Program from "@/components/Home/Program";
import Speakers from "@/components/Home/Speakers";
import Registration from "@/components/Home/Registration";
import Submission from "@/components/Home/Submission";
import Venue from "@/components/Home/Venue";
import Contact from "@/components/Home/Contact";
import Navbar from "@/components/Home/Navbar";
import CsFooter from "@/components/Home/Footer";
export default {
  name: "Home",
  methods: {},
  components: {
    Jumbotron,
    KeyDates,
    Announcements,
    Committee,
    Program,
    Speakers,
    Registration,
    Submission,
    Venue,
    Contact,
    Navbar,
    CsFooter
  }
};
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
  background: linear-gradient(to bottom, #fff 0%, #f0f0f0 100%);
}

@media (min-width: 992px) {
  .header-jumbotron {
    padding: 50px 20% 30px;
  }
}

.container-logo {
  width: 100%;
  padding-bottom: 10%;
}

.img-logo {
  margin-bottom: 0.75vh;
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
  opacity: 0.75;
}

.bg-stripe:nth-of-type(odd) {
  background-color: #f0f0f0 !important;
}

.modal-content {
  background-color: #323232;
}

.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
