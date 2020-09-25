import {NEXT_ITEM,CHOOSE_ITEM,REMBER_TIME,INITIALIZE_DATA} from './mutationstype'
export default {
  [NEXT_ITEM](state) {
    state.itemNum++
  },
  [CHOOSE_ITEM](state,payloadId) {
    state.answerid.push(payloadId)
  },
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime ++
    },1000)
  },
  [INITIALIZE_DATA](state) {
    state.itemNum = 1,
    state.allTime = 0,
    state.answerid = [],
    clearInterval(state.timer)
  }
}