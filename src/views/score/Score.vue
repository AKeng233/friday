<template>
  <div class="score">
    <div class="your_scores">
      <span class="score_num">{{score}}分！</span>
      <div class="score_tips">{{message}}</div>
    </div>
    <div class="share_button" @click="shareClick"></div>
    <div class="share_code">
      <span>关注葡萄之家，获取答案</span>
      <div share_img>
        <img src="../../assets/img/4-4.png" alt="">
      </div>
    </div>
    <div class="share_cover" v-show="coverShow" @click="shareClick">
      <div class="cover_img">
        <img src="../../assets/img/5-2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Score',
  data() {
    return {
      score: 0,
      message: '',
      correctAnswer: [3,7,11,15,19],
      coverShow: false
    }
  },
  computed: mapState(['answerid','allTime']),
  created() {
    document.body.style.backgroundImage = 'url('+require('../../assets/img/4-1.jpg')+')'
    // 计算得分
    console.log(this.answerid)
    console.log(this.allTime)
    let correctNum = this.answerid.filter((item,index) => {
      // console.log(item+'--'+this.correctAnswer[index])
      return item == this.correctAnswer[index]
    })
    // console.log(correctNum)
    if(this.answerid.length > 0){
      this.score = (correctNum.length / this.answerid.length * 100).toFixed(0)
    }

    if(this.score>=90) {
      this.message = '优秀'
    } else if (this.score >= 80) {
      this.message = '良好'
    }else if (this.score >= 70) {
      this.message = '一般'
    }else if (this.score >= 60) {
      this.message = '合格'
    }else {
      this.message= '整挺差'
    }
  },
  methods: {
    shareClick() {
      this.coverShow = !this.coverShow
    }
  }
}
</script>

<style scoped>
  .score {
    position: relative;
  }

  .your_scores {
    position: absolute;
    left: 60px;
    top: 20px;
    width: 240px;
    height: 230px;
    background: url('../../assets/img/4-2.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }

  .your_scores .score_num {
    position: absolute;
    left: 10%;
    top: 50%;
    width: 100%;
    font-family: Tahoma,Helvetica,Arial;
    font-size: 32px;
    font-weight: 800;
    color: #a51d31;
  }

  .your_scores .score_tips {
    position: absolute;
    width: 90%;
    left: 10%;
    top: 75%;
    font-size: 16px;
    color: #3e2415;
    line-height: 1.4em;
  }

  .share_button {
    position: absolute;
    left: 32%;
    top: 270px;
    width: 150px;
    height: 60px;
    background: url('../../assets/img/4-3.png') no-repeat;
    background-size: contain;
  }

  .share_code {
    position: absolute;
    left: 30%;
    top: 370px;
    width: 150px;
    height: 170%;
    text-align: center;
    font-size: 12px;
  }

  .share_code img {
    width: 90%;
    margin-top: 10px;
  }

  .share_cover {
    position: fixed;
    /* width: 100%;
    height: 100vh; */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('../../assets/img/5-1.png') no-repeat;
    background-size: contain;
    opacity: 0.9;
  }

  .share_cover .cover_img {
    position: absolute;
    width: 80%;
    top: 10px;
    right: 35px;
  }

  .share_cover img {
    width: 100%;
  }

</style>