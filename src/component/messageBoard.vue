<template>
  <div>
    <div v-show="showLeaveMessage" class="animate__animated animate__fadeInUp">
      <writeMessageTool
        :showLeaveMessageTool="showLeaveMessageTool"
        :index="0"
        :level="level"
      ></writeMessageTool>
      <div class="line"></div>
      <div class="leaveMessage_inner">
        <leaveMessageList :current="current"></leaveMessageList>
      </div>
    </div>
  </div>
</template>

<script>
//留言板组件
import 'animate.css'
export default {
  data() {
    return {
      count: 0,
      showLeaveMessageTool: true,
      showLeaveMessage: false,
      leaveMessage: {
        text: '',
        name: '',
        email: '',
        url: '',
        imgsrc: [
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          require('../assets/head/headPortrait_1.jpg'),
          require('../assets/head/headPortrait_2.jpg'),
          require('../assets/head/headPortrait_3.jpg'),
        ],
      },
    }
  },
  components: {
    leaveMessageList: () => import('./leaveMessage_list.vue'),
    writeMessageTool: () => import('./writeMessageTool.vue'),
  },
  props: {
    level: {
      type: String,
    },
    current: {
      type: String,
    },
  },
  mounted() {},
  methods: {
    show() {
      this.count = Math.floor(Math.random() * this.leaveMessage.imgsrc.length)
      console.log('count', this.count)
      this.showLeaveMessage = true
    },
    hidden() {
      this.showLeaveMessage = false
    },
    // onSubmit() {
    //   console.log(this.leaveMessage)
    // },
    // focus() {
    //   let ele = document.getElementById('text')
    //   ele.className = 'textarea_label active'
    // },
    // blur() {
    //   let ele = document.getElementById('text')
    //   if (this.leaveMessage.text.length > 0) {
    //     ele.className = 'textarea_label active'
    //   } else {
    //     ele.className = 'textarea_label'
    //   }
    // },
    // input() {
    //   let count = 0
    //   let ele = document.getElementById('text')
    //   if (this.leaveMessage.text !== '' && count === 0) {
    //     ele.className = 'active'
    //     count++
    //   }
    // },
  },
}
</script>

<style lang="less" scoped>
.leave_message {
  padding-top: 3rem;
  .textarea_wrapper {
    position: relative;
    /deep/.el-textarea__inner {
      min-height: 15rem !important;
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
  .submit {
    position: relative;
    right: -60rem;
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
  }
}
.line {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 2rem auto;
}
</style>
