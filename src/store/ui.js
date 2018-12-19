
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
    getPostByName: state => postName => {
        let byName = ({name}) => name === postName,
        res = state.posts.find(byName)
        console.log(res)
        return res
    }
}
const mutations = {
    company: (state, v) => state.company = v,
    mainMenu: (state, v) => state.mainMenu = v,
    posts: (state, v) => state.posts = v,
    updatePost: (state, post) => {
        let posts = state.posts,
        index = posts.findIndex(x => x.id = post.id)
        // console.log(index)
        state.posts = [...posts.fill(post, index, index++)];
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
    // addPost: ({commit, getters}, payload) => {
    //     let name = payload.name,
    //         post = getters.getPostByName(name)
            
    //     if(post) commit('updatePost', post)
    //     else commit('updatePost', payload)
    // },
    savePost: ({dispatch, commit}, payload) => {
        return db.update('post', payload).then(res => {
            // dispatch('addPost', res)
            commit('updatePost', res)
            // console.log(res)
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