import Vue from 'vue'
import Vuex from 'vuex'
import { states, getters, mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: states,
    getters: getters,
    mutations: mutations
})