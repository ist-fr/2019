<template>
  <div id="page-top" class="home">
    <navbar></navbar>
    <jumbotron></jumbotron>
    <timeline class="bg-stripe"></timeline>
    <announcements class="bg-stripe"></announcements>
    <programs class="bg-stripe"></programs>
    <registration class="bg-stripe"></registration>
    <submission class="bg-stripe"></submission>
    <venue class="bg-stripe"></venue>
    <contact class="bg-stripe"></contact>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
import Jumbotron from "@/components/Home/Jumbotron";
import Timeline from "@/components/Home/Timeline";
import Announcements from "@/components/Home/Announcements";
import Programs from "@/components/Home/Programs";
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
    Timeline,
    Announcements,
    Programs,
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
