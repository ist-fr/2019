<template>
  <div class="hello" >
    <div class="container">
      <div class="row">
        <form class="form-horizontal" @submit.prevent="search">
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('participantCategory')}">
            <label class="control-label col-sm-2" for="participantCategory">Participant Category</label>
            <div class="col-sm-10">
              <select v-model="participantCategory" class="form-control" name="participantCategory" options="participantCategory">
                <option disabled value="">Select Category</option>
                <option v-for="option in participantCategories" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('participantCategory')" class="fa fa-warning"></i>
              <span v-show="errors.has('participantCategory')" class="help text-error">{{ errors.first('participantCategory') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('title')}">
            <label class="control-label col-sm-2" for="title">Title</label>
            <div class="col-sm-10">
              <select v-model="title" class="form-control" name="title" options="titles">
                <option disabled value="">Select Title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title')" class="fa fa-warning"></i>
              <span v-show="errors.has('title')" class="help text-error">{{ errors.first('title') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('firstName')}">
            <label class="control-label col-sm-2" for="firstName">First Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="firstName" v-validate="'required'" name="firstName" class="input form-control" type="text" placeholder="firstName">
                <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName')" class="help text-error">{{ errors.first('firstName') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('middleName')}">
            <label class="control-label col-sm-2" for="middleName">Middle Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="middleName" v-validate="'required'" name="middleName" class="input form-control" type="text" placeholder="middleName">
                <i v-show="errors.has('middleName')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName')" class="help text-error">{{ errors.first('middleName') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('lastName')}">
            <label class="control-label col-sm-2" for="lastName">Last Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="lastName" v-validate="'required'" name="lastName" class="input form-control" type="text" placeholder="lastName">
                <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName')" class="help text-error">{{ errors.first('lastName') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('nameOnBadge')}">
            <label class="control-label col-sm-2" for="nameOnBadge">Name on Badge</label>
            <div class="col-sm-10">
              <input v-model="nameOnBadge" name="nameOnBadge" class="input form-control" type="text" placeholder="nameOnBadge" required>
              <i v-show="errors.has('nameOnBadge')" class="fa fa-warning"></i>
              <span v-show="errors.has('nameOnBadge')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('email')}">
            <label class="control-label col-sm-2" for="email">Email</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="email" name="email" v-validate="'required|email'" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="help text-error">{{ errors.first('email') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('phone')}">
            <label class="control-label col-sm-2" for="phone">Phone</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="phone" name="phone" v-validate="'required'" class="input form-control" type="text" placeholder="phone" required>
              <i v-show="errors.has('phone')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone')" class="help text-error">{{ errors.first('phone') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('fax')}">
            <label class="control-label col-sm-2" for="fax">Fax</label>
            <div class="col-sm-10">
              <input v-model="fax" name="fax" class="input form-control" type="text" placeholder="fax" required>
              <i v-show="errors.has('fax')" class="fa fa-warning"></i>
              <span v-show="errors.has('fax')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('affiliation')}">
            <label class="control-label col-sm-2" for="affiliation">Affiliation/Company</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="affiliation" name="affiliation" v-validate="'required'" class="input form-control" type="text" placeholder="affiliation" required>
              <i v-show="errors.has('affiliation')" class="fa fa-warning"></i>
              <span v-show="errors.has('affiliation')" class="help text-error">{{ errors.first('affiliation') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('department')}">
            <label class="control-label col-sm-2" for="department">Department</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="department" name="department" v-validate="'required'" class="input form-control" type="text" placeholder="department" required>
              <i v-show="errors.has('department')" class="fa fa-warning"></i>
              <span v-show="errors.has('department')" class="help text-error">{{ errors.first('department') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('maillingAddress1')}">
            <label class="control-label col-sm-2" for="maillingAddress1">Mailling Address 1</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="maillingAddress1" name="maillingAddress1" v-validate="'required'" class="input form-control" type="text" placeholder="Mailling Address 1" required>
              <i v-show="errors.has('maillingAddress1')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress1')" class="help text-error">{{ errors.first('Mailling Address 1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('maillingAddress2')}">
            <label class="control-label col-sm-2" for="maillingAddress2">Mailling Address 2</label>
            <div class="col-sm-10">
              <input v-model="maillingAddress2" name="maillingAddress2" class="input form-control" type="text" placeholder="Mailling Address 2" required>
              <i v-show="errors.has('maillingAddress2')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress2')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('city')}">
            <label class="control-label col-sm-2" for="city">City</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="city" name="city" v-validate="'required'" class="input form-control" type="text" placeholder="City" required>
              <i v-show="errors.has('city')" class="fa fa-warning"></i>
              <span v-show="errors.has('city')" class="help text-error">{{ errors.first('city') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('province')}">
            <label class="control-label col-sm-2" for="province">State/Province/District</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="province" name="province" v-validate="'required'" class="input form-control" type="text" placeholder="Province" required>
              <i v-show="errors.has('province')" class="fa fa-warning"></i>
              <span v-show="errors.has('province')" class="help text-error">{{ errors.first('province') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('postalCode')}">
            <label class="control-label col-sm-2" for="postalCode">Postal Code</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="postalCode" name="postalCode" v-validate="'required|number'" class="input form-control" type="text" placeholder="postalCode" required>
              <i v-show="errors.has('postalCode')" class="fa fa-warning"></i>
              <span v-show="errors.has('postalCode')" class="help text-error">{{ errors.first('postalCode') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('country')}">
            <label class="control-label col-sm-2" for="country">Country</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="country" name="country" v-validate="'required'" class="input form-control" type="text" placeholder="country" required>
              <i v-show="errors.has('country')" class="fa fa-warning"></i>
              <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
          </div>
        </form>
      </div>
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="postPost()">Submit</button>
    </div>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import axios from 'axios'

const BASE_URL = 'http://128.199.88.139:3000/api/'

export default {
  name: 'hello',
  data () {
    return {
      participantCategory: '',
      participantCategories: {

      },
      title: '',
      titles: [
        { text: 'Prof', value: 'Prof' },
        { text: 'Dr', value: 'Dr' },
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
        { text: 'Miss', value: 'Miss' }
      ],
      firstName: '',
      middleName: '',
      lastName: '',
      nameOnBadge: '',
      email: '',
      phone: '',
      fax: '',
      affiliation: '',
      affiliationType: '',
      department: '',
      maillingAddress1: '',
      maillingAddress2: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      option: {
        format: 'DD-MM-YYYY'
      }
    }
  },
  computed: {
  },
  props: {
    loggingIn: {
      default: false
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
          axios.post(BASE_URL + `alerts/`, {
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

.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
</style>
