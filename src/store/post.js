import DataBase from '@/db'
const {get, update} = new DataBase('Post')
// import Exeption from '@/exeption'
// const {createEx} = new Exeption('store-post')
const state = {
    posts: {}
}
const getters = {
    posts: (state) => state.posts
}
const mutations = {
    posts: (state, v) => state.posts = v,
}
const actions = {   
    // updatePost: ({state, commit}, post) => Promise.resolve(commit('posts', {...state.posts, [post.id]: post})),
    getPost: ({state, commit}, id) => get({id})
         .then(res => commit('posts', {...state.posts, ...res})),
    updatePost: ({state, commit}, {id, post}) => update(id, post)
    // .then(res => commit('posts', {...state.posts, ...res}))
}

export default {
state,
getters,
mutations,
actions
}