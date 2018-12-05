
import db from '@/db'
const state = {
    company: {},
    mainMenu: [],
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
    // phones: (state, v) => state.phones = v,
    // mails: (state, v) => state.mails = v,
}
const actions = {
    init: ({commit}) => {
        db.get('mainMenu').then(res =>commit('mainMenu', res)) 
        db.get('posts').then(res =>commit('posts', res))
        db.get('users', {id: 1}).then(res =>commit('company', res[0])) 
        // db.get('phones').then(res =>commit('phones', res))
        // db.get('mails').then(res =>commit('mails', res))
    }  
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}