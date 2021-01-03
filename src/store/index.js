import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: window.localStorage.getItem('SKtoken')
    },
    mutations: {
        login (state, data) {
            state.token = data
            window.localStorage.setItem('SKtoken', data)
        },
        logout (state) {
            state.token = null
            window.localStorage.removeItem('SKtoken')
        }
    }
})
