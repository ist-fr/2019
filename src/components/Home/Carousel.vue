<template>
  <carousel :perPageCustom="[[480, 1], [768, 1]]">
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
     <slide>
        <img src="http://www.paccon2018.com/content/images/PACCON-banner.png" style=" max-width: 100%;">
     </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
<style>

</style>
