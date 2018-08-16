<template>
<div class='black-background'>
  <section id="speakers">
    <div class="container contrainer-dark">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2><i class="fa fa-users fa-lg white-text mr-3"></i>KEYNOTE SPEAKERS</h2>
          <p class="lead">We'll give you an update with the latest list of speakers as soon possible</p>
          

<div v-for="speaker in speakers" :key="speaker.name">
          <a :href="speaker.link">
                <img :src="speaker.image"  height="250px">
                <h2>{{speaker.name}}</h2>
            <p class="card-text">
                {{speaker.info}}
            </p>
            {{speaker.topic}}
            {{speaker.from}}
          </a>
        </div>

        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      speakers: [
        {
          name: 'Dusit Niyato',
          info: 'IEEE Fellow, citation: 19755, h-index: 67,  150+ publications, 5 books, 190+ conference, ',
          topic: 'CULTIVATING A CULTURE OF ACADEMIC EXCELLENCE, ACADEMIC EXCELLENCE: What We Can Learn from Singapore Context',
          from: 'Nanyang Technological University, Singapore',
          image: 'http://www.ntu.edu.sg/home/dniyato/tao2018.jpg',
          link: 'http://www.ntu.edu.sg/home/dniyato/'
        },
        {
          name: 'Supasorn Suwajanakorn',
          info: 'former research resident @ Google Brain. Synthesizing Obama: Learning Lip Sync from Audio',
          topic: 'TBA',
          from: 'VISTEC, Thailand',
          image: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/38512095_10160607851845526_6187919302159499264_n.jpg?_nc_cat=0&_nc_eui2=AeHrzh2XfFmEVkDPeaBpbMC-zDnBmdQnYo52bdZXLYgxXfyAk2TU6_NTQfgouY6kUNu9RuQen8Ls6LRAwmA00mYgL5sgMPXaVSoqsF-8mBDAbw&oh=de5eeac8a1ea85fff5d8e4763a44891e&oe=5BC58F35',
          link: 'http://www.supasorn.com/'
        },
        {
          name: 'Thanawin Rakthanmanon',
          info: 'Data Mining, Machine Learning, Decision Support System',
          topic: 'TBA',
          from: 'Kasetsart University, Thailand',
          image: 'https://www.cpe.ku.ac.th/wp-content/uploads/2014/10/14-KUENG-PHO-01-42-42-38.jpg',
          link: 'https://www.cpe.ku.ac.th/?page_id=1932'
        },
        {
          name: 'Danupon Nanongkai',
          info: 'Theoretical Computer Science, graph algorithms',
          topic: 'TBA',
          from: 'KTH Royal Institute of Technology, Sweden',
          image: 'https://sites.google.com/site/dannanongkai/_/rsrc/1470223176526/home/1_crop%20-%20small.jpg',
          link: 'https://sites.google.com/site/dannanongkai/'
        },
        {
          name: 'Wittawat Jitkrittum',
          info: 'on-parametric statistical tests, approximate Bayesian inference, kernel-based feature representation of data',
          topic: 'TBA',
          from: 'Max Planck Institutes for Intelligent System, Germany',
          image: 'https://www.is.mpg.de/uploads/employee/image/1149/me.jpg',
          link: 'http://wittawat.com/'
        },
        {
          name: 'Krikamol Muandet',
          info: 'statistical learning theory, kernel methods, Bayesian nonparametric, large-scale learning, and counterfactual prediction',
          topic: 'TBA',
          from: 'Max Planck Institutes for Intelligent System, Germany',
          image: 'http://krikamol.org/images/avatar/krikamol-logo-1.jpg',
          link: 'http://krikamol.org/'
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
#speakers {

  background-image: url('../../assets/background_speaker.jpg');
}
#speakers {
  background-color: #000000f0;
}
#speakers .container {
  z-index: 2;
  color: white;
  opacity: 1;
}
</style>
