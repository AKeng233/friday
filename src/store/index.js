import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  level: '第一周', //第几周
  itemNum: 1,     // 第几题 同时用于记录习题进行的程度 且用于切换习题的题目
  allTime: 0,     //记录总用时
  timer: null,    //记录定时器
  itemDetail: [{
    topic_name: '题目一',
    topic_answer: [{
      topic_answer_id: 1,
      answer_name: '答案是aaa'
    },{
      topic_answer_id: 2,
      answer_name: '答案是bbb'
    },{
      topic_answer_id: 3,
      answer_name: '不会就选c'
    },{
      topic_answer_id: 4,
      answer_name: '答案是ddd'
    }]
  },
  {
    topic_name: '题目二',
    topic_answer: [{
      topic_answer_id: 5,
      answer_name: 'a吗'
    },{
      topic_answer_id: 6,
      answer_name: '还是b呢'
    },{
      topic_answer_id: 7,
      answer_name: 'c吧'
    },{
      topic_answer_id: 8,
      answer_name: '不可能是d'
    }]
  },
  {
    topic_name: '题目三',
    topic_answer: [{
      topic_answer_id: 9,
      answer_name: '又是a'
    },{
      topic_answer_id: 10,
      answer_name: '不喜欢b'
    },{
      topic_answer_id: 11,
      answer_name: '那就c呗'
    },{
      topic_answer_id: 12,
      answer_name: 'd不行'
    }]
  },
  {
    topic_name: '题目四',
    topic_answer: [{
      topic_answer_id: 13,
      answer_name: 'a来啦'
    },{
      topic_answer_id: 14,
      answer_name: 'b也来啦'
    },{
      topic_answer_id: 15,
      answer_name: 'c位是我的'
    },{
      topic_answer_id: 16,
      answer_name: 'd不来了'
    }]
  },
  {
    topic_name: '题目五',
    topic_answer: [{
      topic_answer_id: 17,
      answer_name: '编不动a'
    },{
      topic_answer_id: 18,
      answer_name: '编不动b'
    },{
      topic_answer_id: 19,
      answer_name: 'c是可以的'
    },{
      topic_answer_id: 20,
      answer_name: 'd何其无辜'
    }]
  }],
  answerid:[] //记录用户选择的答案id
}
const store = new Vuex.Store({
  state,
  mutations,
  actions 
})

export default store