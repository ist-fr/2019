<template>
  <div class="hello" >
    <div class="container">
      <div class="row">
        <form class="form-horizontal" @submit.prevent="search">
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('subject')}">
            <label class="control-label col-sm-2" for="subject">Subject</label>
            <div class="col-sm-10">
              <select v-model="subject" class="form-control" name="subject" options="subject">
                <option disabled value="">Select subject</option>
                <option v-for="option in subjects" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('subject')" class="fa fa-warning"></i>
              <span v-show="errors.has('subject')" class="help text-error">{{ errors.first('subject') }}</span>
            </div>
          </div>

          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('name')}">
            <label class="control-label col-sm-2" for="name">Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="name" v-validate="'required'" name="name" class="input form-control" type="text" placeholder="name">
                <i v-show="errors.has('name')" class="fa fa-warning"></i>
                <span v-show="errors.has('name')" class="help text-error">{{ errors.first('name') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('organization')}">
            <label class="control-label col-sm-2" for="organization">Organization</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="organization" v-validate="'required'" name="organization" class="input form-control" type="text" placeholder="organization">
                <i v-show="errors.has('organization')" class="fa fa-warning"></i>
                <span v-show="errors.has('organization')" class="help text-error">{{ errors.first('organization') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('country')}">
            <label class="control-label col-sm-2" for="country">Country</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="country" v-validate="'required'" name="country" class="input form-control" type="text" placeholder="country">
                <i v-show="errors.has('country')" class="fa fa-warning"></i>
                <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('email')}">
            <label class="control-label col-sm-2" for="email">Email</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="email" v-validate="'required'" name="email" class="input form-control" type="text" placeholder="email">
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span v-show="errors.has('email')" class="help text-error">{{ errors.first('email') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('question')}">
            <label class="control-label col-sm-2" for="question">Question and Comment</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="question" v-validate="'required'" name="question" class="input form-control" type="text" placeholder="question">
                <i v-show="errors.has('question')" class="fa fa-warning"></i>
                <span v-show="errors.has('question')" class="help text-error">{{ errors.first('question') }}</span>
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
      name: '',
      subjects: [
        { text: 'Registration', value: 'registration' },
        { text: 'Submission', value: 'submission' },
        { text: 'Other', value: 'other' }
      ],
      subject: '',
      organization: '',
      country: '',
      email: '',
      question: ''
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
