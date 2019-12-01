<template>
  <section class="lead" id="venue">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Venue &amp; Transportation</h2>
          <p style="text-align: justify;">
            Vidyasirimedhi Institute of Science and Technology (VISTEC) is a
            graduate research-intensive university located on Wangchan Vallery
            and supported by Power of Innovation Foundation. VISTEC is in close
            collaboration with Thailand initiative megaprojects Eastern Economic
            Corridor (EEC) in general and Eastern Economic Corridor of
            Innovation (EECi) in particular.
          </p>
        </div>
        <div class="col-lg-12 mx-auto">
          <h3>Gallery</h3>
        </div>
        <div
          class="sp-pad p-sm-0 p-md-2 col-lg-4 col-md-6 col-sm-12"
          v-for="image in images"
          v-bind:key="image.imageSrc"
        >
          <img
            class="img-gallery shadow-straight"
            :src="image.imageSrc"
            width="100%"
          />
        </div>
        <div class="col-lg-12 mx-auto">
          <h3>Maps</h3>
        </div>
        <div class="sp-pad wrapper-map p-sm-0 p-md-2 col-lg-12 mx-auto">
          <iframe
            class="shadow-straight"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5394598752378!2d101.44124661409019!3d13.00128151774571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310323fac434be89%3A0xf7ffe4c5d6dd9446!2sVISTEC!5e0!3m2!1sen!2sth!4v1533809754949"
            width="100%"
            height="300"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div id="pick-up" class="col-lg-12 mt-4 text-justify">
          <h3>Pick-up locations</h3>
          <div class="alert alert-warning rounded-0 shadow-straight">
            <i class="fa fa-warning"></i>
            <span class="font-weight-bold"> Important:</span> Please note that
            transportation service is guaranteed only if you have chose your
            pick-up location when you registered, and only if your registration
            has been confirmed. Contact us using the
            <i><a href="#contact">contact information</a></i> provided below if
            you have any doubt regarding, or need to make changes to the
            transportation service.
          </div>
          <p class="">
            On the symposium day, we provide free transportation on from and
            back to pick-up locations listed below (see
            <i><a href="#programs">Programs</a></i> above for pick-up time)
          </p>
          <ul>
            <li>Mahidol University (Salaya campus)</li>
            <li>Thammasat University (Rangsit campus)</li>
            <li>Chulalongkorn University</li>
            <li>Kasetsart University (Bangkhen campus)</li>
            <li>Kasetsart University (Sriracha campus)</li>
            <li>Burapha University</li>
            <li>King Mongkut's University of Technology Thonburi</li>
            <li>King Mongkut's University of Technology North Bangkok</li>
            <li>King Mongkut's Institute of Technology Ladkrabang</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          imageSrc: require("../../assets/venue/venue_1.jpg")
        },
        {
          imageSrc: require("../../assets/venue/venue_2.jpg")
        },
        {
          imageSrc: require("../../assets/venue/venue_3.jpg")
        },
        {
          imageSrc: require("../../assets/venue/venue_4.jpg")
        },
        {
          imageSrc: require("../../assets/venue/venue_5.png")
        },
        {
          imageSrc: require("../../assets/venue/venue_6.png")
        },
        {
          imageSrc: require("../../assets/venue/venue_7.png")
        },
        {
          imageSrc: require("../../assets/venue/venue_8.jpg")
        },
        {
          imageSrc: require("../../assets/venue/venue_9.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.sp-pad {
  float: none;
  margin: 0 auto;
}

.img-gallery:last-child {
  margin-bottom: 15px;
}

@media (max-width: 575.98px) {
  .sp-pad,
  .wrapper-map {
    padding: 10px 0 !important;
  }

  #venue {
    padding-bottom: 0;
  }
}

.wrapper-map {
  padding-bottom: 0 !important;
}
</style>
