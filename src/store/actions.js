import * as types from './mutation-types'

export const addToCard = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.FETCH_ALL, {
      id: product.id
    })
  }
}
