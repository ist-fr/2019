<template>
    <div class="col-md-12">
    <div>
      <div v-for="speaker in speakers" :key="speaker.name">
          <a :href="speaker.link">
                <img :src="speaker.image"  height="250px">
                <h2>{{speaker.name}}</h2>
            <p class="card-text">
                {{speaker.info}}
            </p>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      speakers: [
        {
          name: 'Dusit Niyato',
          info: 'IEEE Fellow, citation: 19755, h-index: 67,  150+ publications, 5 books, 190+ conference, Nanyang Technological University, Singapore',
          topic: 'TBA',
          image: 'http://www.ntu.edu.sg/home/dniyato/tao2018.jpg',
          link: 'http://www.ntu.edu.sg/home/dniyato/'
        }
      ]
    }
  },
  components: {
  },
  method: {
  }
}
</script>
<style>
.card{
  color: black;
}
</style>
