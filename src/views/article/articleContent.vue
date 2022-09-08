<template>
  <div>
    <header class="header">
      <nav-bar :current="'article'" @navigateState="navigateState"></nav-bar>
    </header>
    <div class="Breadcrumb">
      <img src="../../assets/svg_icon/home.svg" alt="" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><router-link
            class="navs"
            :to="{
              path: `/${articleInformation.columnUrl}`,
              query: { columnId: articleInformation.columnId },
            }"
            >{{ articleInformation.column }}</router-link
          >
        </el-breadcrumb-item>
        <el-breadcrumb-item>正文</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ArticleShare></ArticleShare>
    <div class="content_wrapper">
      <div class="main">
        <Background class="content">
          <publicTitle
            :titleName="articleInformation.title"
            :userInformation="articleInformation"
          ></publicTitle>
          <div class="article_content"></div>
        </Background>
        <Background>
          <div class="comment_title">
            <span>评论区</span>
          </div>
          <MessageBoard
            ref="messageBoard"
            class="message_board"
            :level="'article'"
            :current="'article'"
          ></MessageBoard>
        </Background>
      </div>
      <Aside ref="aside"></Aside>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navBar: () => import('../../component/navBar.vue'),
    Background: () => import('../../component/background.vue'),
    publicTitle: () => import('../../component/public_title.vue'),
    author: () => import('../../component/author.vue'),
    asideTitle: () => import('../../component/aside_title.vue'),
    asideContent: () => import('../../component/aside_content.vue'),
    asideComment: () => import('../../component/aside_comment.vue'),
    Aside: () => import('../../component/aside.vue'),
    ArticleShare: () => import('../../component/article_share.vue'),
    MessageBoard: () => import('../../component/messageBoard.vue'),
  },
  data() {
    return {
      articleInformation: {},
    }
  },
  created() {
    this.articleId = this.$route.query.articleId
    console.log(this.articleId)
    if (this.articleId === 'articleId1') {
      this.articleInformation = {
        title: '实现链表反转',
        column: '算法专题',
        columnUrl: 'columnContent',
        columnId: 'column1',
        headPortrait:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        username: '神奇的程序员',
        dateTime: '2022-06-18',
        commentNum: 99999,
        likeNum: 9999,
        readingNum: 9999,
        wordsNum: 9999,
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.$refs.messageBoard.show()
      })
    }, 100)
  },
  methods: {
    navigateState(e) {
      this.$refs.aside.navigateState(e)
    },
  },
}
</script>

<style lang="less">
.interval {
  padding-bottom: 1.5rem;
}
.navs {
  text-decoration: none;
}
.header {
  height: 6rem;
  position: relative;
}
.content {
  padding-bottom: 2rem;
}
.Breadcrumb {
  margin: 3rem auto 1rem;
  max-width: 115rem;
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.content_wrapper {
  max-width: 115rem;
  position: relative;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  .main {
    width: 100%;
    .article_content {
      height: 999rem;
    }
  }
  .aside_wrapper {
    padding-bottom: 1.5rem;
    margin-left: 3.5rem;
    padding-top: 1rem;
    .aside_new_reply {
      position: sticky;
      top: 2rem;
      transition: all 0.2s;
    }
    .nav_visible {
      top: 7.5rem;
    }
  }
}
.comment_title {
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 2.5rem;
    font-family: '微软雅黑';
    display: block;
    text-align: center;
    padding-top: 2rem;
    font-weight: 900;
  }
}
.message_board {
  padding: 2rem;
}
</style>
