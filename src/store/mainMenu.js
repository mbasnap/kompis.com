import {query, reduceBy} from '@/db'

const state = {
    mainMenu: {}
}
const getters = {
    mainMenu({mainMenu}) {
        return Object.keys(mainMenu).map(key => mainMenu[key]);
    }
}
const mutations = {
    mainMenu: (state, v) => state.mainMenu = v,
    // update: (state, {name, v}) => state.menu = {... state.menu, [name]: v}
}
const actions = {
    getMenu: (context) => {
        let commit = res => context.commit('mainMenu', res),
            mainMenu = context.getters.mainMenu
        return mainMenu.length ? mainMenu
                 : query('getMainMenu').then(reduceBy('name')).then(commit)
    }, 
    // update: (context, {page, content}) => {
    //     let commit = res => context.commit('update', {name: page.name, res})
    //     query('updatePage', {page, content}).then(commit)       
    // }
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}