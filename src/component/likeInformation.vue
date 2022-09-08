<template>
  <div>
    <div class="wrapper">
      <div class="like inMiddle">
        <img class="like_img" src="../assets/svg_icon/喜欢.svg" alt="" />
        <span class="like_num">999</span>
      </div>
      <div class="comment inMiddle">
        <img class="comment_img" src="../assets/svg_icon/comments.svg" alt="" />
        <span class="comment_num">999</span>
      </div>
      <div class="view inMiddle">
        <div v-show="!showComment" @click="commentState">
          <span>查看评论</span>
        </div>
        <div v-show="showComment" @click="commentState">
          <span>收起评论</span>
        </div>
        <img class="view_img" src="../assets/svg_icon/down_arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
//文章喜欢及评论组件
export default {
  data() {
    return {
      showComment: false,
    }
  },
  methods: {
    commentState() {
      this.showComment = !this.showComment
      document.getElementsByClassName('view_img')[0].className = `view_img ${
        this.showComment ? 'rotate' : ''
      }`
      if (this.showComment) {
        this.$emit('showLeaveMessage')
      } else {
        this.$emit('hiddenLeaveMessage')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
  .view {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    img {
      width: 3rem;
      height: 3rem;
    }
    .rotate {
      transform: rotate(180deg);
    }
    .view_img {
      transition: all 0.2s;
    }
  }
  .inMiddle {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
}
</style>
