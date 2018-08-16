<template>
  <section id="announcements">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>ANNOUNCEMENTS</h2>
            <p class="lead">There are yet to be any announcements</p>
            <div class="col-md-12 block" v-for="announcement in announcements" v-bind:key="announcement.title">
              <h2 class="title">
                <i class="fa fa-star"></i>
                {{announcement.title}}
              </h2>
              <hr>
            <div v-html="announcement.body"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      announcements: [
        {
          title: 'There are yet to be any announcements',
          body: 'Allap',
          time: 'N/A'
        }
      ]
    }
  }
}
</script>
<style>
  
</style>