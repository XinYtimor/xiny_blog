<template>
  <div>
    <navBar class="header" :current="'column'"></navBar>
    <div class="column_wrapper">
      <background>
        <div class="column_label">
          <img src="../../assets/svg_icon/label.svg" alt="" />
          <p class="text">
            以下是<span>{{ column.columnTitle }}</span
            >相关的文章
          </p>
        </div>
        <div class="column_article">
          <commenList></commenList>
        </div>
      </background>
    </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  components: {
    navBar: () => import('../../component/navBar'),
    background: () => import('../../component/background.vue'),
    commenList: () => import('../../component/common_list.vue'),
  },
  data() {
    return {
      column: {
        columnTitle: '算法专题',
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.header {
  height: 6rem;
  position: relative;
}
.column_wrapper {
  height: 999rem;
  max-width: 115rem;
  margin: 3rem auto 3rem;
  .column_label {
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
