<template>
  <div>
    <div class="header_above" :class="{ active: active }">
      <div class="header_container">
        <nav class="item" v-for="(item, index) in navList" :key="index">
          <router-link
            class="navs"
            :class="{ select: current === item.src }"
            :to="`/${item.src}`"
            >{{ item.title }}</router-link
          >
        </nav>
        <div class="search">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导航栏组件
export default {
  data() {
    return {
      state1: '',
      active: false,
      navList: [
        // {
        //   title: '首页',
        //   src: 'Home',
        // },
        // {
        //   title: '动态',
        //   src: 'dynamic',
        // },
        // {
        //   title: '文章',
        //   src: 'article',
        // },
        // {
        //   title: '专栏',
        //   src: 'column',
        // },
        // {
        //   title: '关于',
        //   src: 'about',
        // },
      ],
    }
  },
  props: {
    current: {
      type: String,
      default: '',
    },
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll) //监听页面滚动
    window.navList.sort(this.compare('index')) //导航栏排序
    this.navList = window.navList
    console.log(this.navList)
  },
  methods: {
    compare(property) {
      return function (a, b) {
        var value1 = a[property]
        var value2 = b[property]
        return value1 - value2
      }
    },
    handleSelect() {},
    handleScroll() {
      // 所有内容元素的 offsetTop
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop >= 200) {
        //隐藏
        this.active = true
      } else {
        //显示导航
        this.active = false
      }
      this.scrollEvent()
    },
    scrollEvent() {
      // 判断滚动方向
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      let scroll = scrollTop - this.initTop
      this.initTop = scrollTop
      let dir = 'down'
      dir = scroll <= 0 ? 'up' : 'down'
      if (dir === 'up') {
        //向上滚动
        this.active = false

        // console.log('向上滚动')
      } else {
        // 向下滚动
        // console.log('向下滚动')
      }
    },
  },
  watch: {
    active(newValue) {
      if (newValue === false) {
        this.$emit('navigateState', 'visible')
      } else {
        this.$emit('navigateState', 'hidden')
      }
    },
  },
}
</script>

<style lang="less" scoped>
@media screen {
  @media (min-width: 1441px) and (max-width: 1920px) {
    .header_above {
      height: 6rem;
      .header_container {
        height: 6rem;
        max-width: 115rem;
        .item {
          height: 6rem;
          line-height: 6rem;
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    .header_above {
      height: 7rem;
      .header_container {
        height: 7rem;
        max-width: 145rem;
        .item {
          height: 7rem;
          line-height: 7rem;
        }
      }
    }
  }
}
.search {
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  /deep/.el-input__inner {
    border-radius: 2.5rem;
    background-color: #ebeef5;
    height: 3.5rem;
  }
  /deep/.el-input__icon {
    line-height: 4rem;
    width: 2.5rem;
  }
}

.header_above {
  position: fixed;
  width: 100%;

  top: 0;
  background: #fff;
  box-shadow: 0 0.2rem 1rem 0 rgb(0 0 0 / 20%);
  z-index: 6;
  transform: translateZ(0);
  transition: all 0.2s;
  .header_container {
    display: flex;

    align-items: center;
    margin: 0 auto;
    z-index: 9;
    .item {
      cursor: pointer;
      position: relative;

      font-size: 1.5rem;
      padding: 0 0.8rem;
      margin-right: 1rem;
      user-select: none;
      white-space: nowrap;
      transition: color 0.5s;
      .navs {
        text-decoration: none;
        color: #232323;
        &:hover {
          color: #fb6c28;
        }
        &::after {
          box-sizing: border-box;
          position: absolute;
          transform: scaleX(0.15);
          height: 0.6rem;
          content: '';
          opacity: 0;
          border-bottom: 0.3rem solid #fb6c28;
          border-radius: 0.6rem 0.6rem 0 0;
          z-index: 2;
          margin: auto;
          left: -50%;
          right: -50%;
          bottom: 0;
          transition: width 0.2s ease 0s, opacity 0.5s ease 0s, transform 0.5s;
        }
        &:hover::after {
          transform: scaleX(0.3);
          opacity: 0.4;
        }
      }
      .select {
        color: #fb6c28;
        &::after {
          opacity: 1;
          transform: scaleX(0.8);
          width: 100%;
        }
      }
    }
  }
}
.active {
  transform: translate3d(0, -100%, 0);
}
</style>
