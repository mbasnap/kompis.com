import Vue from 'vue'
import Router from 'vue-router'
import {Home, Mending, Restoration, Spares, Contacts} from '@/components/pages'

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
           {name: 'Главная'}
        ]
      }
    },
    {
      path: '/mending',
      name: 'mending',
      component: Mending,
      meta: {
        breadcrumb: [
          {name: 'Главная', link: "/"},
          {name: 'Ремонт спецтехники'},
        ]
      }
    },
    {
      path: '/restoration',
      name: 'restoration',
      component: Restoration,
      meta: {
        breadcrumb: [
          {name: 'Главная', link: "/"},
          {name: 'Восстановление отверстий'},
        ]
      }
    },
    {
      path: '/spares',
      name: 'spares',
      component: Spares,
      meta: {
        breadcrumb: [
          {name: 'Главная', link: "/"},
          {name: 'Запчасти'},
        ]
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: {
        breadcrumb: [
          {name: 'Главная', link: "/"},
          {name: 'Контакты'},
        ]
      }
    }
    
  ]
})
