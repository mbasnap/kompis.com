

const state = {
        kompanyName: 'Kompis',
        mails: ['info@kompis.ua'],
        phones: [
            {type: 'Vodaphon', kod: '+38 (095)', number: '624 81 82'},
            {type: 'Kievstar', kod: '+38(067)', number: '624 81 82'},
        ]

}
const getters = {
    // getSettings: state => state.settings
}
const mutations = {
    // changeSettings: (state, payload) => state.settings = payload
}
const actions = {
    // saveSettings: ({commit}, payload) => commit('changeSettings', payload)
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}