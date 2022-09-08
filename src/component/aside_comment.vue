<template>
  <div>
    <div class="comment">
      <div
        class="comment_item"
        v-for="(item, index) in commentList"
        :key="index"
      >
        <div class="comment_user_message">
          <div class="comment_item_img">
            <el-avatar :size="35" :src="item.imgSrc"></el-avatar>
          </div>
          <div class="comment_item_user">
            <div class="user_name">{{ item.userName }}</div>
            <div class="user_date">{{ item.dateTime }}</div>
          </div>
        </div>
        <div class="comment_tooltip">
          <router-link class="tooltip_item" :to="`/`">
            <p>{{ item.commentContext }}</p>
          </router-link>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
//侧边栏评论最新回复组件
export default {
  data() {
    return {
      commentList: [
        {
          userName: 'XinY',
          dateTime: '2022-06-08',
          commentContext:
            'XinY的个人博客XinY的个人博客XinY的个人博客XinY的个人博客',
          imgSrc:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        },
        {
          userName: 'XinY1',
          dateTime: '2022-06-08',
          commentContext:
            'XinY的个人博客XinY的个人博客XinY的个人博客XinY的个人博客',
          imgSrc:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.comment {
  padding: 0.5rem 2rem;
  .comment_item {
    padding: 1rem 0;
    .comment_user_message {
      display: flex;
      align-items: center;
      .comment_item_img {
        padding-right: 1rem;
      }
      .comment_item_user {
        .user_name {
          font-size: 1.6rem;
          font-weight: 700;
          padding-bottom: 0.5rem;
        }
        .user_date {
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .comment_tooltip {
      width: 100%;
      position: relative;
      padding: 1rem 0.5rem;
      margin-top: 1rem;
      background-color: #d1d1d1;
      border-radius: 0.8rem;
      display: flex;
      &::before {
        content: '';
        width: 0;
        height: 0;
        border-bottom: 0.6rem solid #d1d1d1;
        border-left: 0.6rem solid transparent;
        border-right: 0.6rem solid transparent;
        position: absolute;
        left: 1.5rem;
        bottom: 100%;
      }
      .tooltip_item {
        align-items: center;
        text-decoration: none;
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.6);
        p {
          width: 25rem;
        }
      }
    }
    .divider {
      border: 0.1rem dashed #d1d1d1;
      margin-top: 1rem;
    }
  }
}
</style>
