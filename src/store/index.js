import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/fixtures/users.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    currentUser: {}
  },
  mutations: {
    login (state, user) {
      state.isLoggedIn = true
      state.currentUser = user
    }
  },
  actions: {
    login ({ commit }, inputs) {
      return new Promise((resolve, reject) => {
        const matchedUser = users.find((user) => {
          return inputs.name === user.name && inputs.password === user.password
        })

        if (matchedUser) {
          commit('login', matchedUser)
          resolve(matchedUser)
        } else {
          reject('name or password is or both are invalid')
        }
      })
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})

export default store
