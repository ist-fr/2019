import Vue from 'vue'
import Router from 'vue-router'
import Frist from '@/components/Frist/Frist'

// FRIST
import Accommodation from '@/components/Frist/Accommodation'
import Contact from '@/components/Frist/ContactUs'
import Committee from '@/components/Frist/Committee'
import Information from '@/components/Frist/Information'
import Registration from '@/components/Frist/Registration'
import Speaker from '@/components/Frist/Speaker'
import Program from '@/components/Frist/Program.vue'
import Submission from '@/components/Frist/Submission'
import Venue from '@/components/Frist/Venue'
import FristHome from '@/components/Frist/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      children: [
        {
          path: 'home',
          component: FristHome
        },
        {
          path: 'accommodation',
          component: Accommodation
        },
        {
          path: 'contactus',
          component: Contact
        },
        {
          path: 'committee',
          component: Committee
        },
        {
          path: 'information',
          component: Information
        },
        {
          path: 'accommodation',
          component: Accommodation
        },
        {
          path: 'registration',
          component: Registration
        },
        {
          path: 'speaker',
          component: Speaker
        },
        {
          path: 'program',
          component: Program
        },
        {
          path: 'submission',
          component: Submission
        },
        {
          path: 'venue',
          component: Venue
        }
      ]
    }
  ]
})
