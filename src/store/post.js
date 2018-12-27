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
        let commitPost = () => {
            return commit('posts', {...state.posts, [post.id]: post}) 
        }
        return new Promise(resolve => resolve(post, commitPost))
    },
    loadPost: ({dispatch}, id) => {
        let updatePost = post => dispatch('updatePost', post)
            return query('getPost', {id}).then(updatePost)
    },
    savePost: ({dispatch}, post) => {
        let updatePost = post => dispatch('updatePost', post)
            return query('updatePost', post)
              .then(updatePost)
    }
}

export default {
state,
getters,
mutations,
actions
}