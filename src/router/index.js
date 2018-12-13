import Vue from 'vue'
import Router from 'vue-router'
import EditPost from '@/components/EditPost'
import Contacts from '@/components/page/Contacts'
import Home from '@/components/page/Home'
import Restoration from '@/components/page/Restoration'

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
edit = {path: '*/edit', component: EditPost },
 restoration = {
  path: '/restoration',
  name: 'restoration',
  component: Restoration,
  meta: {
    breadcrumb: [
      {name: 'Восстановление отверстий'},
    ]
  },
  // children: [edit]
},
myRouter = new Router({
  // mode: 'history',
  routes: [
    home,
    {
      path: '/mending',
      name: 'mending',
      component: Restoration,
      meta: {
        breadcrumb: [
          {name: 'Главная', link: "/"},
          {name: 'Ремонт спецтехники'},
        ]
      }
    },
    edit,
    restoration,
    {
      path: '/spares',
      name: 'spares',
      component: Restoration,
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
   next()
 })
export default  myRouter
