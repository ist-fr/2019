<template>
  <section id="committee">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2><i class="fa fa-user-o fa-lg white-text mr-3"></i>Commitee</h2>
          <p class="lead"></p>

          <div v-for="commitee in commitees" :key="commitee.name" class="card">
          <a href="http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55">
            <img :src="commitee.image" height="250px">
          </a>
          <h2 class="card-title">{{commitee.name}}</h2>
          <div class="card-body"> 
            <p class="card-text">
              Incremental Query Processing<br>Large-scale Scientific Databases<br>Distributed Systems
            </p>
          </div>
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
      commitees: [
        {
          name: 'Assoc. Prof. Dr. Sarana Nutanong',
          image: 'http://www.vistec.ac.th/uploads/staff/e1fad935c6752ccd81949fce3d7035e1.png',
          website: ''
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