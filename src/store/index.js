import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login (state) {
      state.isLoggedIn = true
    }
  },
  actions: {
    login ({ commit }) {
      return new Promise(() => {
        console.log("logged-in")
        commit('login')
      })
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})

export default store
