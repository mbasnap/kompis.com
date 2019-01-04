import DataBase from '@/db'
const {get, update} = new DataBase('Post')
const state = {
    posts: {}
}
const getters = {
    posts: (state) => state.posts,
    
}
const mutations = {
    updatePosts: (state, posts) => state.posts = {...state.posts, ...posts},
}
const actions = { 
    getPost: ({commit}, id) => get({id})
         .then(res => commit('updatePosts', res)),
    updatePost: ({commit}, {id, post}) => update({...post, id})
        .then(id => commit('updatePosts', {[id]: post}))
}

export default {
state,
getters,
mutations,
actions
}