<template>
  <section id="speakers">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>SPEAKERS</h2>
        </div>
        <div class="col-lg-6 col-md-12 text-center card-speaker" v-for="speaker in speakers" v-bind:key="speaker.name">
            <a class="img" :href="speaker.link" target="_blank">
              <div class="img-overlay"><i class="fa fa-external-link"></i></div>
              <img class="img-speaker" :src="speaker.imageSrc">
            </a>
            <div>
              <small>{{speaker.title}}</small>
              <h3>{{speaker.name}}</h3>
              <h6>{{speaker.bio}}</h6>
              <small>FROM</small>
              <h6>{{speaker.university}}</h6>
              <small>ON THE TOPIC OF</small>
              <a :href="speaker.poster" target="_blank">
                <h6>{{speaker.topic}} <i class="fa fa-external-link" v-if="speaker.poster"></i></h6>
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
          title: 'Prof. Dr.',
          name: 'Dusit Niyato',
          bio: 'IEEE Fellow, 19755 citations, 67 h-index, Wireless Communications, Mobile Computing, Cognitive Communications',
          topic: 'Frontier Research in Computer Science and Engineering: Singapore Story in a Nutshell',
          university: 'Nanyang Technological University, Singapore',
          imageSrc: require('../../assets/speakers/dr_dusit_niyato.jpg'),
          link: 'http://www.ntu.edu.sg/home/dniyato/',
          poster: require('../../assets/poster/abs_istfr_dusit.jpg')
        },
        {
          title: 'Dr.',
          name: 'Supasorn Suwajanakorn',
          bio: 'Former Research Resident at Google Brain, Computer Vision, Synthesizing Obama: Learning Lip Sync from Audio',
          topic: 'TBA',
          university: 'VISTEC, Thailand',
          imageSrc: require('../../assets/speakers/dr_supasorn_suwajanakorn.jpg'),
          link: 'http://www.supasorn.com/'
        },
        {
          title: 'Asst. Prof. Dr.',
          name: 'Thanawin Rakthanmanon',
          bio: 'Data Mining, Machine Learning, Decision Support System',
          topic: 'Advanced Research in Time Series Mining',
          university: 'Kasetsart University, Thailand',
          imageSrc: require('../../assets/speakers/dr_thanawin_rakthanmanon.jpg'),
          link: 'https://www.cpe.ku.ac.th/?page_id=1932',
          poster: require('../../assets/poster/abs_istfr_thanawin.jpg')
        },
        {
          title: 'Assoc. Prof. Dr.',
          name: 'Danupon Nanongkai',
          bio: 'Theoretical Computer Science, Graph Algorithms',
          topic: 'Advances in the Theory of Graph (Network) Algorithms, and a Little Beyond',
          university: 'KTH Royal Institute of Technology, Sweden',
          imageSrc: require('../../assets/speakers/dr_danupon_nanongkai.jpg'),
          link: 'https://sites.google.com/site/dannanongkai/',
          poster: require('../../assets/poster/abs_istfr_danupon.jpg')
        },
        {
          title: 'Dr.',
          name: 'Wittawat Jitkrittum',
          bio: 'Kernel methods, Nonparametric statistical tests, Bayesian inference, Generative models',
          topic: 'Recent advances in kernel methods for model criticism',
          university: 'Max Planck Institutes for Intelligent Systems, Germany',
          imageSrc: require('../../assets/speakers/dr_wittawat_jitkrittum.jpg'),
          link: 'http://wittawat.com/',
          poster: require('../../assets/poster/abs_istfr_wittawat.jpg')
        },
        {
          title: 'Dr.',
          name: 'Prachya Boonkwan',
          bio: 'Computational Linguistics, Natural Language Processing, Machine Learning',
          topic: 'TBA',
          university: 'Nectec, Thailand',
          imageSrc: require('../../assets/speakers/dr_prachya_boonkwan.jpg'),
          link: 'https://www.nectec.or.th/hccru/staff/view/68'
        },
        {
          title: 'Dr.',
          name: 'Xiaofeng Xiong',
          bio: 'Neuromusculoskeletal Modeling of Legged Locomotion, Neuromechanical Control, Sensorimotor Learning, Biomechanics',
          topic: 'My research experience and work in Germany and Denmark',
          university: 'Technical Aspects of Multimodal Systems (TAMS), University of Hamburg, Germany',
          imageSrc: require('../../assets/speakers/dr_xiaofeng_xiong.jpg'),
          link: 'https://sites.google.com/site/xfxiongsite/home',
          poster: require('../../assets/poster/abs_istfr_xiong.jpg')
        },
        {
          title: 'Dr.',
          name: 'Sira Sriswasdi',
          bio: 'Computational Molecular Biology, Lecturer, Research Affairs, Faculty of Medicine',
          topic: 'Accurate de novo peptide sequencing with deep learning and positional post-processing',
          university: 'Chulalongkorn University, Thailand',
          imageSrc: require('../../assets/speakers/dr_sira_sriswasdi.jpg'),
          link: 'https://cmbcu.github.io/profile_ss.html',
          poster: require('../../assets/poster/abs_istfr_sira.jpg')
        },
        {
          title: 'Dr.',
          name: 'Borom Tunwattanapong',
          bio: '3D Scanning Technologies, Computer Visions and Computer Graphics',
          topic: 'High fidelity 3D Scanning: From research to startup in Thailand',
          university: 'Thailand',
          imageSrc: require('../../assets/speakers/dr_borom_tunwattanapong.jpg')
        }
        // {
        //   title: 'Dr.',
        //   name: 'Krikamol Muandet',
        //   bio: 'Statistical learning theory, kernel methods, Bayesian nonparametric, large-scale learning, and counterfactual prediction',
        //   topic: 'TBA',
        //   university: 'Max Planck Institutes for Intelligent Systems, Germany',
        //   imageSrc: require('../../assets/speakers/dr_krikamol_muandet.jpg'),
        //   link: 'http://krikamol.org/'
        // }
      ]
    }
  }
}
</script>
<style scoped>
  .img {
    border-radius: 100%;
    display: inline-block;
    flex: 0 0 200px;
    height: 200px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 200px;
  }

  .img img {
    height: 100%;
  }

  .img-overlay {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.25s;
    z-index: 1;
  }

  .img-overlay:hover {
    opacity: 1;
    background-color: rgba(46,204,113,0.4);
    background: linear-gradient(65deg, rgba(88, 46, 145, 0.4), rgba(160, 34, 58, 0.4));
    color: #fafafa;
    font-size: 24px;
  }

  .card-speaker {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-speaker small {
    font-size: 120%;
  }

  .card-speaker small, .card-speaker h3 {
    font-weight: 600;
  }

  #speaker {
    padding-bottom: 30px;
  }
</style>
