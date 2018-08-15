<template>
    <div>
        <div class="block">
            <carousel></carousel>
          </div> 
          IST-FR is a symposium.

          created to show the protential of Thai research in Bachelor degreee.
          IST-FR is created by Scalable Data Sytems Lab (SCADS)
          
          <div class="col-md-12 block" v-for="announcement in announcements" v-bind:key="announcement.title">
              <h2 class="title">
                  <i class="fa fa-star"></i>
                  {{announcement.title}}
              </h2>
              <hr>
              <div v-html="announcement.body">
            </div>
        </div>
        <timeline></timeline>
    </div>
</template>
<script>
import carousel from '@/components/Frist/Carousel'
import timeline from '@/components/Frist/Timeline'
export default {
  data () {
    return {
      announcements: [
        {
          title: 'Announcement',
          body: 'Allap'
        },
        {
          title: 'Announcementa',
          body: 'Allap'
        }
      ]
    }
  },
  components: {
    carousel,
    timeline
  }
}
</script>
<style>
.block {
  /* background-color: #444; */
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border-style: solid; */
  border-radius: 7px;
  /* border-width: 2px 10px 4px 20px; */
}
</style>
