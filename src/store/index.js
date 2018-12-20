import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import posts from './posts'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {ui, posts}
 })