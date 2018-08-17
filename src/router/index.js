import Vue from 'vue'
import Router from 'vue-router'
import SubmissionForm from '@/components/Register/Submit'
import RegistrationForm from '@/components/Register/Register'
import FAQForm from '@/components/Register/Question'
import Home from '@/components/Facelift/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/key-dates',
      component: Home
    },
    {
      path: '/announcements',
      component: Home
    },
    {
      path: '/committee',
      component: Home
    },
    {
      path: '/program',
      component: Home
    },
    {
      path: '/speakers',
      component: Home
    },
    {
      path: '/accomodation',
      component: Home
    },
    {
      path: '/registration',
      component: Home
    },
    {
      path: '/submission',
      component: Home
    },
    {
      path: '/venue',
      component: Home
    },
    {
      path: '/faq',
      component: Home
    },
    {
      path: '/contact',
      component: Home
    },
    {
      path: '/form/registration',
      component: RegistrationForm
    },
    {
      path: '/form/submission',
      component: SubmissionForm
    },
    {
      path: '/form/faq',
      component: FAQForm
    }
  ],
  mode: 'history'
})
