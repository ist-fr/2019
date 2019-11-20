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

<style scoped>
.bg-stripe:nth-of-type(odd) {
  background-color: #f0f0f0 !important;
}
</style>
