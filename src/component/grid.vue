<template>
  <div>
    <div class="grid">
      <div class="grid_item" v-for="(item, index) in gridList" :key="index">
        <div class="num" v-show="item.num">{{ item.num }}篇</div>
        <figure :class="{ column: item.title }">
          <img :src="item.src" alt="" />
          <figcaption>
            <h2>Vue开发</h2>
            <p>Vue开发系列</p>
          </figcaption>
        </figure>
        <div class="grid_title" v-show="item.title">Vue开发系列</div>
      </div>
    </div>
  </div>
</template>

<script>
//宫格组件
export default {
  data() {
    return {}
  },
  props: {
    gridList: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="less" scoped>
.column {
  border-radius: 4px 4px 0px 0px !important;
}
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  .grid_item {
    width: 33.3%;
    border-radius: 0.8rem;
    height: 19rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    .num {
      font-size: 1.2rem;
      color: #fff;
      padding: 0.4rem 0.6rem;
      border-radius: 8px;
      background: linear-gradient(90deg, #3ca5f6 0, #a86af9 100%);
      position: absolute;
      z-index: 1;
      top: 1.5rem;
      right: 1.5rem;
    }
    .grid_title {
      background-color: #f2f6fc;
      height: 3rem;
      width: 100%;
      color: #909399;
      font-family: '宋体';
      font-size: 1.2rem;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
    figure {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      margin: auto;
      position: relative;
      font-family: 'Raleway', Arial, sans-serif;
      overflow: hidden;
      background: linear-gradient(-45deg, #34495e 0%, #cc6055 100%);
      cursor: pointer;
    }

    figcaption {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 2rem;
      box-sizing: border-box;
      color: #fff;
      text-align: center;
    }

    figure h2 {
      margin: 0;
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      transform: scale(0.8);
      transition: transform 0.35s;
    }

    figure h2 span {
      font-weight: 600;
    }

    figure p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 3rem;
      margin: 1rem auto;
      padding: 2rem;
      border: 0.2rem solid #fff;
      font-size: 1.8rem;
      transform: scale(0.8);
      opacity: 0;
      width: 15rem;
      text-align: center;
      transition: opacity 0.35s, transform 0.35s, bottom 0.35s;
    }

    figure img {
      opacity: 0.8;
      transition: opacity 0.35s, transform 0.35s;
    }

    figure:hover img {
      opacity: 0.1;
      transform: scale(1.5);
    }

    figure:hover h2 {
      transform: scale(1);
    }

    figure:hover p {
      transform: scale(1);
      bottom: 0;
      opacity: 1;
      text-align: center;
    }
  }
}
</style>
