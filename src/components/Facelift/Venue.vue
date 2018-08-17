<template>
  <section class="lead" id="venue">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Venue</h2>
          <p style="text-align: justify;">
            Vidyasirimedhi Institute of Science and Technology (VISTEC) is a graduate research intensive university located on Wangchan Vallery and
            supported by Power of Innovation Foundation. VISTEC is in close collaboration with Thailand initiative megaprojects Eastern Economic 
            Corridor (EEC) in general and Eastern Economic Corridor of Innovation (EECi) in particular.
          </p>
          <!-- <p class="lead">Photos will be posted here</p> -->
        </div>
        <div class="col-lg-12 mx-auto">
          <h3>Gallery</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12" v-for="image in images" v-bind:key="image.imageSrc">
            <img class="img-gallery" :src="image.imageSrc" width="100%">
          </div>
        </div>
        <div class="col-lg-12 mx-auto">
          <h3>Map</h3>
        </div>
        <div class="col-lg-12 mx-auto">
          <div class="row">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5394598752378!2d101.44124661409019!3d13.00128151774571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310323fac434be89%3A0xf7ffe4c5d6dd9446!2sVISTEC!5e0!3m2!1sen!2sth!4v1533809754949" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
                <!-- <img src="http://a49.co.th/Images/A49/Project/VIDYASIRIMEDHI-INSTITUTE-OF-SCIENCE-AND-TECHNOLOGY-(VISTEC)-201803131200051.jpg?maxwidth=1350" width="100%"> -->
      <!-- <img src="http://a49.co.th/Images/A49/Project/VIDYASIRIMEDHI-INSTITUTE-OF-SCIENCE-AND-TECHNOLOGY-(VISTEC)-201803131205086.jpg?maxwidth=675"> -->
      <!-- <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/37012105_2101124146876706_480306862726578176_o.jpg?_nc_cat=0&oh=339619beab9be50bffaae04bc90bb656&oe=5BCAF4C4"> -->
      <!-- <img src="http://a49.co.th/Images/A49/Project/Vidyasirimedhi-Institute-of-Science-and-Technology-and-Kamnoetvidya-Science-Academy-(VISTEC-&-KVIS)-201803082356055.jpg?maxwidth=675"> -->
      <!-- <img src="https://f.ptcdn.info/965/027/000/1422631417-1402570696-o.jpg"> -->
      <!-- <img src="http://www.l-and-e.com/sites/default/files/styles/360_image/public/project_360/Vidyasirimedhi%20Institute%20of%20Science%20and%20Technology%20%20VISTEC%20%28%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B5%29-04.png?itok=Hvx6Ax1T">
      <img src="http://www.l-and-e.com/sites/default/files/styles/360_image/public/project_360/Vidyasirimedhi%20Institute%20of%20Science%20and%20Technology%20%20VISTEC%20%28%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B5%29-01.png?itok=D9jP3YHZ">
      <img src="http://www.l-and-e.com/sites/default/files/styles/360_image/public/project_360/Vidyasirimedhi%20Institute%20of%20Science%20and%20Technology%20%20VISTEC%20%28%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%98%E0%B8%B5%29-02.png?itok=iiuXbUWr"> -->
      <!-- <ing scr="http://l49.co.th/Images/L49/Project/RAIST-&-KWIT-201503200204291.jpg?maxwidth=1350"> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          imageSrc: require('../../assets/venue/venue_1.jpg')
        },
        {
          imageSrc: require('../../assets/venue/venue_2.jpg')
        },
        {
          imageSrc: require('../../assets/venue/venue_3.jpg')
        },
        {
          imageSrc: require('../../assets/venue/venue_4.jpg')
        },
        {
          imageSrc: require('../../assets/venue/venue_5.png')
        },
        {
          imageSrc: require('../../assets/venue/venue_6.png')
        },
        {
          imageSrc: require('../../assets/venue/venue_7.png')
        },
        {
          imageSrc: require('../../assets/venue/venue_8.jpg')
        },
        {
          imageSrc: require('../../assets/venue/venue_9.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  .img-gallery, .map {
    margin: 15px 0;
    box-shadow: 0 0 40px -6px rgba(0,0,0,0.75);
  }
</style>

