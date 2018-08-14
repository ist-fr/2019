<template>
  <div class="contrainner">
    <submit></submit>
    <div class="row">
      IST-FR symposium goal is show the protential of Thailand researcher to the prublic.
      Thailand have a lot go high quality research but nueeded an oppatunity to show their protential.
      We IST-FR want to be show floor o the research to meet both academic and industrial.
      Calling for papers, We invite all bachelor degree student for suppe project.
    
      Theme Academic Excellence in Data Science through adcademic and industry collaboration research

    </div>
    <div class="row">
      <h2>Online submission</h2>
      - Open submission 25 aug
      - Close submission 25 sep 23:59 (GMT +7)
      - Result released 10
    </div>
      <div class="row">
      <h2>Poster presentration</h2>
      - poster presentration @venu on 20 dec
    </div>
    <div class="row">
      <h2>Prizes</h2>
      First Place: 10,000
      Second Place: 5,000
      Third Place:  2,500
    </div>
    <div class="row">
      <h2>Submission area</h2>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" v-for="(researchField, researchFieldKey) in researchFields" v-bind:key="researchFieldKey">
            <div class="icon-left">
              <!-- <i class="fa fa-thumbs-o-up fa-3x"></i>   -->
            </div>
            <div class="text">
              <h4>{{researchFieldKey}}</h4>
              <li v-for="research in researchField" v-bind:key="research">
                {{research}}
              </li>

            </div>
        </div>
    </div>
  </div>
</template>
<script>
import submit from '@/components/Register/Submit'
export default {
  data () {
    return {
      researchFields: {
        'Artificial Intelligence & Machine Learning (AI&ML)': [
          'Artificial General Intelligence',
          'Statistical AI',
          'Deep Learning',
          'Decision Tree Learning',
          'Clustering'
        ],
        'Computer Architecture & Operating system (CAOS)': [
          'Instruction Set Architecture',
          'Compiler',
          'System Design',
          'Microarchitecture',
          'Kernel'
        ],
        'Computer Education (CPED)': [
          'Computer for education',
          'Programming Learning Environment',
          'e-learning systems',
          'learning processes',
          'quality of learning'
        ],
        'Computer Graphics (CPGP)': [
          'Computational geometry',
          'Computational topology',
          'Image processing',
          'Information visualization',
          'Digital art'
        ],
        'Computer Vision (CPVS)': [
          'Recognition',
          'Motion analysis',
          'Scene reconstruction',
          'Image restoration',
          'Image/Video generation'
        ],
        'Database Management System (DBMS)': [
          'database management',
          'Distributed database',
          'database optimization',
          'Indexing',
          'Relational Design Theory'
        ],
        'Embedded Systems (EBST)': [
          'ASIC',
          'FPGA',
          'Embedded software architectures',
          'Debugging embedded systems',
          'Embedded system hardware'
        ],
        'High Performance Computing (HPCP)': [
          'Distributed system',
          'System Simulation',
          'HPC Systems for Energy Efficiency',
          'Scalable System',
          'Parallel Programs at a Large Scale'
        ],
        // 'Interdisciplinary Information (IDIF)': [
        // ],
        'Internet of Things (IOTS)': [
          'Energy saving schemes for IoT devices',
          'Enabling technologies for IoT',
          'Smart sensors',
          'Test bed and experiment experiences in cities',
          'Bigdata in IOT'
        ],
        'Human Computer Interaction (HCIT)': [
          'psychology',
          'visualization',
          'design',
          'Interactive Art and HCI',
          'speech-language pathology'
        ],
        'Natural Language Processing (NLPC)': [
          'Morphological segmentation',
          'Part-of-speech tagging',
          'Stemming',
          'Semantics',
          'Natural language generation'
        ],
        'Networking (NETW)': [
          'Network topology',
          'Wireless technologies',
          'Network structure',
          'Communication protocols',
          'Network Management Software and Tools'
        ],
        'Robotics (ROBO)': [
          'Adaptive control',
          'Aerial robotics',
          'Bio-inspired robotics',
          'Cognitive robotics',
          'Evolutionary robotics'
        ],
        'Security & Privacy (SCPV)': [
          'Web Application Penetration Testing',
          'Network Penetration Testing',
          'Security Analysis',
          'Cyber Defense',
          'Digital Forensics'
        ],
        'Software Engineering (SWEN)': [
          'Software construction',
          'Software testing',
          'Software development process',
          'Software quality'
        ],
        'Theory of Computation (TOCP)': [
          'Graph theory',
          'Algorithm',
          'Turing Machine',
          'Finite state automaton'
        ]
      },
      informatiom: [
        'Open '
      ]
    }
  },
  method: {
    selectPerson (person) {
      console.log(person)
    }
  },
  components: {
    submit
  }
}
</script>
<style>
.text{
    text-align:left;
    padding:0 0 0 15px;
}
.text h4{
    padding-bottom:5px;
}
</style>
