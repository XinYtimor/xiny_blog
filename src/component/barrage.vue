<template>
  <div>
    <div class="ad2" v-for="(item, index) in barrageList" :key="index">
      <div class="content2">
        <div
          class="content2_inner"
          :class="{
            faster: index % 2 === 0,
            slow: index % 2 === 1,
            meduim: index % 3 === 0 + 1,
            fastest: index % 3 === 0 + 2,
            slowest: index % 3 === 0,
          }"
        >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    barrageList: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ad2 {
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.6rem;
  color: #353535;
  .content2 {
    flex: 1;
    overflow: hidden;
    .content2_inner {
      display: block;
      width: auto;
      white-space: nowrap;
      span {
        background-color: #e5dfeb;
        display: inline-block;
        padding: 1rem;
        border-radius: 8px;
      }
    }
  }
}

.slow {
  animation: marquee 12.3s linear infinite;
  span {
    background-color: #f4c8b4 !important;
  }
}
.slowest {
  animation: marquee 15.7s linear infinite;
  span {
    background-color: #737d95 !important;
  }
}
.meduim {
  animation: marquee 10.2s linear infinite;
  span {
    background-color: rgba(43, 95, 153, 0.4) !important;
    backdrop-filter: blur(6px); /*  元素后面区域添加模糊效果 */

    border-radius: 20px;
  }
}
.faster {
  animation: marquee 8.5s linear infinite;
  span {
    background-color: #93b1d7 !important;
  }
}
.fastest {
  animation: marquee 6.5s linear infinite;
  span {
    background-color: #d0dee7 !important;
    backdrop-filter: blur(6px); /*  元素后面区域添加模糊效果 */
  }
}
</style>
