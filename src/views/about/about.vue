<template>
  <div>
    <header class="header">
      <navBar :current="'about'"></navBar>
    </header>
    <div class="about_wrapper">
      <Background class="contnet">
        <div class="main">
          <PublicTitle
            :titleName="'关于作者'"
            :userInformation="articleInformation"
          />
        </div>
      </Background>
      <Background>
        <MessageBoard
          ref="messageBoard"
          class="message_board"
          :level="'messageBoard'"
          :current="'message'"
        ></MessageBoard>
      </Background>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleInformation: {
        headPortrait:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        username: '神奇的程序员',
        dateTime: '2022-06-18',
        commentNum: 99999,
        likeNum: 9999,
        readingNum: 9999,
        wordsNum: 9999,
      },
    }
  },
  components: {
    navBar: () => import('../../component/navBar'),
    Background: () => import('../../component/background'),
    PublicTitle: () => import('../../component/public_title'),
    MessageBoard: () => import('../../component/messageBoard'),
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.$refs.messageBoard.show()
      })
    }, 100)
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.header {
  height: 6rem;
  position: relative;
}

.about_wrapper {
  max-width: 115rem;
  position: relative;
  margin: 3rem auto 3rem;
  .main {
    height: 99rem;
  }
  .contnet {
    padding-bottom: 2rem;
  }
}
.message_board {
  padding: 2rem;
}
</style>
