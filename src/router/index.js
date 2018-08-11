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
      component: Frist,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'frist',
          component: FristHome
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'accommodation',
          component: Accommodation
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'contractus',
          component: Contact
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'committee',
          component: Committee
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'information',
          component: Information
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'accommodation',
          component: Accommodation
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'registration',
          component: Registration
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'speaker',
          component: Speaker
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'program',
          component: Program
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'submission',
          component: Submission
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'venue',
          component: Venue
        }
      ]
    }
  ]
})
