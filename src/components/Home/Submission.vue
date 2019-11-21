<template>
  <section id="submission" class="lead">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Research submission</h2>
        </div>
        <div class="col-md-6 text-right">
          <h2>
            <a href="https://forms.gle/vZTYznicbc9xMprr5">
              Submit your work
              <i class="fa fa-external-link"></i>
            </a>
          </h2>
        </div>
        <div class="col-lg-12 mt-2 mx-auto lead text-justify">
          <p>
            Submit your research to the
            <span class="font-weight-bold">IST-FR 2019 Symposium</span> to let
            the public know about your work, and you might also win a prize!
          </p>
          <span class="font-weight-bold">Current prize pool:</span>
          <h2>฿30,000</h2>
          <br />
          <h3>Conditions</h3>
          <ul>
            <li>
              Researches are to be submitted online via the provided form and
              are accepted until 23:59 of 17 November 2019 (Indochina Time)
            </li>
            <li>
              Submitted researches will then be selected by the designated
              committee to be featured in the IST-FR 2019 Symposium
            </li>
            <li>
              The result of the selection will be announced and notified to the
              submitter via provided contact information on 25 November 2019
            </li>
            <li>
              The result of the selection will be at sole discretion of the
              selection committee
            </li>
          </ul>
          <h3>Presentation &amp; competition</h3>
          <div class="alert alert-info rounded-0" role="alert">
            <i class="fa fa-info-circle"></i> More details about research
            presentation and competition will be announced soon, stay tuned!
          </div>
          <h3>Criteria</h3>
          To be eligible for submission, your work must meet all the criteria
          set out below
          <ul>
            <li>
              Undergraduate or graduate research in Science or Engineering
              fields
            </li>
            <li>
              Your research is conducted within the 2018/19 or 2019/20 academic
              years
            </li>
            <li>
              Your research must have contributed to scientific process or basic
              knowledge in Computer Science, Computer Engineering or Information
              Science
            </li>
            <li>
              Your research must be in one of the
              <i>accepted research areas</i> listed out below
            </li>
            <li>
              VISTEC students and researchers are not eligible to submit
            </li>
          </ul>
          <h3>Accepted research areas</h3>
          <ul>
            <li v-for="area in areas" v-bind:key="area">
              {{ area }}
            </li>
          </ul>
        </div>
        <div class="col-md-12 text-right">
          <h2>
            <a href="https://forms.gle/vZTYznicbc9xMprr5">
              Submit your work
              <i class="fa fa-external-link"></i>
            </a>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      areas: [
        "Artificial Intelligence & Machine Learning",
        "Computer Architecture & Operating System",
        "Computer Education",
        "Computer Graphics",
        "Computer Vision",
        "Database Management System",
        "Embedded Systems",
        "High Performance Computing",
        "Interdisciplinary Information",
        "Internet of Things",
        "Human Computer Interaction",
        "Natural Language Processing",
        "Networking",
        "Robotics",
        "Security & Privacy",
        "Software Engineering",
        "Theory of Computation"
      ]
    };
  }
};
</script>
