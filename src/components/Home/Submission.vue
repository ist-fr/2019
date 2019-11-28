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
          <div class="alert alert-info rounded-0" role="alert">
            <i class="fa fa-info-circle"></i> The submission deadline has been
            extended to <span class="font-weight-bold">29 November 2019</span>,
            submit now if you have yet to! Selection result will be announced
            and notified within 5 December 2019.
          </div>
          <ul>
            <li>
              Researches are to be submitted online via the provided form and
              are accepted until 29:59 of <strike>17 November 2019</strike>
              <span class="font-weight-bold"> 29 November 2019</span> (Indochina
              time)
            </li>
            <li>
              Submitted researches will then be selected by the designated
              committee to be featured in the IST-FR 2019 Symposium
            </li>
            <li>
              The result of the selection will be announced and notified to the
              submitter via provided contact information within
              <strike>25 November 2019</strike>
              <span class="font-weight-bold"> 5 December 2019</span>
            </li>
            <li>
              The result of the selection will be at sole discretion of the
              selection committee
            </li>
          </ul>
          <h3>Presentation &amp; competition</h3>
          <!-- <div class="alert alert-info rounded-0" role="alert">
            <i class="fa fa-info-circle"></i> More details about research
            presentation and competition will be announced soon, stay tuned!
          </div> -->
          <p>
            Once your research has been accepted to the symposium, you will have
            to perform a 30-minute poster presentation session on the symposium day to let
            the audience know about your work. Our panel of judges will also be
            evaluating this presentation. Prizes will be given to the researches
            that our judges believe are most significant and at the front of the
            frontier. The quality of your presentation also matters a lot since
            it will help our judges understand your research.
          </p>
          <p class="mb-0">
            Listed below are important details about the poster presentation
          </p>
          <ul>
            <li>
              You <span class="font-weight-bold">DO NOT</span> have to print out
              a physical poster, though feel free to do so it helps with your
              presentation
            </li>
            <li>
              You will be provided with one 32-inch television or better and a
              HDMI cable
            </li>
            <li>
              It is best to bring your own portable computer for the poster
              presentation
            </li>
          </ul>
          <h3>Criteria</h3>
          <p class="mb-0">
            To be eligible for submission, your work must meet all the criteria
            set out below
          </p>
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
          <h3>Prizes</h3>
          <div class="alert alert-info rounded-0" role="alert">
            <i class="fa fa-info-circle"></i> More details about prizes will be
            announced soon, stay tuned!
          </div>
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
