<template>
  <section id="speakers">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Speakers</h2>
          <p class="lead">We'll give you an update with the latest list of speakers as soon possible</p>
          

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
    </div>
  </section>
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
        },
        {
          name: 'Supasorn Suwajanakorn',
          info: 'former research resident @ Google Brain. Synthesizing Obama: Learning Lip Sync from Audio'
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