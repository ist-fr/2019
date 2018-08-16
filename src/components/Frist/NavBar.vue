<template>
  <nav class="navbar navbar-default navbar-inverse" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
  
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse center" id="bs-example-navbar-collapse-1">
        <scrollactive>
        <ul class="nav navbar-nav">
          <li class="">
            <a href="#/" class="scrollactive-item">Home</a>
          </li>
          <li>
            <a href="#/people" class="scrollactive-item">People</a>
          </li>
          <li>
            <a href="#/research" class="scrollactive-item">Research</a>
          </li>
          <li>
            <a href="#/activity" class="scrollactive-item">Activity</a>
          </li>
          <li>
            <a href="#/blog" class="scrollactive-item">Blog</a>
          </li>
          <li>
            <a href="#/frist" class="scrollactive-item">FRIST</a>
          </li>
        </ul>
        </scrollactive>
        <!-- <ul class="nav navbar-nav navbar-right" v-bind:class="{ 'loggingIn': loggingIn }"> 
          <li v-if="loggingIn">
            <p class="navbar-text">Welcome {{credential.username}}</p>
          </li>
          <li v-if="loggingIn">
            <div class="form-group">
              <button type="submit" v-on:click="logout()" class="btn btn-primary btn-block">logout</button>
            </div>
          </li>
          <li v-if="!loggingIn">
            <label  class="sr-only" for="exampleInputEmail2">Email address</label>
            <input v-model="credential.username" type="text" class="form-control" id="exampleInputEmail2" placeholder="Username" required>
          </li>
          <li v-if="!loggingIn">
            <label class="sr-only" for="exampleInputPassword2">Password</label>
            <input v-model="credential.password" type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
  
          </li>
          <li v-if="!loggingIn">
            <div class="form-group">
              <button type="submit" v-on:click="login()" class="btn btn-primary btn-block">login
              </button>
            </div>
          </li>
        </ul> -->
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import axios from 'axios'

const BASE_URL = 'http://128.199.88.139:3000/api/'

export default {
  name: 'auth',
  data () {
    return {
      credential: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  props: {
    loggingIn: {
      default: false
    }
  },
  // Pushes posts to the server when called.
  methods: {
    login () {
      axios.post(BASE_URL + 'Users/login', this.credential)
        .then(response => {
          if (response.data) {
            if (response.data.id) {
              this.$emit('login', true)
              localStorage.setItem('key', response.data.id)
              localStorage.setItem('userId', response.data.userId)
              axios.defaults.headers.common['Authorization'] = response.data.id
              window.location.reload()
            }
          }
          console.log(response)
        })
        .catch(e => {
          alert('invalid usernamer or password')
          console.log(e)
        })
    },
    logout () {
      axios.post(BASE_URL + 'Users/logout')
        .then(response => {
          window.location.href = '#/'
          this.$emit('login', false)
          console.log(response)
        })
        .catch(e => console.log(e))
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('key')
    axios.get(BASE_URL + 'Users/' + localStorage.getItem('userId'))
      .then(response => {
        if (response.status === 200) {
          this.credential.username = response.data.username
          this.$emit('login', true)
          console.log(response)
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  component: {
    'modal': {
      template: '#modal-template'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: url('http://www.wallpaperup.com/uploads/wallpapers/2012/10/21/20181/cad2441dd3252cf53f12154412286ba0.jpg');
  padding: 50px;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .8);
}

#login-dp .help-block {
  font-size: 12px
}

#login-dp .bottom {
  background-color: rgba(255, 255, 255, .8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}

#login-dp .social-buttons {
  margin: 12px 0
}

#login-dp .social-buttons a {
  width: 49%;
}

#login-dp .form-group {
  margin-bottom: 10px;
}

.btn-fb {
  color: #fff;
  background-color: #3b5998;
}

.btn-fb:hover {
  color: #fff;
  background-color: #496ebc
}

.btn-tw {
  color: #fff;
  background-color: #55acee;
}

.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}

@media(max-width:768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
}
</style>
