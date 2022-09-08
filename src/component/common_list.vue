<template>
  <div>
    <div>
      <!-- <el-button class="btn" @click="add">add</el-button> -->
    </div>
    <div class="list_wrapper">
      <ul class="list">
        <li class="list_content" v-for="(item, index) in list" :key="index" s>
          <div class="list_item">
            <div class="item_img">
              <router-link :to="`/`" class="navs">
                <img :src="item.src" alt="" />
                <time :datetime="item.metaList.date">{{
                  item.metaList.date
                }}</time>
              </router-link>
            </div>
            <div class="item_content">
              <div class="content_title">
                <router-link :to="`/`" class="navs title">
                  <span class="content_badge">置顶</span>
                  <h3 class="content_title_message">{{ item.title }}</h3>
                </router-link>
              </div>
              <div class="content_detail">
                {{ item.content }}
              </div>
              <div class="content_meta">
                <ul class="meta_detail">
                  <li class="detail_item">{{ item.metaList.date }}</li>
                  <li class="detail_item">
                    <img src="../assets/svg_icon/preview.svg" alt="" />{{
                      item.metaList.look
                    }}
                  </li>
                  <li class="detail_item">
                    <img src="../assets/svg_icon/comments.svg" alt="" />{{
                      item.metaList.comment
                    }}
                  </li>
                  <li class="detail_item">
                    <img src="../assets/svg_icon/点赞.svg" alt="" />{{
                      item.metaList.like
                    }}
                  </li>
                </ul>
                <ul class="meta_label">
                  <li
                    class="label_item interval"
                    v-for="(label, index) in item.label"
                    :key="index"
                  >
                    <img src="../assets/svg_icon/标签.svg" alt="" />
                    {{ label.labelName }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//公共列表组件（各类文章列表）
const calc = require('calculatorjs')
import 'animate.css'
export default {
  data() {
    return {
      originalListNum: 0,
      addNum: 6,
      list: [
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点2',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点3',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点4',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点3',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: '获取链表中倒数第K个节点4',
          content:
            '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
          metaList: {
            date: '2022-06-09',
            look: '0',
            comment: '999',
            like: '999',
          },
          label: [
            {
              labelName: '算法题解析',
            },
            {
              labelName: '算法题解析2',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.originalListNum = this.list.length
    this.showContent(
      this.list.length - 1,
      0.3,
      'mounted',
      'fadeInUp',
      'list_content'
    )
  },
  methods: {
    add() {
      let a = {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        title: '获取链表中倒数第K个节点NNN',
        content:
          '给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。给定一个单向链表的头节点，如何获取该链表中倒数第K个节点（从1开始计数）？本文将带着大家一起解决这个问题，欢迎各位感兴趣的开发者阅读本文。',
        metaList: {
          date: '2022-06-09',
          look: '0',
          comment: '999',
          like: '999',
        },
        label: [
          {
            labelName: '算法题解析',
          },
          {
            labelName: '算法题解析2',
          },
        ],
      }
      for (let i = 0; i < this.addNum; i++) {
        this.$nextTick(() => {
          this.list.push(a)
          setTimeout(() => {
            this.showContent(
              this.list.length - 1,
              0.3,
              'add',
              'fadeInUp',
              'list_content'
            )
          })
        })
      }
    },
    showContent(num, speed, source, effect, element) {
      let nodeList = []
      if (source === 'mounted') {
        for (let i = num; i >= 0; i--) {
          //倒序循环出原始的li列表
          const node = document.getElementsByClassName(element)[i]
          nodeList.push(node)
        }
      } else {
        //num是添加元素后最后一个元素的索引
        for (let i = num; i >= 0; i--) {
          //相当于反向循环当前list列表
          if (i > num - this.addNum) {
            //拿到新添加的元素(倒序取li元素)
            const node = document.getElementsByClassName(element)[i]
            nodeList.push(node)
            //此时nodeList就是倒序的li列表
          }
        }
      }

      this.nodeList = nodeList
      console.log(this.nodeList)
      const animateCSS = (animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
          const animationName = `${prefix}${animation}`
          this.nodeList.forEach((node, index) => {
            let time =
              this.nodeList.length * speed - calc.mul(index, speed) + 's'
            //给倒序的li列表计算要添加的时间
            //index = 0 其实是给最后一个li添加时间  因为nodeList是倒序的li
            node.classList.add(`${prefix}animated`, animationName)

            node.style.setProperty('--animate-duration', time)
          })
        })

      animateCSS(effect)
    },
  },
}
</script>

<style lang="less" scoped>
.btn {
  position: fixed;
  top: 20rem;
  z-index: 99;
}

.navs {
  text-decoration: none;
}
.list_wrapper {
  .list {
    .list_item {
      display: flex;
      position: relative;
      padding: 1rem;
      .item_img {
        width: 20rem;
        height: 15rem;
        overflow: hidden;
        border-radius: 0.8rem;
        flex-shrink: 0;
        position: relative;
        margin-right: 1.5rem;
        img {
          width: 100%;
          height: 100%;
        }
        time {
          position: absolute;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
          background: #fb6c28;
          height: 2rem;
          line-height: 2rem;
          padding: 0 0.8rem;
          color: #fff;
          font-size: 1.2rem;
          border-radius: 1rem;
          transform: translate3d(120%, 0, 0);
          transition: all 0.35s;
        }
      }
      .item_content {
        display: flex;
        flex-direction: column;
        .content_title {
          padding-bottom: 1rem;
          .title {
            display: flex;
            align-items: center;
          }
          .content_badge {
            height: 2rem;
            padding: 0 0.6rem;
            margin-right: 0.5rem;
            line-height: 2rem;
            font-size: 1.2rem;
            color: #fff;
            background-image: linear-gradient(90deg, #3ca5f6 0, #a86af9 100%);
            border-radius: 0.2rem 0.6rem;
          }
          .content_title_message {
            font-size: 1.8rem;
            color: #000;
            font-family: '微软雅黑';
          }
        }

        .content_detail {
          font-size: 1.4rem;
          line-height: 2.2rem;
          max-height: 4.4rem;
          color: rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .content_meta {
          margin-top: auto;
          justify-content: space-between;
          display: flex;
          .meta_detail {
            display: flex;
            font-size: 1.2rem;
            color: rgba(0, 0, 0, 0.5);
            height: 2rem;
            align-items: center;
            .detail_item {
              display: flex;
              align-items: center;
              img {
                width: 1.4rem;
                height: 1.4rem;
                margin-right: 0.5rem;
              }
              &::after {
                content: '/';
                color: rgba(0, 0, 0, 0.5);
                padding: 0 0.5rem;
              }
            }
          }
          .meta_label {
            display: flex;
            font-size: 1.2rem;
            color: rgba(0, 0, 0, 0.5);
            height: 2rem;
            align-items: center;
            .label_item {
              display: flex;
              align-items: center;
              img {
                width: 1.4rem;
                height: 1.4rem;
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
      &::before {
        content: '';
        width: 0.4rem;
        height: 2.5rem;
        background-color: #fb6c28;
        position: absolute;
        z-index: 1;
        top: 1.5rem;
        left: 0;
        border-radius: 0.2rem;
        transform: scale(0);
        transition: all 0.35s;
      }
      &:hover {
        &::before {
          transform: scale(1);
        }
        .item_content {
          .content_title_message {
            color: #fb6c28;
          }
        }

        .item_img {
          time {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
}
.interval {
  margin-right: 0.5rem;
}
.line {
  border-bottom: 0.1rem dashed rgba(0, 0, 0, 0.2);
  width: 90%;
  margin: 0.5rem auto;
}
</style>
