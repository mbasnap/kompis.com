import {query} from '@/db'

const state = {
    posts: {}
}
const getters = {}
const mutations = {
    // posts: (state, v) => state.posts = v,
    post: (state, {id, v}) => state.posts = {...state.posts, [id]: v}
}
const actions = {
    getPost: (context, id) => {
        let commit = res => context.commit('post', {id, res})
        return state.posts[id] || query('getPost', {id}).then(commit)
    },
    // addPost: ({state, commit}, post) => {
    //     let posts = state.posts, id = post.id,
    //     index = posts.findIndex(post => post.id = id)
    //     index ? commit('update', {index, post}) : commit('add', post)
    // }
}

export default {
state,
getters,
mutations,
actions
}