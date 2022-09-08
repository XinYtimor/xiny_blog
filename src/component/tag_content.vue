<template>
  <div>
    <div class="classify_wrapper">
      <ul class="classify">
        <li class="classify_item" v-for="(item, index) in tagList" :key="index">
          <router-link
            class="navs"
            :to="{
              path: `/${item.url}`,
              query: { searchId: item.id },
            }"
          >
            <div class="classify_tag">
              <span class="classify_name">{{ item.name }}</span
              ><span class="classify_num">{{ item.number }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagList: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="less" scoped>
.navs {
  text-decoration: none;
}
.classify_wrapper {
  padding-bottom: 1rem;
  .classify {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 1rem;
    .classify_item {
      padding: 0.5rem;
      transform: scale(0.9);
      transition: all 0.2s;
      .classify_tag {
        background-color: #ecf5ff;
        border-color: #d9ecff;
        height: 3.2rem;
        padding: 0 1rem;
        line-height: 3rem;
        font-size: 1.2rem;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        display: flex;
        .classify_name {
          max-width: 15rem;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #409eff;
          display: inline-block;
        }
        .classify_num {
          color: #fb6c28;
          padding-left: 0.8rem;
        }
      }
      &:hover {
        transform: scale(1);
      }
    }
  }
}
</style>
