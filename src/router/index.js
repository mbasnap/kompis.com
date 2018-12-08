import Vue from 'vue'
import Router from 'vue-router'
import NamedPost from '@/components/NamedPost'
import Contacts from '@/components/Contacts'
import Home from '@/components/Home'

Vue.use(Router)

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
      component: NamedPost,
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
      component: NamedPost,
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
      component: NamedPost,
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
