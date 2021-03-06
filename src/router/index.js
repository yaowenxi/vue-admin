import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Index from '@/components/page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
