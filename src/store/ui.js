
import query from '@/db'
const state = {
    mainMenu: []
}
const getters = {}
const mutations = {
    mainMenu: (state, v) => state.mainMenu = v
}
const actions = {
    init: ({commit}) => {
        query('getMenu').then(res =>commit('mainMenu', res)) 
    }  
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}