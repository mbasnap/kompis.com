
import axios from 'axios'
const state = {
    header: "Обслуживание",
    content: '' 
}
const getters = {}
const mutations = {
    content: (state, v) => state.content = v
}
const actions = {
    update({commit}) {
        console.log('updated')
        axios.post('http://127.0.0.2:8648', JSON.stringify({
            name: 'Sergey'
        }))
          .then(function (response) {
              console.log(response)
            commit('content', response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}