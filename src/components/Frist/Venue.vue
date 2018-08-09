<template>
    <div class="col-md-12">
    
    </div>
</template>
<script>
import person from '@/components/People/Person'
export default {
  data () {
    return {
      researchFields: [
        'Artificial Intellegence & Machine Learning (AI&ML)',
        'Computer Achitecture & operating system (CAOS)',
        'Computer Education (CPED)',
        'Conputer Graphics (CPGP)',
        'Computer Vision (CPVS)',
        'Database Management System (DBMS)',
        'Embeded Systems (EBST)',
        'High Performance Conputing (HPCP)',
        'Interdisciplinary Information (IDIF)',
        'Internet of Thing (IOTS)',
        'Human Computer Interaction (HCIT)',
        'Natural Language Processing (NLPC)',
        'Networking (NETW)',
        'Robotics (ROBO)',
        'Security & Rrivacy (SCPV)',
        'Software Engineering (SWEN)',
        'Theory of Computation (TOCP)'

      ]
    }
  },
  components: {
    person
  },
  method: {
    selectPerson (person) {
      console.log(person)
    }
  }
}
</script>
<style>
</style>
