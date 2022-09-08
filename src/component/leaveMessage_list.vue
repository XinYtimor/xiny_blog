<template>
  <div>
    <div
      class="messageList_wrapper"
      v-for="(item, parentIndex) in messageList"
      :key="parentIndex"
    >
      <authorTag
        class="user_information"
        :userInformation="item.userInformation"
        @reply="firstReply(item.id, item.userInformation.username)"
      ></authorTag>
      <div class="content">
        {{ item.userInformation.content }}
      </div>
      <div class="leaveMessageTool">
        <write-message-tool
          v-if="totalId === item.id"
          :showLeaveMessageTool="showLeaveMessageTool"
          :type="'reply'"
          :index="1"
          :level="level[0]"
          :label="replyNmae"
          @cancelReply="cancelReply"
        ></write-message-tool>
      </div>
      <div
        class="reply"
        v-show="item.replyList"
        v-for="(replyItem, index) in item.replyList"
        :key="index"
      >
        <authorTag
          class="user_information"
          :userInformation="replyItem.replyInformation"
          :identity="replyItem.replyInformation.identity"
          @reply="
            reply(
              index,
              item.userInformation.parentId,
              replyItem.replyInformation.username
            )
          "
        ></authorTag>
        <div class="reply_content content">
          <span class="reply_name"
            >@{{ replyItem.replyInformation.replyName }}</span
          >
          :
          <span>{{ replyItem.replyContent }}</span>
        </div>
        <div class="leaveMessageTool">
          <!-- 如果toolparent等于item.id，就说明此时留言组件在id为item.id的留言列表内 -->
          <write-message-tool
            ref="writeMessageTool"
            v-if="
              index === showLeaveMessageToolIndex &&
              toolParent === item.userInformation.parentId
            "
            :showLeaveMessageTool="showLeaveMessageTool"
            :type="'reply'"
            :index="1"
            :level="level[1]"
            :label="replyNmae"
            @cancelReply="cancelReply"
          ></write-message-tool>
        </div>
      </div>

      <div class="line"></div>
    </div>
  </div>
</template>

<script>
//留言列表组件
export default {
  data() {
    return {
      level: [],
      username: '',
      replyNmae: '',
      totalId: null,
      toolParent: null,
      showLeaveMessageTool: false,
      showLeaveMessageToolIndex: null,
      messageList: [
        {
          id: 1,
          userInformation: {
            parentId: 1,
            headPortrait: require('../assets/head/headPortrait_3.jpg'),
            username: '用户1',
            dateTime: '发布于2022-06-14 12:00:00',
            content: '这是一条留言',
          },
          replyList: [
            {
              replyInformation: {
                headPortrait:
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                username: '神奇的程序员',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'admin',
                replyName: '用户1',
              },
              replyContent: '这是一条回复',
            },
            {
              replyInformation: {
                headPortrait: require('../assets/head/headPortrait_3.jpg'),
                username: '用户1',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'user',
              },
              replyContent: '这是一条回复22',
            },
          ],
        },
        {
          id: 2,
          userInformation: {
            parentId: 2,
            headPortrait: require('../assets/head/headPortrait_3.jpg'),
            username: '用户2',
            dateTime: '2022-06-14 12:00:00',
            content:
              '这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言',
          },
          replyList: [
            {
              replyInformation: {
                headPortrait:
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                username: '神奇的程序员',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'admin',
              },
              replyContent: '这是一条回复',
            },
          ],
        },
        {
          id: 3,
          userInformation: {
            parentId: 3,
            headPortrait: require('../assets/head/headPortrait_3.jpg'),
            username: '用户3',
            dateTime: '2022-06-14 12:00:00',
            content:
              '这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言',
          },
          replyList: [
            {
              replyInformation: {
                headPortrait:
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                username: '神奇的程序员',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'admin',
              },
              replyContent: '这是一条回复',
            },
          ],
        },
        {
          id: 4,
          userInformation: {
            parentId: 4,
            headPortrait: require('../assets/head/headPortrait_3.jpg'),
            username: '用户4',
            dateTime: '2022-06-14 12:00:00',
            content:
              '这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言这是一条留言',
          },
          replyList: [
            {
              replyInformation: {
                headPortrait:
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                username: '神奇的程序员',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'admin',
              },
              replyContent: '这是一条回复',
            },
            {
              replyInformation: {
                headPortrait:
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                username: '神奇的程序员',
                dateTime: '发布于2022-06-14 12:00:00',
                identity: 'admin',
              },
              replyContent: '这是一条回复',
            },
          ],
        },
      ],
    }
  },
  props: {
    current: {
      type: String,
      default: 'dynamic',
    },
  },
  created() {
    if (this.current === 'dynamic') {
      this.level = ['reply', 'replyInner']
    } else if (this.current === 'message') {
      this.level = ['messageReply', 'messageReplyInner']
    } else if (this.current === 'article') {
      this.level = ['articleReply', 'articleReplyInner']
    }
  },
  components: {
    authorTag: () => import('./author_tag'),
    writeMessageTool: () => import('./writeMessageTool'),
  },
  methods: {
    firstReply(id, name) {
      this.replyNmae = `@${name}`
      console.log('id', id)
      this.toolParent = null
      // 首条留言的回复工具只与totalId相关
      this.totalId = id
      this.showLeaveMessageTool = true
      this.$parent.showLeaveMessageTool = false
    },
    reply(index, id, name) {
      console.log(name)
      this.replyNmae = `@${name}`
      this.totalId = null
      // 回复区域留言工具只与parentId和index相关，不与totalId相关
      console.log('id', id, index, this.totalId)
      this.showLeaveMessageTool = true
      this.showLeaveMessageToolIndex = index
      this.toolParent = id //记录父级id，通过父级id找到对应父级下的回复列表
      this.$parent.showLeaveMessageTool = false
    },
    cancelReply() {
      this.showLeaveMessageTool = false
      this.showLeaveMessageToolIndex = null
      this.$parent.showLeaveMessageTool = true
    },
  },
}
</script>

<style lang="less" scoped>
.messageList_wrapper {
  .user_information {
    margin-bottom: 1rem;
  }
  .content {
    position: relative;
    border-radius: 5px;
    line-height: 2rem;
    color: rgba(0, 0, 0, 0.8);
    padding: 1rem 1rem;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .line {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin: 3rem 0;
  }
  .reply {
    width: 95%;
    position: relative;
    right: -5%;
    margin-top: 1rem;
  }
  .reply_name {
    color: #99ce00;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      box-sizing: border-box;
      background-color: #99ce00;
      transform: scaleX(0);
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
