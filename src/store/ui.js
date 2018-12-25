
import {query} from '@/db'

const state = {
    company: {},
    mainMenu: [],
    lastNews: [],
    sideBarMenu: []
}
const getters = {
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
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    lastNews: (state, v) => state.lastNews = v,
    sideBarMenu: (state, v) => state.sideBarMenu = v,
}
const actions = {
    init: (context) => {
        // [
        //     'company',
        //     'mainMenu',
        //     'lastNews',
        //     'sideBarMenu'
        // ].forEach(name => {
        // let commit = res => {
        // return context.commit(name, res.data)
        // }
        // query('getAll').then(commit)
        // })
        let commit = name => ({data}) =>  context.commit(name, data)
        // query('getMainMenu').then(commit('mainMenu'))
        // query('getCompany').then(commit('company'))
        // query('getLastNews').then(commit('lastNews'))
    } 
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}