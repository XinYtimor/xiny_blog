<template>
  <div class="wrapper">
    <el-badge :value="likeNum" :max="99" class="item">
      <div
        @click="toLike"
        class="circular"
        @mousemove="mouseIn('like')"
        @mouseout="mouseOut('like')"
      >
        <img class="animate__animated" id="img" :src="giveALike" alt="" />
      </div>
    </el-badge>

    <el-badge :value="commentNum" :max="99" class="item">
      <div
        @click="tocomment"
        class="circular"
        @mousemove="mouseIn('comment')"
        @mouseout="mouseOut('comment')"
      >
        <img
          class="animate__animated"
          id="imgByComment"
          :src="commentImg"
          alt=""
        />
      </div>
    </el-badge>

    <el-badge :value="commentNum" :max="99" class="item">
      <div
        @click="tocomment"
        class="circular"
        @mousemove="mouseIn('share')"
        @mouseout="mouseOut('share')"
      >
        <img class="animate__animated" id="imgByShare" :src="shareImg" alt="" />
      </div>
    </el-badge>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      giveALike: require('../assets/svg_icon/点赞.svg'),
      commentImg: require('../assets/svg_icon/评论.svg'),
      shareImg: require('../assets/svg_icon/分享.svg'),
      likeNum: 1,
      commentNum: 1,
    }
  },
  methods: {
    mouseIn(type) {
      if (type === 'like') {
        document.getElementById('img').classList.add('animate__swing')
      } else if (type === 'comment') {
        document.getElementById('imgByComment').classList.add('animate__swing')
      } else if (type === 'share') {
        document.getElementById('imgByShare').classList.add('animate__swing')
      }
    },
    mouseOut(type) {
      if (type === 'like') {
        document.getElementById('img').classList.remove('animate__swing')
      } else if (type === 'comment') {
        document
          .getElementById('imgByComment')
          .classList.remove('animate__swing')
      } else if (type === 'share') {
        document.getElementById('imgByShare').classList.remove('animate__swing')
      }
    },
    toLike() {
      console.log('===')
      this.$nextTick(() => {
        this.giveALike = require('../assets/svg_icon/喜欢.svg')
        this.likeNum++
      })
    },
    tocomment() {},
  },
}
</script>

<style lang="less" scoped>
/deep/.el-badge__content {
  border: 0;
}
.wrapper {
  position: fixed;
  top: 20rem;
  left: 30rem;
  .item {
    display: block;
  }
}
.circular {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px 1px 1px hsl(0deg 0% 0% /0.075),
    2px 2px 2px hsl(0deg 0% 0% /0.075), 3px 3px 3px hsl(0deg 0% 0% /0.075);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /*   background-image: url('../assets/svg_icon/点赞.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat; */
  img {
    width: 4.5rem;
    height: 4.5rem;
  }

  /*   &:hover {
    background-image: url('../assets/svg_icon/喜欢.svg');
  } */
}
</style>
