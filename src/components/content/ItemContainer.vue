<template>
  <div class="item-container">
    <div class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </div>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link class="start button_style" to="/item"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_logo item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <div class="item_title">{{itemDetail[itemNum-1].topic_name}}</div>
          <ul>
            <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="itemClick(index,item.topic_answer_id)">
              <span class="option_key" :class="{had_choose:chooseItem == index}">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next button_style" @click="nextClick" v-if="itemNum < itemDetail.length"></span>
      <span class="submit button_style" @click="nextClick" v-else></span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ItemContainer',
  data() {
    return {
      chooseItem: null,
      chooseId: null
    }
  },
  props: ['fatherComponent'],
  created() {
    if(this.fatherComponent == 'home') {
      this.$store.commit('INITIALIZE_DATA')
      // console.log(this.itemNum+'--'+this.answerid)
    }
    document.body.style.backgroundImage = 'url('+require('../../assets/img/1-1.jpg')+')'
    console.log(this.itemNum+'--'+this.answerid)
  },
  computed: mapState([
    'level','itemNum','itemDetail','answerid','timer'
  ]),
  methods: {
    chooseType(index) {
      switch (index) {
        case 0: 
          return 'A'
          break;
        case 1:
          return 'B'
          break;
        case 2: 
          return 'C'
          break;
        case 3:
          return 'D'
          break;
      }
    },
    nextClick() {
      // 下一题 题数要加一
      // 2需要记录选中的答案id 并添加至vuex数据里
      if(this.chooseItem !== null) {
        this.chooseItem = null
        // 先进性判断 避免跳转分数页面
        if(this.itemNum == this.itemDetail.length) {
          this.$router.replace('/score')
          clearInterval(this.timer)
        }
        this.$store.dispatch('addNum',this.chooseId)
      }else {
        alert("您还没有选择答案噢")
      }
    },
    itemClick(index,id) {
      // 选中答案需要做的操作有
      // 1选中的答案需要体现
      
      this.chooseItem = index  //记录选中的序列
      this.chooseId = id       //记录选中的答案id
      // this.$store.dispatch('addNum',id)
    }
  }
}
</script>

<style scoped>
  .item-container {
    position: relative;
  }

  .top_tips {
    position: absolute;
    top: 0;
    right: 20px;
    width: 100px;
    height: 150px;
    background: url('~assets/img/WechatIMG2.png') no-repeat;
    background-size: contain;
  }

  .num_tip {
    position: absolute;
    bottom: 20px;
    left: 18px;
    color: #a57c50;
    font-weight: 700;
  }

  .item_container_style {
    position: absolute;
    top: 130px;
    left: 30px;
    width: 80%;
    height: 270px;
  }

  .home_logo {
    background: url('~assets/img/1-2.png') no-repeat;
    background-size: 100% 100%;
  }

  .button_style {
    position: absolute;
    top: 400px;
    left: 140px;
    width: 100px;
    height: 50px;
  }

  .start {
    background: url('~assets/img/1-4.png') no-repeat;
    background-size: 100% 100%;
  }


  /* item */

  .item_logo {
    background: url('~assets/img/2-1.png') no-repeat;
    background-size: 100% 100%;
  }

  .item_list_container {
    position: absolute;
    left: 90px;
    top: 40px;
    line-height: 2em;
    color: #4dd4d4;
  }

  .item_list_container .option_key {
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 5px;
    padding: 0 3px;
    font-size: 12px;
    vertical-align: middle;
  }

  .next {
    background: url('~assets/img/2-2.png') no-repeat;
    background-size: 100% 100%;
  }

  .submit {
    background: url('~assets/img/3-1.png') no-repeat;
    background-size: 100% 100%;
  }

  .had_choose {
    background-color: #ffd400;
  }

</style>