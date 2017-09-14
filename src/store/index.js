import Vue from 'vue'
import Vuex from 'vuex'
import * as actionses from './actions'
import * as getters from './getters'
import Todos from './modules/todos'
import products from './modules/products'

Vue.use(Vuex)

const state = {
  demoScrollTop: 0,
  isLoading: false,
  direction: 'forward',
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}
// store.state.a // -> Todos 的状态
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Todos,
    products
  },
  state,
  getters,  // 可理解为 store 的计算属性
  actionses,
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    },
    // checkout ({commit, state}, products) {
    //   // 把当前购物车的物品备份起来
    //   const savedCartItems = [...state.cart.added]
    //   // 发出结账请求，然后乐观地清空购物车
    //   commit('')
    //   // 购物 API 接受一个成功回调和一个失败回调
    //   shop.buyProducts(
    //     products,
    //     // 成功操作
    //     () => commit(''),
    //     // 失败操作
    //     () => commit('', savedCartItems)
    //   )
    // },
    // promise 组合 action
    actionA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      })
    }
    // async await 组合 action
    // async actionC ({commit}) {
    //   commit('gotData', await getData())
    // },
    // async actionD ({ dispatch, commit }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  }
})
