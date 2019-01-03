
import DataBase from '@/db'
// const menu = new DataBase('Menu',{groupe: 'main'})
// const newsDB = new DataBase('News')
const menuDB = new DataBase('Menu')

const state = {
    company: {},
    menu: {},
    news: {},
    sideBarMenu: []
}
const getters = {
    mainMenu: ({menu}) => Object.values(menu),
    lastNews: ({news}) => Object.values(news),
    company({company}) {
        return company || {}
    },
    companyPhones(state, {company}) {
        return   company.phones || []
    },
    companyMailes(state, {company}) {
        return company.mailes || []
    },
    companyAddress(state, {company}) {
        return company.address || {}
    }
}
const mutations = {
    menu: (state, v) => state.menu = v,
    news: (state, v) => state.news = v,
}
const actions = {
    init: ({commit}) => {
        // newsDB.query('getLast').then(res => commit('news', res))
        menuDB.get().then(res => commit('menu', res))
    } 
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}