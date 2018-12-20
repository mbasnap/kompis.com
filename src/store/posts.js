

const state = {
    posts: []

}
const getters = {
    index: ({posts}) => filter => posts.findIndex(filter),
    getPost: ({posts}) => filter => posts.find(filter),
    
}
const mutations = {
    set: (state, v) => state.posts = v,
    update: (state, {index, post}) => state.posts.splice(index, 1, post),
}
const actions = {
    
}

export default {
state,
getters,
mutations,
actions
}