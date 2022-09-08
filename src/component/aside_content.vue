<template>
  <div>
    <div class="article_content">
      <ul class="article_content_list">
        <li
          class="article_content_item"
          v-for="(item, index) in contentList"
          :key="index"
        >
          <router-link class="item" :to="`/${item.src}`"
            ><span class="item_title">{{ item.title }}</span>
            <span class="item_svg">
              <link-one theme="outline" size="14" fill="#fb6c28"
            /></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//侧边栏内容组件
import { linkOne } from '@icon-park/vue'
export default {
  components: {
    linkOne,
  },
  data() {
    return {
      contentList: [
        {
          title: '获取链表中倒数第K个节点',
          src: '',
        },
        {
          title: '动态转换图片格式',
          src: '',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.article_content {
  .article_content_list {
    padding: 0.5rem 1rem;
    .article_content_item {
      padding: 1rem 0;
      position: relative;
      .item {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.4rem;
        .item_title {
          position: relative;
          &:hover {
            color: #fb6c28;
          }
          &::after {
            box-sizing: border-box;
            position: absolute;
            content: '';
            background-color: #fb6c28;
            z-index: 2;
            left: 0;
            width: 0;
            height: 0.1rem;
            bottom: -0.2rem;
            transition: width 0.2s ease 0s;
          }
          &:hover::after {
            width: 100%;
          }
        }

        .item_svg {
          position: absolute;
          right: 1rem;
        }
      }
    }
  }
}
</style>
