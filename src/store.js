import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userHTML: [],
    userMD: []
  },
  mutations: {
    GET_USER_HTML: (state, htmlLoad) => {
      state.userHTML = []
      for (let i = 0; i < htmlLoad.length; i++) {
        state.userHTML.push(htmlLoad[i])
      }
    },
    GET_USER_MD: (state, mdLoad) => {
      state.userMD = []
      for (let i = 0; i < mdLoad.length; i++) {
        state.userMD.push(mdLoad[i])
      }
    }
  },
  actions: {

  }
})
