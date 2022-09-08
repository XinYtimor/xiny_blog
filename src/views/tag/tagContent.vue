<template>
  <div>
    <div class="header">
      <Header :current="'tag'" @navigateState="navigateState"></Header>
    </div>
    <div class="tag_wrapper">
      <background>
        <div class="tag_label">
          <img src="../../assets/svg_icon/label.svg" alt="" />
          <p class="text">
            以下是<span>{{ tag.tagTitle }}</span
            >相关的文章
          </p>
        </div>
        <div class="tag_article">
          <CommonList></CommonList>
        </div>
      </background>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../../component/navBar.vue'),
    background: () => import('../../component/background.vue'),
    CommonList: () => import('../../component/common_list.vue'),
  },
  data() {
    return {
      tag: {
        tagTitle: '算法专题',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 6rem;
  position: relative;
}
.tag_wrapper {
  height: 999rem;
  max-width: 115rem;
  margin: 3rem auto 3rem;
  .tag_label {
    padding: 1rem;
    display: flex;
    align-items: center;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    .text {
      line-height: 2rem;
      span {
        color: #fb6c28;
        padding: 0 0.5rem;
      }
    }
  }
}
</style>
