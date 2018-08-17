<template>
  <section id="submission" class="lead">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>SUBMISSION</h2>
        </div>
        <div class="col-md-6 text-right">
          <h2><a href="/form/submission">Submit your research <i class="fa fa-external-link"></i></a></h2>
        </div>
        <div class="col-lg-12 mx-auto lead">
          <p style="text-align: justify;">
            The goal of the IST-FR symposium is to show the potential of Thailand researcher to the public.
            Thailand has a lot of high-quality research but needed an opportunity to show their potential.
            We IST-FR want to be a show floor of the research to meet both academic and industrial.
            Calling for papers, We invite all bachelor degree student for submitting a project.
            Out theme of the even is Academic Excellence in Data Science through academic and industry collaboration research
          </p>
          <p>
            To be eligible for submission, your research must meets all the criteria set out below
          </p>
          <h3> Criteria </h3>
          <ul>
            <li>
              Undergraduate research in science or Engineering feilds
            </li>
            <li>
              Research has been done during 2017/2018 academic years
            </li>
            <li>
              Research must have scientific process and basic knowledge in computer science, computer Engineering or information science
            </li>
            <li>
              Research format that accepted include Full/Short paper, journal, report, thesis
            </li>
            <li>
              attachment submittion can include, but not limited to, paper, poster file, presentration file, manualscript, source code
            </li>
          </ul>
          <h3>Online submission</h3>
          <ul>
            <li>Open submission 25 August</li>
            <li>Close submission 25 September 2018 23:59 (GMT +7)</li>
            <li>Result released 10 July 2018</li>
          </ul>
        <h3>Poster presentration</h3>
        <p>poster presentration @venu on 19-20 December 2018</p>
        <h3>Prizes</h3>
          Prize total 17,500 BAHT
          <ul>
            <li>First Place: 10,000</li>
            <li>Second Place: 5,000</li>
            <li>Third Place: 2,500</li>
          </ul>
        </div>
        <div class="col-lg-12">
          <h2>Submission area</h2>
        </div>
        <div class="col-sm-12 col-lg-6" v-for="(researchField, researchFieldKey) in researchFields" v-bind:key="researchFieldKey">
          <div class="icon-left">
          </div>
          <div class="text">
            <h4>{{researchFieldKey}}</h4>
            <ul>
              <li v-for="research in researchField" v-bind:key="research">
                {{research}}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6 text-right submit-external">
          <div>
            <h2><a href="/form/submission">Submit your research <i class="fa fa-external-link"></i></a></h2>
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
        'Interdisciplinary Information (IDIF)': [
          'Bioinformatics',
          'Biomedical and Health Informatics',
          'Chemoinformatic',
          'Pharmaceutical Informatics',
          'Mathematical Informatics'
        ],
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
      information: [
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
  }
}
</script>

<style scoped>
  .submit-external div {
    position:relative;
    width:100%;
    height:100%;
    float: right;
  }

  .submit-external div a {
    position:absolute;
    bottom:0;
    right:0;
  }
</style>
