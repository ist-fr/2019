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
          info: 'IEEE Fellow, citation: 19755, h-index: 67,  150+ publications, 5 books, 190+ conference, ',
          topic: 'TBA',
          from: 'Nanyang Technological University, Singapore',
          image: 'http://www.ntu.edu.sg/home/dniyato/tao2018.jpg',
          link: 'http://www.ntu.edu.sg/home/dniyato/'
        },
        {
          name: 'Supasorn Suwajanakorn',
          info: 'former research resident @ Google Brain. Synthesizing Obama: Learning Lip Sync from Audio',
          topic: 'TBA',
          from: 'VISTEC',
          image: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/38512095_10160607851845526_6187919302159499264_n.jpg?_nc_cat=0&_nc_eui2=AeHrzh2XfFmEVkDPeaBpbMC-zDnBmdQnYo52bdZXLYgxXfyAk2TU6_NTQfgouY6kUNu9RuQen8Ls6LRAwmA00mYgL5sgMPXaVSoqsF-8mBDAbw&oh=de5eeac8a1ea85fff5d8e4763a44891e&oe=5BC58F35',
          link: 'http://www.supasorn.com/'
        },
        {
          name: 'Thanawin Rakthanmanon',
          info: '',
          topic: '',
          from: 'Kasetsart',
          image: '',
          linl: ''
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