<template>
  <section id="announcements">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2><i class="fa fa-bullhorn fa-lg white-text  mr-3 "></i>ANNOUNCEMENTS</h2>
          <p class="lead">There are yet to be any announcements</p>
          <!-- <ul>
            <li>Clickable nav links that smooth scroll to page sections</li>
            <li>Responsive behavior when clicking nav links perfect for a one page website</li>
            <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
            <li>Minimal custom CSS so you are free to explore your own unique design options</li>
          </ul> -->
           <div class="col-md-12 block" v-for="announcement in announcements" v-bind:key="announcement.title">
              <h2 class="title">
                  <i class="fa fa-star"></i>
                  {{announcement.title}}
              </h2>
              <hr>
              <div v-html="announcement.body">
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>