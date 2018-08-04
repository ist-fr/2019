<template>
  <div class="hello" >
    <div class="col-md-12">
      <div class="col-md-3">
        <div class="col-md-10 block">
          <b> Up Coming event </b>
          <iframe src="https://calendar.google.com/calendar/embed?src=9neudqkgj0kj2d9vdedgf75vsk%40group.calendar.google.com&ctz=Asia%2FBangkok" style="border: 0"  height="400" width="100%" frameborder="0" scrolling="no"></iframe>

        </div>
      </div>
      <div class="col-md-9">
        <div class="col-md-12 block">
        <carousel></carousel>
        </div>
        <div class="col-md-12 block">
          <div class="icerik-bilgi">
            <a href="/"><h2>Scad Lab</h2></a>
            <p>Scalable Data System Lab is a labilaroty working on variety of feild including Database System,
              Accelerating Machine Learning, etc. The lab is run under professor Sarana Nutanong.</p>
          </div>
        </div>
        <!-- <div class="col-md-12 block">
          <iframe src="https://calendar.google.com/calendar/embed?src=9neudqkgj0kj2d9vdedgf75vsk%40group.calendar.google.com&ctz=Asia%2FBangkok" style="border: 0"  height="400" frameborder="0" scrolling="no"></iframe>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import moment from 'moment'
import Carousel from '@/components/Home/Carousel'
export default {
  name: 'hello',
  data () {
    return {
      company: '',
      companys: [
        { text: 'Stelligence', value: 'Stelligence' },
        { text: 'Scrop', value: 'Scrop' }
      ],
      customer: '',
      soNumber: '',
      endUser: '',
      product: '',
      products: [
        { text: 'Data Robot', value: 'Data Robot' },
        { text: 'Splunk', value: 'Splunk' }
      ],
      // for Vue 2.0
      startDate: {
        time: ''
      },
      endDate: {
        time: ''
      },
      note: '',
      maCondition: '',
      numService: '',
      purchaseLicense: '',
      supportLicense: '',
      option: {
        format: 'DD-MM-YYYY'
      }
    }
  },
  computed: {
    status: function () {
      return moment(this.endDate.time).startOf('day').isSameOrAfter(moment().startOf('day')) ? 'Active' : 'Expired'
    }
  },
  props: {
    loggingIn: {
      default: false
    }
  },
  components: {
    'date-picker': myDatepicker,
    'carousel': Carousel
  },
  // Pushes posts to the server when called.
  methods: {
    postPost () {
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.text-error {
  color: red;
}

.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
.block {
  background-color: #444;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border-style: solid; */
  border-radius: 7px;
  /* border-width: 2px 10px 4px 20px; */
}
</style>
