<template>
  <div>
    <div
      v-show="showLeaveMessageTool"
      class="animate__animated animate__fadeInUp"
    >
      <el-form
        ref="form"
        class="leave_message"
        :model="leaveMessage"
        label-width="0px"
      >
        <el-form-item class="textarea_wrapper">
          <el-input
            type="textarea"
            @focus="focus(index)"
            @blur="blur(index)"
            @input="input(index)"
            maxlength="140"
            v-model="leaveMessage.text"
            show-word-limit
          ></el-input>
          <!-- <label class="textarea_label" id="text"
            >你是我一生只会遇见一次的惊喜...</label
          > -->
          <label class="textarea_label" id="text">{{ label }}</label>
        </el-form-item>
        <el-form-item class="user_information">
          <el-avatar :src="imgsrc[count]"></el-avatar>
          <el-input placeholder="*昵称" v-model="leaveMessage.name" clearable>
          </el-input>
          <el-input placeholder="*邮箱" v-model="leaveMessage.email" clearable>
          </el-input>
          <el-input placeholder="个人站点" v-model="leaveMessage.url" clearable>
          </el-input>
        </el-form-item>
        <div
          :class="{
            submit: level === 'leaveMessage',
            replySubmit: level === 'reply',
            replyInnerSubmit: level === 'replyInner',
            article: level === 'article',
            articleSubmit: level === 'articleReply',
            articleInnerSubmit: level === 'articleReplyInner',
            messageBoard: level === 'messageBoard',
            messageBoardSubmit: level === 'messageReply',
            messageBoardInnerSubmit: level === 'messageReplyInner',
          }"
        >
          <el-button v-show="type === 'reply'" @click="cancelReply"
            >取消</el-button
          >
          <el-button :disabled="submitBtn" @click="onSubmit">提交</el-button>
        </div>
      </el-form>
      <!-- <div class="line"></div> -->
    </div>
  </div>
</template>

<script>
//写留言组件
import 'animate.css'
export default {
  data() {
    return {
      submitBtn: true,
      ele: null,
      count: 0,
      inputCount: 0,
      imgsrc: [
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        require('../assets/head/headPortrait_1.jpg'),
        require('../assets/head/headPortrait_2.jpg'),
        require('../assets/head/headPortrait_3.jpg'),
      ],
      leaveMessage: {
        text: '',
        name: '',
        email: '',
        url: '',
        src: '',
      },
    }
  },
  props: {
    showLeaveMessageTool: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: '0',
    },
    level: {
      type: String,
      default: 'leaveMessage',
    },
    label: {
      type: String,
      default: '你是我一生只会遇见一次的惊喜...',
    },
  },
  components: {},
  created() {
    console.log(this.level)
  },
  mounted() {
    this.ele = document.getElementById('text')
    this.count = Math.floor(Math.random() * this.imgsrc.length)
    this.leaveMessage.src = this.imgsrc[this.count]
  },
  methods: {
    cancelReply() {
      this.$emit('cancelReply')
    },
    show() {
      this.showLeaveMessageTool = true
    },
    hidden() {
      this.showLeaveMessageTool = false
    },
    onSubmit() {
      console.log(this.leaveMessage)
    },
    focus(e) {
      console.log(e)
      let ele = document.getElementsByClassName('textarea_label')[e]
      this.$nextTick(() => {
        ele.className = 'textarea_label active'
      })
    },
    blur(e) {
      let ele = document.getElementsByClassName('textarea_label')[e]
      if (this.leaveMessage.text.length > 0) {
        ele.className = 'textarea_label active'
      } else {
        ele.className = 'textarea_label'
      }
    },
    input(e) {
      this.$nextTick(() => {
        if (this.leaveMessage.text.length > 0) {
          this.submitBtn = false
        } else {
          this.submitBtn = true
        }
      })

      let ele = document.getElementsByClassName('textarea_label')[e]
      if (this.leaveMessage.text !== '') {
        this.$nextTick(() => {
          ele.className = 'textarea_label active'
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.leave_message {
  padding-top: 4rem;
  .textarea_wrapper {
    position: relative;
    /deep/.el-textarea__inner {
      min-height: 15rem !important;
      background-color: rgba(0, 0, 0, 0.02);
    }
    /deep/.el-textarea__inner:focus {
      border-color: #fb6c28;
    }
    .textarea_label {
      position: absolute;
      left: 1rem;
      top: 0;
      font-family: '微软雅黑';
      color: #000;
      background-color: transparent;
      transition: all 0.2s;
      pointer-events: none;
    }
    .active {
      position: absolute;
      left: 1rem;
      font-family: '微软雅黑';
      background-color: transparent;
      transition: all 0.2s;
      top: -3rem;
      color: #fff;
      border-radius: 1rem;
      background-color: #fb6c28;
      line-height: 2rem;
      padding: 0.2rem 1rem;
      font-size: 1rem;
    }
  }
  .user_information {
    /deep/.el-form-item__content {
      display: flex;
      align-items: center;
    }
    /deep/.el-avatar {
      flex-shrink: 0;
    }
    /deep/.el-input {
      margin: 0 1rem;
    }
    /deep/.el-input__inner:focus {
      border-color: #fb6c28;
    }

    /deep/.el-input__inner {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  /deep/.el-button {
    background-color: #fb6c28;
    color: #fff;
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    border: 0;
    transform: scale(0.7);
    trasntition: all 0.2s;
    &:hover {
      transform: scale(0.8);
    }
  }
  /deep/.el-button.is-disabled {
    background-color: rgba(251, 108, 40, 0.5);
  }
  .submit {
    position: relative;
    right: -60rem;
  }
  .replySubmit {
    position: relative;
    right: -53rem;
  }
  .replyInnerSubmit {
    position: relative;
    right: -50rem;
  }
  .article {
    position: relative;
    right: -69.5rem;
  }
  .articleSubmit {
    position: relative;
    right: -62.5rem;
  }
  .articleInnerSubmit {
    position: relative;
    right: -58.5rem;
  }
  .messageBoard {
    position: relative;
    right: -102.5rem;
  }
  .messageBoardSubmit {
    position: relative;
    right: -95.5rem;
  }
  .messageBoardInnerSubmit {
    position: relative;
    right: -90rem;
  }
}
.line {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 2rem auto;
}
</style>
