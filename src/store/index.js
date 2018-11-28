import Vue from 'vue'
import Vuex from 'vuex'
import company from './company'
import ui from './ui'
import restoration from './restoration'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {company, ui, restoration}
 })