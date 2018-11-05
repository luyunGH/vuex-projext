import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import All from '@/components/All'
import Active from '@/components/Active'
import Completed from '@/components/Completed'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/All',
      name: 'All',
      component: All
    },
    {
      path: '/Active',
      name: 'Active',
      component: Active
    },
    {
      path: '/Completed',
      name: 'Completed',
      component: Completed
    }
  ]
})
