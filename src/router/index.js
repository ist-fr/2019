import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Edit from '@/components/Edit'
import Activity from '@/components/Activity/Activity'
import People from '@/components/People/People'
import Frist from '@/components/Frist/Frist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/research',
      component: Edit
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/people',
      component: People
    },
    {
      path: '/frist',
      component: Frist
    }
  ]
})
