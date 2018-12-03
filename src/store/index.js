import Vue from 'vue'
import Vuex from 'vuex'
import company from './company'
import ui from './ui'
import db from '@/db'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {company, ui},
    state: {
        content: {
            test: 'test'
        },
        posts: []
    },
    mutations: {
        content: (state, v) => state.content = v,
        posts: (state, v) => state.posts = v
    },
    getters: {},
    actions: {

        init({dispatch}) {
            dispatch('ui/init')
        },
        initPosts({commit}) {
            db.query('getAllPosts').then(res => {
                  if(res.length) commit('posts', res.map(JSON.parse))
            })
        }
    }
 })