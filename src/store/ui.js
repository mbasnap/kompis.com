
import DataBase from '@/db'

const state = {
    company: {},
    mainMenu: [],
    lastNews: [],
    sideBarMenu: []
}
const getters = {

}
const mutations = {
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    lastNews: (state, v) => state.lastNews = v,
    sideBarMenu: (state, v) => state.sideBarMenu = v,
}
const actions = {
    init: (context) => {
        ['company', 'mainMenu', 'lastNews', 'sideBarMenu'].forEach(name => {
            let commit = (res) => {
                return context.commit(name, res)
            }
            new DataBase(name).get().then(commit)
        })
    } 
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}