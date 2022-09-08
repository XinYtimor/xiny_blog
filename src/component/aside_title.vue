<template>
  <div>
    <div class="title">
      <div class="title_img" v-show="imgSrc">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="title_name">{{ title }}</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
//侧边栏标题组件
import { fire } from '@icon-park/vue'
export default {
  data() {
    return {}
  },
  components: {
    fire,
  },
  props: {
    title: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
  },
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  height: 4rem;
  .title_img {
    padding: 0 0 0 2rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .title_name {
    font-size: 1.6rem;
    padding-left: 1rem;
  }
}
.line {
  width: 100%;
  height: 0.1rem;
  background-color: rgba(141, 139, 139, 0.2);
}
</style>
