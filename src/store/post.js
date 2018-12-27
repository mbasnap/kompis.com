import {query} from '@/db'

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
    
    updatePost: ({state, commit}, post) => {
        let id = post.id, commitPost = () => {
            return commit('posts', {...state.posts, [id]: post}) 
        }
        if (id) return new Promise(resolve => resolve(post, commitPost))
    },
    loadPost: (context, id) => query('getPost', {id}),
    savePost: (context, post) => query('updatePost', post)
}

export default {
state,
getters,
mutations,
actions
}