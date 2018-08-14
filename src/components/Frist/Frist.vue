<template>
    
    <div class="col-md-12">
      <h1>{{url}}</h1>
      <div class="col-md-2">
        <b-list-group>
           <b-list-group-item button v-for="item in menu" v-bind:key="item" @click="changePage(item)" :class="{menu, active:true}">
              <b >
              {{item}}
              </b>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
      url: this.$route.query.page,
      menu: [
        'Home',
        'Committee',
        'Program',
        'Speaker',
        'Registration',
        'Submission',
        'Venue',
        // 'Accommodation',
        // 'Information',
        'Contact Us'
      ]
    }
  },
  methods: {
    changePage (page) {
      window.location.href = '#/' + page.toLowerCase().split(' ').join('')
    }
  }
}
</script>
<style>
.menu {
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
  font-size: 1.5 em;
  background-color: #BBDEFB;
}
.menu:active {
  background-color: black;
}
.title {
    left: 0;
}
div {
  color: black;
}
</style>

