<template>
  <div>
    <background>
      <section class="author_wrapper">
        <div class="author_top_img">
          <div ref="vantaRef" class="top_bg"></div>
        </div>

        <div class="gradient"></div>
        <div class="author_top_information">
          <div class="interval">
            <!-- <div class="headPortrait_border"></div> -->
            <el-avatar
              size="large"
              class="author_headPortrait"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </div>

          <div class="author_name interval">
            <router-link class="author_name_link" :to="`/about`">{{
              name
            }}</router-link>
          </div>
          <div class="author_signature interval">{{ signature }}</div>
        </div>
        <div class="author_count">
          <div
            class="author_count_item"
            v-for="(item, index) in countList"
            :key="index"
          >
            <p
              class="author_count_item_num"
              :class="{ border: index !== countList.length - 1 }"
            >
              {{ item.num }}
            </p>
            <p class="author_count_item_name">{{ item.name }}</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="author_other_platform">
          <router-link class="author_name_link" :to="`/about`"></router-link>
          <router-link class="author_name_link" :to="`/about`"></router-link>
        </div>
      </section>
    </background>
  </div>
</template>

<script>
//作者信息组件
import CLOUDS from 'vanta/src/vanta.clouds'
import * as THREE from 'three'
export default {
  data() {
    return {
      name: '神奇的程序员',
      signature: '今天不想跑，所以才去跑',
      countList: [
        {
          num: 17,
          name: '专栏数',
        },
        {
          num: 136,
          name: '文章数',
        },
        {
          num: 35,
          name: '评论数',
        },
      ],
    }
  },
  mounted() {
    window.THREE = THREE
    setTimeout(() => {
      this.vantaEffect = CLOUDS({
        el: this.$refs.vantaRef,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        zIndex: 9,
      })
    })
  },
  components: {
    background: () => import('./background.vue'),
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
}
</script>

<style lang="less" scoped>
@keyframes puff-out-center {
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
}
@media screen {
  @media (min-width: 1441px) and (max-width: 1920px) {
    .author_wrapper {
      width: 30rem;
    }
    .author_top_img {
      height: 15rem;
      overflow: hidden;
      .top_bg {
        /deep/.vanta-canvas {
          width: 30rem !important;
          height: 15rem !important;
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    .author_wrapper {
      width: 40rem;
    }
    .author_top_img {
      height: 18rem;
      overflow: hidden;
      .top_bg {
        /deep/.vanta-canvas {
          width: 40rem !important;
          height: 18rem !important;
        }
      }
    }
  }
}
.author_wrapper {
  background-color: #fff;
}
.gradient {
  content: '';
  position: relative;
  top: -2.2rem;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 3;
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
}

.author_top_information {
  margin-top: -10.8rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .author_headPortrait {
  }
  .author_name {
    .author_name_link {
      text-decoration: none;
      color: #9292f3;
      font-size: 1.5rem;
      font-family: 'PingFang SC';
      font-weight: 700;
    }
  }
  .author_signature {
    font-size: 1.4rem;
    color: #7b7b7b;
    font-weight: 700;
  }
}
.interval {
  padding-bottom: 1.5rem;
  z-index: 4;
  .headPortrait_border {
    width: 4rem;
    height: 4rem;
    border: #7b7b7b 0.3rem solid;
    border-radius: 50%;
    margin: 0 auto;
    &:hover {
      animation: puff-out-center 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }
  /deep/.el-avatar--large {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
  }
}
.author_count {
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-content: flex-start;
  .author_count_item {
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    font-family: '微软雅黑';
    width: 33.3%;

    .author_count_item_num {
      color: #333333;
      font-size: 2.2rem;
      padding-bottom: 0.4rem;
    }
    .author_count_item_name {
      color: #888;
      font-size: 1.4rem;
    }
  }
  .border {
    &::after {
      position: absolute;
      top: 1.2rem;
      right: 0;
      content: '';
      width: 0.1rem;
      height: 2.4rem;
      background-color: #888;
    }
  }
}
.line {
  width: 80%;
  margin: auto;
  background-color: #f2f6fc;
  height: 0.1rem;
}
.author_other_platform {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
