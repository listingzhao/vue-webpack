import * as types from '../mutation-types'

export default {
  state: { todos: [] },

  getters: {
    [types.DONE_COUNT] (state) {
      // ..
    },
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  },

  actions: {
    [types.FETCH_ALL] (content, payload) {
      // ..
    },
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  },

  mutations: {
    [types.TOGGLE_DONE] (state, payload) {
      // ..
    }
  }
}
