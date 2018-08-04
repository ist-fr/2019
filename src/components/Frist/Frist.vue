<template>
    <div class="col-md-12">
      <div class="col-md-2">
        <div class="col-md-12 block">
            <frist-menu></frist-menu>
        </div>
      </div>
      <div class="col-md-10">
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
</template>
<script>
import fristMenu from '@/components/Frist/Menu'
export default {
  data () {
    return {
      announcements: [
        {
          title: 'Start',
          body: 'Allap'
        },
        {
          title: 'Start',
          body: 'Allap'
        }
      ]
    }
  },
  components: {
    'frist-menu': fristMenu
  }
}
</script>
<style>
.block {
  background-color: #444;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border-style: solid; */
  border-radius: 7px;
  /* border-width: 2px 10px 4px 20px; */
}

.title {
    left: 0;
}
</style>

