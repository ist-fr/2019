<template>
    <div class="col-md-12">
    <div>
      <div v-for="speaker in speakers" :key="speaker.name">
          <a href="http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55">
                <img :src="speaker.image" height="250px">
                <h2>{{speaker.name}}</h2>
            <p class="card-text">
                Incremental Query Processing<br>Large-scale Scientific Databases<br>Distributed Systems
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
<style>
.card{
  color: black;
}
</style>
