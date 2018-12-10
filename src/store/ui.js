
import db from '@/db'
const state = {
    company: {},
    mainMenu: [],
    lastNews: [],
    posts: [],
    sideBarMenu: []
}
const getters = {}
const mutations = {
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    posts: (state, v) => state.posts = v,
    lastNews: (state, v) => state.lastNews = v,
    sideBarMenu: (state, v) => state.sideBarMenu = v,
}
const actions = {
    init: ({commit}) => {
        db.get('company').then(res =>commit('company', res))
        db.get('mainMenu').then(res =>commit('mainMenu', res)) 
        db.get('posts').then(res =>commit('posts', res))
        db.get('lastNews').then(res =>commit('lastNews', res))
        db.get('sideBarMenu').then(res =>commit('sideBarMenu', res))
    }  
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}