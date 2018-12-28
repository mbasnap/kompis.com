import {query} from '@/db'
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
    
    updatePost: ({state, commit}, post) => Promise.resolve(commit('posts', {...state.posts, [post.id]: post})),
    loadPost: (context, id) => query('getPost', {id}),
    savePost: (context, post) => query('updatePost', post)
}

export default {
state,
getters,
mutations,
actions
}