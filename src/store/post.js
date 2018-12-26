import {query} from '@/db'

const state = {
    posts: {}
}
const getters = {
    posts: (state) => state.posts
}
const mutations = {
    // posts: (state, v) => state.posts = v,
    post: (state, {id, post}) => {
        // console.log({...state.posts, [id]: v})
        state.posts = {...state.posts, [id]: post}
    }
}
const actions = {
    getPost: (context, {id}) => {
        let commit = post => context.commit('post', {id, post})
        query('getPost', {id}).then(commit)
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