<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <form class="form-horizontal" @submit.prevent="search">
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('company')}">
            <label class="control-label col-sm-2" for="company">Company</label>
            <div class="col-sm-10">
              <select v-model="company" class="form-control" name="company" options="companys">
                <option disabled value="">Please select one</option>
                <option v-for="option in companys" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('customer')}">
            <label class="control-label col-sm-2" for="customer">Customer</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="customer" v-validate="'required'" name="customer" class="input form-control" type="text" placeholder="customer">
                <i v-show="errors.has('customer')" class="fa fa-warning"></i>
                <span v-show="errors.has('customer')" class="help text-error">{{ errors.first('customer') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('soNumber')}">
            <label class="control-label col-sm-2" for="soNumber">SO number</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="soNumber" v-validate="'required'" name="soNumber" class="input form-control" type="text" placeholder="soNumber">
                <i v-show="errors.has('soNumber')" class="fa fa-warning"></i>
                <span v-show="errors.has('soNumber')" class="help text-error">{{ errors.first('soNumber') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('endUser')}">
            <label class="control-label col-sm-2" for="endUser">Enduser</label>
            <div class="col-sm-10">
              <input v-model="endUser" name="endUser" class="input form-control" type="text" placeholder="Enduser" required>
              <i v-show="errors.has('endUser')" class="fa fa-warning"></i>
              <span v-show="errors.has('endUser')" class="help text-error">{{ errors.first('endUser') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('product')}">
            <label class="control-label col-sm-2" for="product">Product</label>
            <div class="col-sm-10">
              <select v-model="product" class="form-control" name="product" options="products">
                <option disabled value="">Please select one</option>
                <option v-for="option in products" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('product')" class="fa fa-warning"></i>
              <span v-show="errors.has('product')" class="help text-error">{{ errors.first('product') }}</span>
            </div>
          </div>
          <div class="form-group required">
            <label class="control-label col-sm-2" for="startDate">Warranty Start</label>
            <div class="col-sm-4">
              <date-picker :date="startDate" name="startDate" type="date"></date-picker>
            </div>
            <label class="control-label col-sm-2" for="endDate">Warranty Stop</label>
            <div class="col-sm-4">
              <date-picker :date="endDate" name="endDate"></date-picker>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('note')}">
            <label class="control-label col-sm-2" for="note">Note:</label>
            <div class="col-sm-10">
              <textarea v-model="note"  name="note" class="input form-control" type="text" placeholder="note"></textarea>
              <i v-show="errors.has('note')" class="fa fa-warning"></i>
              <span v-show="errors.has('note')" class="help text-error">{{ errors.first('note') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('numService')}">
            <label class="control-label col-sm-2" for="numService">Number of Service:</label>
            <div class="col-sm-9">
              <input v-model.number="numService" v-validate="'between:0,100'" name="numService" class="input form-control" type="number" placeholder="Service Contract">
              <i v-show="errors.has('numService')" class="fa fa-warning"></i>
              <span v-show="errors.has('numService')" class="help text-error">{{ errors.first('numService') }}</span>
            </div>
            <label class="control-label col-sm-1 left" for="numService"> Days</label>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('maCondition')}">
            <label class="control-label col-sm-2" for="maCondition">MA condition:</label>
            <div class="col-sm-10">
              <input v-model="maCondition" name="maCondition" class="input form-control" type="text" placeholder="MA condition">
              <i v-show="errors.has('maCondition')" class="fa fa-warning"></i>
              <span v-show="errors.has('maCondition')" class="help text-error">{{ errors.first('maCondition') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('status')}">
            <label class="control-label col-sm-2" for="status">Status:</label>
            <div class="col-sm-10">
              <input v-model="status"  name="status" class="input form-control" type="text" placeholder="Active" readonly>
              <i v-show="errors.has('status')" class="fa fa-warning"></i>
              <span v-show="errors.has('status')" class="help text-error">{{ errors.first('status') }}</span>
            </div>
          </div>
        </form>
      </div>
  
    </div>
    <!-- Small modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="postPost()">Submit</button>
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import axios from 'axios'
import moment from 'moment'

const BASE_URL = 'http://128.199.88.139:3000/api/'

export default {
  name: 'hello',
  data () {
    return {
      id: this.$route.params.id,
      msg: 'License Alert',
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
  components: {
    'date-picker': myDatepicker
  },
  // Pushes posts to the server when called.
  methods: {
    postPost () {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('in')
          axios.put(BASE_URL + 'alerts/' + this.id, {
            company: this.company,
            customer: this.customer,
            soNumber: this.soNumber,
            endUser: this.endUser,
            product: this.product,
            startDate: this.startDate.time,
            endDate: this.endDate.time,
            note: this.note,
            maCondition: this.maCondition,
            numService: this.numService,
            status: this.status
          })
            .then(response => {
              console.log('send')
              window.location.href = '#/view'
            })
            .catch(e => {
              console.log(e)
            })
          return
        }
      })
    }
  },
  created () {
    axios.get(BASE_URL + 'alerts/' + this.id)
      .then(response => {
        console.log('get')
        console.log(response)
        this.company = response.data.company
        this.customer = response.data.customer
        this.soNumber = response.data.soNumber
        this.endUser = response.data.endUser
        this.product = response.data.product
        this.startDate.time = moment(response.data.startDate).format('YYYY-MM-DD')
        this.endDate.time = moment(response.data.endDate).format('YYYY-MM-DD')
        this.note = response.data.note
        this.maCondition = response.data.maCondition
        this.numService = response.data.numService
        this.purchaseLicense = response.data.purchaseLicense
        this.supportLicense = response.data.supportLicense
      })
      .catch(e => {
        console.log(e)
      })
    axios.get(BASE_URL + 'products')
      .then(response => {
        console.log('get')
        console.log(response)
        this.products = response.data
      })
      .catch(e => {
        console.log(e)
      })
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

.left {
  text-align: left;
}
.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
</style>
