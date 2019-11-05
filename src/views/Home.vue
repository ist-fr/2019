<template>
  <div id="page-top" class="home">
    <navbar class="d-none"></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <div>
          <img class="img-logo d-none" src="../assets/logo_istfr.svg" alt="Logo" />
        </div>
        <div>
          <img class="img-separator" src="../assets/separator.svg" />
        </div>
        <div class="row">
          <div class="col-md-12 d-none">
            Promoting academic excellence in
            Computer Science through academic
            industry collaborative research
          </div>
        </div>
      </div>
      <div class="div-scroll-down"></div>
      <img class="img-hero-bg" src="../assets/line_header.svg" />

      <!-- Temporary modal for important updates -->
      <div
        class="modal fade d-block show"
        id="newsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="newsModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <!-- <div class="modal-footer">
              <button type="button" class="btn btn-secondary rounded-0" data-dismiss="modal">Close</button>
            </div> -->
            <div class="modal-body text-center text-light mt-4">
              <img class="img-logo" src="../assets/logo_istfr_white_noyear.svg" alt="Logo" />
              <h1>IST-FR 2019 is just up ahead</h1>
              <p>We will be updating our website with more details soon... Stay tuned!</p>
              <p>
                In the meanwhile you might want to <br>
                see our
                <a class="text-light font-weight-bold font-italic" href="/2019_poster.png">
                  poster
                  <i class="fa fa-external-link"></i>
                </a> or early
                <a
                  class="text-light font-weight-bold font-italic"
                  href="https://forms.gle/ckPcdw6CiqXTWv4Z6"
                >
                  register
                  <i class="fa fa-external-link"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  /* bottom: -7.5vh; */
  opacity: 0.75;
}

.bg-stripe:nth-of-type(odd) {
  background-color: #f0f0f0 !important;
}

.modal-content {
  background-color: #323232;
}

.modal {
  background: rgba(0,0,0,.5);
}
</style>
