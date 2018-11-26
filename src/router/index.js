import Vue from 'vue'
import Router from 'vue-router'
import {Home, Service, Contacts} from '@/components/pages'

Vue.use(Router, Home)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb: [
          // {name: 'Home', link: '/'}
        ]
      }
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
      meta: {
        breadcrumb: [
          {name: 'Home', link: "/"},
          {name: 'Service'},
        ]
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: {
        breadcrumb: [
          {name: 'Home', link: "/"},
          {name: 'Service', link: "service"},
          {name: 'Contacts'},
        ]
      }
    }
    
  ]
})
