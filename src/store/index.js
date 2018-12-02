import Vue from 'vue'
import Vuex from 'vuex'
import company from './company'
import ui from './ui'
import restoration from './restoration'
import db from '@/db'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {company, ui, restoration},
    state: {
        content: {
            test: 'test'
        }
    },
    mutations: {
        content: (state, v) => state.content = v
    },
    getters: {},
    actions: {
        updateContent({ state, commit }, name){
            db.getContent(name)
            .then(content => commit('content', {...state.content, ...content}))
        }
    }
 })