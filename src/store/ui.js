
import db from '@/db'
const state = {
    company: {},
    mainMenu: [],
    lastNews: [],
    posts: [],
    // phones: [],
    // mails: [],
}
const getters = {
    // company: ({company}, getters) => {
    //     // let res = {...state.company, ...getters.companyPhones, ...getters.companyMails}
        
    //     return company
    // },
    // companyPhones: (state) => state.phones.filter(x => x.user_id == 1),
    // companyMails: (state) => state.mails.filter(x => x.user_id == 1),
}
const mutations = {
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    posts: (state, v) => state.posts = v,
    lastNews: (state, v) => state.lastNews = v,
    // phones: (state, v) => state.phones = v,
    // mails: (state, v) => state.mails = v,
}
const actions = {
    init: ({commit}) => {
        db.get('company').then(res =>commit('company', res))
        db.get('mainMenu').then(res =>commit('mainMenu', res)) 
        db.get('posts').then(res =>commit('posts', res))
        db.get('lastNews').then(res =>commit('lastNews', res))
    }  
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}