<template>
    <div class="col-md-12">
    <div>
      <b-card v-for="speaker in speakers" :key="speaker.name" :img-src="speaker.image"
                img-alt="Card image"
                img-top
                :title="speaker.name"
                class="card">
            <p class="card-text">
                Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
        </b-card>
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
          info: 'Nanyang Technological University, Singapore',
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
