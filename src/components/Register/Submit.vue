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
          <h3>Leader</h3>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('firstName1')}">
            <label class="control-label col-sm-2" for="firstName1">First Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="firstName1" v-validate="'required'" name="firstName1" class="input form-control" type="text" placeholder="firstName1">
                <i v-show="errors.has('firstName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName1')" class="help text-error">{{ errors.first('firstName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('middleName1')}">
            <label class="control-label col-sm-2" for="middleName1">Middle Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="middleName1" v-validate="'required'" name="middleName1" class="input form-control" type="text" placeholder="middleName1">
                <i v-show="errors.has('middleName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName1')" class="help text-error">{{ errors.first('middleName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('lastName1')}">
            <label class="control-label col-sm-2" for="lastName1">Last Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="lastName1" v-validate="'required'" name="lastName1" class="input form-control" type="text" placeholder="lastName1">
                <i v-show="errors.has('lastName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName1')" class="help text-error">{{ errors.first('lastName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('email1')}">
            <label class="control-label col-sm-2" for="email1">Email</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="email1" name="email1" v-validate="'required|email'" class="input form-control" type="text" placeholder="email1" required>
              <i v-show="errors.has('email1')" class="fa fa-warning"></i>
              <span v-show="errors.has('email1')" class="help text-error">{{ errors.first('email1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('phone1')}">
            <label class="control-label col-sm-2" for="phone1">Phone No</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="phone1" name="phone1" v-validate="'required'" class="input form-control" type="text" placeholder="phone no" required>
              <i v-show="errors.has('phone1')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone1')" class="help text-error">{{ errors.first('phone1') }}</span>
              </p>
            </div>
          </div>   
          <h3>Second member</h3>
          <div :class="{'form-group':true,'has-error': errors.has('firstName2')}">
            <label class="control-label col-sm-2" for="firstName2">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName2" name="firstName2" class="input form-control" type="text" placeholder="First Name 2" required>
              <i v-show="errors.has('firstName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName2')" class="help text-error">{{ errors.first('First Name 2') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName2')}">
            <label class="control-label col-sm-2" for="middleName2">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName2" name="middleName2" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName2')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName2')}">
            <label class="control-label col-sm-2" for="lastName2">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName2" name="lastName2" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName2')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email2')}">
            <label class="control-label col-sm-2" for="email2">Email</label>
            <div class="col-sm-10">
              <input v-model="email2" name="email2" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email2')" class="fa fa-warning"></i>
              <span v-show="errors.has('email2')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone2')}">
            <label class="control-label col-sm-2" for="phone2">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone2" name="phone2" class="input form-control" type="text" placeholder="phonr No" required>
              <i v-show="errors.has('phone2')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone2')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Third member</h3>
          <div :class="{'form-group':true,'has-error': errors.has('firstName3')}">
            <label class="control-label col-sm-2" for="firstName3">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName3" name="firstName3" class="input form-control" type="text" placeholder="First Name 2" required>
              <i v-show="errors.has('firstName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName3')" class="help text-error">{{ errors.first('First Name 2') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName3')}">
            <label class="control-label col-sm-2" for="middleName3">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName3" name="middleName3" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName3')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName3')}">
            <label class="control-label col-sm-2" for="lastName3">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName3" name="lastName3" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName3')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email3')}">
            <label class="control-label col-sm-2" for="email3">Email</label>
            <div class="col-sm-10">
              <input v-model="email3" name="email3" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email3')" class="fa fa-warning"></i>
              <span v-show="errors.has('email3')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone3')}">
            <label class="control-label col-sm-2" for="phone3">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone3" name="phone3" class="input form-control" type="text" placeholder="phonr No" required>
              <i v-show="errors.has('phone3')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone3')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Fourth member</h3>
          <div :class="{'form-group':true,'has-error': errors.has('firstName4')}">
            <label class="control-label col-sm-2" for="firstName4">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName4" name="firstName4" class="input form-control" type="text" placeholder="First Name 2" required>
              <i v-show="errors.has('firstName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName4')" class="help text-error">{{ errors.first('First Name 2') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName4')}">
            <label class="control-label col-sm-2" for="middleName4">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName4" name="middleName4" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName4')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName4')}">
            <label class="control-label col-sm-2" for="lastName4">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName4" name="lastName4" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName4')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email4')}">
            <label class="control-label col-sm-2" for="email4">Email</label>
            <div class="col-sm-10">
              <input v-model="email4" name="email4" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email4')" class="fa fa-warning"></i>
              <span v-show="errors.has('email4')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone4')}">
            <label class="control-label col-sm-2" for="phone4">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone4" name="phone4" class="input form-control" type="text" placeholder="phonr No" required>
              <i v-show="errors.has('phone4')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone4')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Fifth member</h3>
          <div :class="{'form-group':true,'has-error': errors.has('firstName5')}">
            <label class="control-label col-sm-2" for="firstName5">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName5" name="firstName5" class="input form-control" type="text" placeholder="First Name 2" required>
              <i v-show="errors.has('firstName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName5')" class="help text-error">{{ errors.first('First Name 2') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName5')}">
            <label class="control-label col-sm-2" for="middleName5">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName5" name="middleName5" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName5')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName5')}">
            <label class="control-label col-sm-2" for="lastName5">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName5" name="lastName5" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName5')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email5')}">
            <label class="control-label col-sm-2" for="email5">Email</label>
            <div class="col-sm-10">
              <input v-model="email5" name="email5" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email5')" class="fa fa-warning"></i>
              <span v-show="errors.has('email5')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone5')}">
            <label class="control-label col-sm-2" for="phone5">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone5" name="phone5" class="input form-control" type="text" placeholder="phonr No" required>
              <i v-show="errors.has('phone5')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone5')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <br>
          <h3>General Infomation</h3>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('university')}">
            <label class="control-label col-sm-2" for="university">University</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="university" name="university" v-validate="'required'" class="input form-control" type="text" placeholder="university" required>
              <i v-show="errors.has('university')" class="fa fa-warning"></i>
              <span v-show="errors.has('university')" class="help text-error">{{ errors.first('university') }}</span>
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
import moment from 'moment'

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
      firstName1: '',
      middleName1: '',
      lastName1: '',
      mail1: '',
      phone1: '',
      firstName2: '',
      middleName2: '',
      lastName2: '',
      mail2: '',
      phone2: '',
      firstName3: '',
      middleName3: '',
      lastName3: '',
      mail3: '',
      phone3: '',
      firstName4: '',
      middleName4: '',
      lastName4: '',
      mail4: '',
      phone4: '',
      firstName5: '',
      middleName5: '',
      lastName5: '',
      mail5: '',
      phone5: '',
      university: '',
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
    console.log(this.endDate.time)
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
