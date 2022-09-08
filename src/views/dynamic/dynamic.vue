<template>
  <div>
    <header class="header">
      <navBar :current="'dynamic'" @navigateState="navigateState"></navBar>
    </header>
    <div class="dynamic_wrapper">
      <div class="main">
        <background>
          <div class="main_content">
            <div class="dynamic_title">
              <h1>全部动态</h1>
            </div>
            <div class="dynamic_content">
              <author-tag :userInformation="userInformation"></author-tag>
              <div class="content_timeLine">
                <el-timeline>
                  <el-timeline-item
                    timestamp="2018/4/12 12:12:12"
                    placement="top"
                    icon="el-icon-s-promotion"
                  >
                    <el-card>
                      <div class="timeLine_content">
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <el-image
                          style="width: 100px; height: 100px"
                          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                          :preview-src-list="srcList"
                        >
                        </el-image>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                        <h4>更新 Github 模板</h4>
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                      </div>
                      <likeInfo
                        @showLeaveMessage="showLeaveMessage"
                        @hiddenLeaveMessage="hiddenLeaveMessage"
                      ></likeInfo>
                      <messageBoard ref="messageBoard"></messageBoard>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="2018/4/3"
                    placement="top"
                    icon="el-icon-s-promotion"
                  >
                    <el-card>
                      <h4>更新 Github 模板</h4>
                      <p>王小虎 提交于 2018/4/3 20:46</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="2018/4/2"
                    placement="top"
                    icon="el-icon-s-promotion"
                  >
                    <el-card>
                      <h4>更新 Github 模板</h4>
                      <p>王小虎 提交于 2018/4/2 20:46</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </div>
        </background>
      </div>
      <Aside ref="aside"></Aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navVisible: true,
      userInformation: {
        headPortrait:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        username: '神奇的程序员',
        signature: '今天不想跑，所以才去跑',
      },
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      ],
    }
  },
  components: {
    navBar: () => import('../../component/navBar'),
    background: () => import('../../component/background'),
    authorTag: () => import('../../component/author_tag'),
    author: () => import('../../component/author.vue'),
    likeInfo: () => import('../../component/likeInformation.vue'),
    messageBoard: () => import('../../component/messageBoard.vue'),
    Aside: () => import('../../component/aside.vue'),
  },
  mounted() {},
  methods: {
    showLeaveMessage() {
      this.$nextTick(() => {
        this.$refs.messageBoard.show()
      })
    },
    hiddenLeaveMessage() {
      this.$nextTick(() => {
        this.$refs.messageBoard.hidden()
      })
    },
    navigateState(e) {
      this.$refs.aside.navigateState(e)
    },
  },
}
</script>
<style lang="less" scoped>
.interval {
  padding-bottom: 1.5rem;
}
.header {
  height: 6rem;
  position: relative;
}
.dynamic_wrapper {
  max-width: 115rem;
  height: 999rem;
  display: flex;
  flex-direction: row;
  margin: 3rem auto 3rem;
  padding: 0 1.5rem;

  .main {
    width: 100%;
    height: 50rem;
    .main_content {
      padding: 1rem;
      .dynamic_title {
        h1 {
          font-size: 2.5rem;
          text-align: center;
          padding: 5rem 0;
          color: #333;
          font-family: 'Microsoft YaHei';
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        }
      }
      .dynamic_content {
        padding: 1rem;

        /deep/.el-timeline-item__content {
          transition: all 0.2s;

          &:hover {
            border-radius: 0px 1rem 1rem 0px;
            transform: translate3d(0, -0.2rem, 0);
            box-shadow: 0.1rem 0.2rem 0.2rem hsl(0deg 0% 0% /0.075),
              0.2rem 0.4rem 0.4rem hsl(0deg 0% 0% /0.075),
              0.3rem 0.6rem 0.6rem hsl(0deg 0% 0% /0.075);
          }
        }
        .content_timeLine {
          padding: 1rem;
          /deep/.el-timeline-item__icon {
            color: rgba(0, 0, 0, 0.5);
            font-size: 2rem;
          }
          /deep/.el-timeline-item__node {
            background-color: transparent;
          }
          /deep/.el-timeline-item {
            padding-bottom: 2rem;
          }
          /deep/.el-timeline-item__tail {
            border-left: 0.1rem dashed rgba(0, 0, 0, 0.3);
            top: 1rem;
            bottom: 0;
            margin: auto;
            height: 85%;
          }
          /deep/ .el-card__body {
            padding: 2rem;
          }
          /deep/.el-card {
            border-radius: 0px 1rem 1rem 0px;
          }
          .timeLine_content {
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.03);
          }
        }
      }
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
</style>
