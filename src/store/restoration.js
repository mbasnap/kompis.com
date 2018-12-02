
import db from '@/db'
const state = {
    content: '' 
}
const getters = {}
const mutations = {
    content: (state, v) => state.content = v
}
const actions = {
    update({commit}) {
        db('select', {from: 'users', where: {id: 5}}).then(response => {
            console.log(response);
            commit('content', response.data.city)
        })
        .catch(error => console.log(error))
    }
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}