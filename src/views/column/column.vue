<template>
  <div>
    <navBar
      class="header"
      :current="'column'"
      @navigateState="navigateState"
    ></navBar>
    <div class="column_wrapper">
      <div class="main">
        <background>
          <div class="column_content">
            <titleName :name="'全部专栏'" :num="gridList.length"></titleName>
            <grid :gridList="gridList"></grid>
          </div>
        </background>
      </div>
      <Aside ref="aside"></Aside>
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
    Aside: () => import('../../component/aside.vue'),
    grid: () => import('../../component/grid.vue'),
    titleName: () => import('../../component/title'),
  },
  data() {
    return {
      gridList: [
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          num: 5,
          title: 'vue开发系列',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          num: 7,
          title: 'JS开发系列',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          num: 2,
          title: 'Python开发系列',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          num: 5,
          title: 'vue开发系列',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          num: 9,
          title: '算法系列',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    navigateState(e) {
      this.$refs.aside.navigateState(e)
    },
  },
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
  display: flex;
  margin: 3rem auto 3rem;
  .main {
    flex: 1;
    min-width: 0;
    height: 50rem;
    font-size: 5rem;
    .column_content {
      padding: 1rem;
    }
  }
}
</style>
