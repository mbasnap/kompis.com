
import db from '@/db'
// class Post{
//     constructor(payload) {
//         this.id = payload.id
//         this.name = payload.name
//         this.content = payload.content
//     }
// }
const state = {
    company: {},
    mainMenu: [],
    lastNews: [],
    posts: [],
    sideBarMenu: []
}
const getters = {
    postIndex: state => filter => state.posts.findIndex(filter),
    post: state => filter => state.posts.find(filter)
}
const mutations = {
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    posts: (state, v) => state.posts = v,
    addPost: (state, {index, post}) => {
        let posts = state.posts.fill(post, index, index++)
        console.log(posts)
        state.posts = posts
    },
    lastNews: (state, v) => state.lastNews = v,
    sideBarMenu: (state, v) => state.sideBarMenu = v,
}
const actions = {
    init: ({commit}) => {
        db.get('company').then(res =>commit('company', res))
        db.get('mainMenu').then(res =>commit('mainMenu', res)) 
        db.get('post').then(res =>commit('posts', res))
        db.get('lastNews').then(res =>commit('lastNews', res))
        db.get('sideBarMenu').then(res =>commit('sideBarMenu', res))
    } ,
    savePost: ({getters, commit}, payload) => {
        return db.update('post', payload).then(res => {
            let index = getters.postIndex(post => post.id === res.id)
            commit('addPost', {index, post: res})
        })
    } 
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}