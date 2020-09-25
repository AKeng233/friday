import {NEXT_ITEM,CHOOSE_ITEM} from './mutationstype'

export default {
  addNum({state,commit},payload) {
    if(state.itemNum < state.itemDetail.length) {
      commit(NEXT_ITEM)
    }
    commit(CHOOSE_ITEM,payload)
  }
}