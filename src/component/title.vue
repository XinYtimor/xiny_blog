<template>
  <div>
    <div :class="{ title_wrapper: num }">
      <div class="title_name">
        {{ name }}
        <div class="title_more" v-if="more">
          <router-link class="navs" :to="`/${more.link}`"
            ><i :class="more.src"></i>{{ more.title }}</router-link
          >
        </div>
      </div>
      <div class="num" v-show="num">{{ num }}</div>
    </div>

    <div class="title_line"></div>
  </div>
</template>

<script>
//各专栏标题组件
export default {
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    more: {
      type: Object,
    },
    num: {
      type: Number,
    },
  },
}
</script>

<style lang="less" scoped>
.title_wrapper {
  display: flex;
  align-items: center;
}
.title_name {
  font-size: 1.5rem;
  height: 4rem;
  font-weight: 700;
  cursor: default;
  line-height: 4rem;
  color: #fb6c28;
  display: flex;
  align-items: center;
  padding-right: 1rem;
}
.title_more {
  margin-left: auto;

  .navs {
    text-decoration: none;
    color: #232323;
    &:hover {
      color: #fb6c28;
    }
  }
}
.num {
  width: 3rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  color: #fb6c28;
  font-size: 1.5rem;
  font-family: '微软雅黑';
  display: flex;
  align-items: center;
  justify-content: center;
}
.title_line {
  height: 0.1rem;
  width: 100%;
  margin: auto;
  background-color: #d1d1d1;
}
</style>
