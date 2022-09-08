<template>
  <div class="public_title_wrapper">
    <div class="title">
      <h1>{{ titleName }}</h1>
    </div>
    <div class="author">
      <authorTag :userInformation="userInformation"></authorTag>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  components: {
    authorTag: () => import('../component/author_tag.vue'),
  },
  props: {
    titleName: {
      type: String,
      default: '',
    },
    userInformation: {
      type: Object,
      default: {
        headPortrait:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        username: '神奇的程序员',
        signature: '今天不想跑，所以才去跑',
      },
    },
  },
}
</script>

<style lang="less" scoped>
.public_title_wrapper {
  .title {
    h1 {
      font-size: 2.5rem;
      text-align: center;
      padding: 5rem 0;
      color: #333;
      font-family: 'Microsoft YaHei';
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
  .author {
    padding: 1rem 2rem;
  }
  .line {
    width: 95%;
    margin: auto;
    border-bottom: 1px solid #d1d1d1;
  }
}
</style>
