import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/fixtures/users.js'

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
    login ({ commit }, inputs) {
      return new Promise(() => {
        const matchedUser = users.find((user) => {
          return inputs.name === user.name && inputs.password === user.password
        })

        if (matchedUser) {
          commit('login')
          console.log(inputs.name + ' logged in')
        }
      })
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})

export default store
