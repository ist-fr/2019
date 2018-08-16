<template>
  <section id="committee">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>COMMITTEE</h2>
        </div>
        <div class="col-lg-6 col-sm-12 text-center card-committee" v-for="committee in committees" v-bind:key="committee.name">
            <div class="img">
              <img class="img-committee" :src="committee.imageSrc">
            </div>
            <div>
              <small>{{committee.title}}</small>
              <h3>{{committee.name}}</h3>
              <h6>{{committee.position}}</h6>
              <h6>{{committee.school}}</h6>
              <h6>{{committee.university}}</h6>
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
      committees: [
        {
          title: 'Assoc. Prof. Dr.',
          name: 'Sarana Nutanong',
          imageSrc: require('../../assets/committee/dr_sarana_nutanong.png'),
          position: 'Faculty Member',
          school: 'School of Information Science & Technology',
          university: 'Vidyasirimedhi Institute of Science & Technology',
          website: 'http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .img {
    border-radius: 100%;
    display: inline-block;
    overflow: hidden;
    height: 200px;
    width: 200px;
  }

  .img img {
    height: 100%;
  }

  .card-committee {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-committee small {
    font-size: 120%;
  }

  .card-committee small, .card-committee h3 {
    font-weight: 600;
  }

  #committee {
    padding-bottom: 30px;
  }
</style>
