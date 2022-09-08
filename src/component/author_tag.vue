<template>
  <div>
    <div class="wraper">
      <div class="head_portrait">
        <el-avatar
          size="large"
          class="author_headPortrait"
          :src="userInformation.headPortrait"
        ></el-avatar>
      </div>
      <div class="author_text">
        <div class="author_name">
          <div class="tag" v-show="identity === 'admin'">
            <el-tag effect="plain"> 博主 </el-tag>
          </div>
          <router-link class="author_name_link" :to="`/`">{{
            userInformation.username
          }}</router-link>
        </div>
        <div class="author_other" v-show="userInformation.signature">
          <p>{{ userInformation.signature }}</p>
        </div>
        <div
          class="author_other"
          v-show="userInformation.dateTime && !userInformation.commentNum"
        >
          <p>{{ userInformation.dateTime }}</p>
        </div>
        <div
          class="author_other"
          v-show="userInformation.dateTime && userInformation.commentNum"
        >
          <p>
            <span class="time_text">{{ userInformation.dateTime }}</span
            >/<span>{{ userInformation.commentNum }} 评论</span>/<span
              >{{ userInformation.likeNum }} 点赞</span
            >/<span>{{ userInformation.readingNum }} 阅读</span> /<span
              >{{ userInformation.wordsNum }} 字</span
            >
          </p>
        </div>
      </div>
      <div
        class="reply_btn"
        v-show="userInformation.dateTime && !userInformation.commentNum"
      >
        <el-button @click="reply">回复</el-button>
      </div>
      <div
        class="big_date"
        v-show="userInformation.dateTime && userInformation.commentNum"
      >
        {{ month }} / {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
//留言用户信息组件
export default {
  props: {
    userInformation: {
      type: Object,
    },
    identity: {
      type: String,
      default: 'user',
    },
  },
  data() {
    return {
      month: '',
      day: '',
    }
  },
  created() {
    if (this.userInformation.dateTime) {
      this.month = this.userInformation.dateTime.split('-')[1]
      this.day = this.userInformation.dateTime.split('-')[2]
    }
  },
  methods: {
    reply() {
      this.$emit('reply')
    },
  },
}
</script>

<style lang="less" scoped>
.wraper {
  display: flex;
  flex-direction: row;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5px;
    left: 0;
    width: 80px;
    height: 3px;
    border-radius: 1.5px;
    color: #fb6c28;
  }

  .head_portrait {
    flex-shrink: 0;
    margin-right: 0.5rem;
    .author_headPortrait {
    }
    /deep/.el-avatar--large {
      width: 4rem;
      height: 4rem;
      line-height: 4rem;
    }
  }
  .author_text {
    display: flex;
    flex-direction: column;
    height: 4rem;

    .author_name {
      display: flex;
      line-height: 2.2rem;
      align-items: center;
      .tag {
        height: 2.2rem;
        margin-right: 0.5rem;
        /deep/.el-tag {
          height: 2.2rem;
          line-height: 2.2rem;
          padding: 0 0.3rem;
        }
      }
      .author_name_link {
        text-decoration: none;
        color: #9292f3;
        font-size: 1.2rem;
        font-family: 'PingFang SC';
        font-weight: 700;
      }
    }
    .author_other {
      font-size: 1rem;
      color: #7b7b7b;
      line-height: 1.8rem;
      .time_text {
        padding-left: 0;
      }
      p {
        span {
          padding: 0 0.5rem;
        }
      }
    }
  }
  .reply_btn {
    margin-left: auto;
    opacity: 0;
    /deep/.el-button {
      background-color: #fb6c28;
      color: #fff;
      padding: 1.2rem 1.5rem;
      font-size: 1.6rem;
      border: 0;
      transform: scale(0.7);
      trasntition: all 0.2s;
      &:hover {
        transform: scale(0.8);
      }
    }
  }
  .big_date {
    margin-left: auto;
    font-size: 2.5rem;
    font-weight: 600;
    color: #606266;
  }
  &:hover {
    .reply_btn {
      opacity: 1;
    }
  }
}
</style>
