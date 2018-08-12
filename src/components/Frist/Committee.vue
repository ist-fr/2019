<template>
    <div class="row">
<div class="card">

  <!-- Card image -->
  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    <h4 class="card-title"><a>Card title</a></h4>
    <!-- Text -->
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!-- Button -->
    <a href="#" class="btn btn-primary">Button</a>

  </div>

</div>
    <div>
      <div v-for="speaker in speakers" :key="speaker.name" class="card">
          <a href="http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55">
            <img :src="speaker.image" height="250px">
          </a>
          <h2 class="card-title">{{speaker.name}}</h2>
          <div class="card-body"> 
            <p class="card-text">
              Incremental Query Processing<br>Large-scale Scientific Databases<br>Distributed Systems
            </p>
          </div>
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
<ste>
.card{
  co
}
</style>
