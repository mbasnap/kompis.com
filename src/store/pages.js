import DataBase from '@/db'
const db = new DataBase('Pages')

const state = {
    pages: {},
    loading: false

}
const getters = {
    page: state => name => state.pages[name]
}
const mutations = {
    updatePages: (state, v) => state.pages = v
}
const actions = {
    getPage: ({state, commit}, name)  =>{
        let updatePages = page => commit('updatePages', {...state.pages, page})
        db.get({page: name}).then(updatePages)

    }
}

export default {
state,
getters,
mutations,
actions
}