<template>
  <div>
    <div class="header">
      <Header :current="'message'"></Header>
    </div>

    <div class="wrapper">
      <background>
        <div class="main">
          <publicTitle
            :titleName="articleInformation.title"
            :userInformation="articleInformation"
          ></publicTitle>

          <div class="message_wrapper">
            <Barrage :barrageList="barrageList"></Barrage>
          </div>
        </div>
      </background>
    </div>
    <div class="message">
      <background>
        <MessageBoard
          ref="messageBoard"
          class="message_board"
          :level="'messageBoard'"
          :current="'message'"
        ></MessageBoard>
      </background>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../../component/navBar.vue'),
    background: () => import('../../component/background.vue'),
    publicTitle: () => import('../../component/public_title.vue'),
    Barrage: () => import('../../component/barrage.vue'),
    MessageBoard: () => import('../../component/messageBoard.vue'),
  },
  data() {
    return {
      barrageList: [
        {
          text: '重要通知：掘金创作者服务中心上线，速度过来体验一下吧！222222',
        },
        {
          text: '重要通知：掘金创作者服务中心上线，速度过来体验一下吧！3333333',
        },
        {
          text: '重要通知：掘金创作者服务中心上线，速度过来体验一下吧！3333333',
        },
        {
          text: '重要通知：掘金创作者服务中心上线，速度过来体验一下吧！3333333',
        },
      ],
      articleInformation: {
        title: '留言板',
        headPortrait:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        username: '神奇的程序员',
        signature: '今天不想跑，所以才去跑',
      },
    }
  },
  created() {},
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
.wrapper {
  max-width: 115rem;

  margin: 3rem auto 3rem;
  .main {
    width: 100%;
    .message_wrapper {
      padding: 1rem 0;
      background: radial-gradient(
          circle at 60% 90%,
          rgb(212, 94, 212),
          transparent 60%
        ),
        radial-gradient(
          circle at 20px 20px,
          rgba(255, 255, 255, 0.8),
          transparent 25%
        ),
        #70f5ff;
    }
  }
}
.message {
  max-width: 115rem;
  margin: 3rem auto 3rem;
  padding-bottom: 2rem;
  .message_board {
    padding: 2rem;
  }
}
</style>
