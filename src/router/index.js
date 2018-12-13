import Vue from 'vue'
import Router from 'vue-router'
import NamedPost from '@/components/NamedPost'
import Contacts from '@/components/Contacts'
import Home from '@/components/Home'

Vue.use(Router)
let home = {
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    breadcrumb: [
       {name: 'Главная'}
    ]
  }
},
edit = {path: 'edit', component: NamedPost },
 restoration = {
  path: '/restoration',
  name: 'restoration',
  component: NamedPost,
  meta: {
    breadcrumb: [
      {name: 'Восстановление отверстий'},
    ]
  },
  children: [edit]
},
myRouter = new Router({
  // mode: 'history',
  routes: [
    home,
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
    restoration,
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
 myRouter.beforeEach((to, from, next) => {
   console.log(to)
   next()
 })
export default  myRouter
