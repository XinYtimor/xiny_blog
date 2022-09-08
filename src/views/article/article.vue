<template>
  <div>
    <header class="header">
      <keep-alive>
        <navBar :current="'article'"></navBar>
      </keep-alive>
    </header>
    <div class="main">
      <background>
        <asideTitle class="title_all" :title="'全部文章'"></asideTitle>
        <asideTitle
          class="title_classify"
          :title="'分类'"
          :imgSrc="require('../../assets/svg_icon/classify.svg')"
        ></asideTitle>
        <div class="classify_wrapper">
          <ul class="classify">
            <li
              class="classify_item"
              v-for="(item, index) in classifyList"
              :key="index"
            >
              <router-link
                class="navs"
                :to="{
                  path: `/columnContent`,
                  query: { articleId: item.id },
                }"
              >
                <div class="classify_tag">
                  <span class="classify_name">{{ item.classifyName }}</span
                  ><span class="classify_num">{{ item.number }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <asideTitle
          class="title_timeLine"
          :title="'时间轴（月）'"
          :imgSrc="require('../../assets/svg_icon/viewList.svg')"
        ></asideTitle>
        <div class="timeLine_wrapper">
          <el-timeline>
            <el-collapse>
              <el-timeline-item
                v-for="(item, index) in allArticleList"
                :key="index"
                placement="top"
                icon="el-icon-s-promotion"
              >
                <el-collapse-item :title="item.dateTime" :name="index">
                  <ul>
                    <li
                      class="monthList_item"
                      v-for="(monthItem, index) in item.monthArticleList"
                      :key="index"
                    >
                      <router-link
                        class="navs"
                        :to="{
                          path: `/${monthItem.url}`,
                          query: { articleId: monthItem.id },
                        }"
                      >
                        <span class="monthList_content"
                          >{{ monthItem.time
                          }}<span class="content_separated">:</span
                          >{{ monthItem.title }}</span
                        >
                      </router-link>
                    </li>
                  </ul>
                </el-collapse-item>
              </el-timeline-item>
            </el-collapse>
          </el-timeline>
        </div>
      </background>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navBar: () => import('../../component/navBar'),
    background: () => import('../../component/background'),
    asideTitle: () => import('../../component/aside_title'),
  },
  data() {
    return {
      classifyList: [
        {
          classifyName: 'Vue',
          url: 'columnContent',
          id: 'classifyId1',
          number: '10',
        },
        {
          classifyName: 'React',
          url: 'react',
        },
        {
          classifyName: 'Angular',
          url: 'angular',
        },
        {
          classifyName: 'Node',
          url: 'node',
        },
        {
          classifyName: 'PHP',
          url: 'php',
        },
        {
          classifyName: 'Java',
          url: 'java',
        },
        {
          classifyName: 'C++',
          url: 'c++',
        },
        {
          classifyName: 'C#',
          url: 'c#',
        },
        {
          classifyName: 'Python',
          url: 'python',
        },
        {
          classifyName: 'JavaScriptJavaScriptJavaScript',
          url: 'javascript',
          number: '10',
        },
        {
          classifyName: 'HTML',
          url: 'html',
        },
        {
          classifyName: 'CSS',
          url: 'css',
        },
        {
          classifyName: 'TypeScript',
          url: 'typescript',
        },
        {
          classifyName: 'Go',
          url: 'go',
        },
        {
          classifyName: 'Swift',
          url: 'swift',
        },
        {
          classifyName: 'Kotlin',
          url: 'kotlin',
        },
        {
          classifyName: 'Ruby',
          url: 'ruby',
        },
        {
          classifyName: 'Rust',
          url: 'rust',
        },
        {
          classifyName: 'Objective-C',
          url: 'objective-c',
        },
        {
          classifyName: 'C',
          url: 'c',
        },
        {
          classifyName: 'Shell',
          url: 'shell',
        },
        {
          classifyName: 'Perl',
          url: 'perl',
        },
        {
          classifyName: 'Scala',
          url: 'scala',
        },
        {
          classifyName: 'Haskell',
          url: 'haskell',
        },
        {
          classifyName: 'Clojure',
          url: 'cl',
        },
      ],
      allArticleList: [
        {
          dateTime: '2022年6月',
          monthArticleList: [
            {
              id: 'articleId1',
              url: 'articleContent',
              title: '实现链表反转',
              time: '2022-06-01',
            },
            {
              title: '标题2',
              id: 'articleId2',
              time: '2022-06-02',
              url: '/article/1',
            },
          ],
        },
        {
          dateTime: '2022年5月',
          monthArticleList: [
            {
              title: '标题1',
              time: '2022-05-01',
              url: '/article/1',
            },
            {
              title: '标题2',
              time: '2022-05-02',
              url: '/article/1',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    // let ciphertext = this.$crypto.AES.encrypt('articleId1', 'secret key 123')
    // console.log('加密', ciphertext.toString())
    // let bytes = this.$crypto.AES.decrypt(
    //   ciphertext.toString(),
    //   'secret key 123'
    // )
    // let userkeys = bytes.toString(this.$crypto.enc.Utf8)
    // console.log('解密', userkeys)
  },
}
</script>

<style lang="less" scoped>
.navs {
  text-decoration: none;
  color: #000;
}
.header {
  height: 6rem;
  position: relative;
}
.main {
  max-width: 115rem;
  height: 999rem;
  margin: 3rem auto 3rem;
  .title_all {
    padding: 1rem;
    color: #fb6c28;
  }
  .title_classify {
    padding: 1rem 2rem;
  }
  .classify_wrapper {
    padding-bottom: 1rem;
    .classify {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 1rem;
      .classify_item {
        padding: 0.5rem;
        transform: scale(0.9);
        transition: all 0.2s;
        .classify_tag {
          background-color: #ecf5ff;
          border-color: #d9ecff;
          height: 32px;
          padding: 0 10px;
          line-height: 30px;
          font-size: 12px;
          border-width: 1px;
          border-style: solid;
          border-radius: 4px;
          box-sizing: border-box;
          white-space: nowrap;
          display: flex;
          .classify_name {
            max-width: 15rem;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #409eff;
            display: inline-block;
          }
          .classify_num {
            color: #fb6c28;
            padding-left: 0.8rem;
          }
        }
        &:hover {
          transform: scale(1);
        }
      }
    }
  }
  .title_timeLine {
    padding: 1rem 2rem;
  }
  .timeLine_wrapper {
    padding: 1rem 2rem;
    /deep/.el-timeline-item__icon {
      color: rgba(0, 0, 0, 0.5);
      font-size: 2rem;
    }
    /deep/.el-timeline-item__node {
      background-color: transparent;
    }
    /deep/.el-timeline-item {
      padding-bottom: 0rem;
    }
    /deep/.el-timeline-item__timestamp.is-top {
      padding: 0;
      margin-bottom: 0.8rem;
    }
    /deep/.el-timeline-item__timestamp {
      font-size: 1.2rem;
    }
    /deep/.el-timeline-item__tail {
      border-left: 0.1rem dashed rgba(0, 0, 0, 0.3);
      top: 2.2rem;
      bottom: 0;
      margin: auto;
      height: 85%;
    }
    /deep/.el-timeline-item__wrapper {
      padding-left: 2.8rem;
      top: -1.5rem;
    }
    /deep/.el-collapse-item__header {
      background-color: rgba(242, 246, 252, 0.7);
      height: 3rem;
      line-height: 3rem;
      color: #fb6c28;
      font-size: 1.4rem;
      border: 0;
      font-family: '微软雅黑';
      padding: 0.5rem 2rem;
      border-radius: 0.4rem;
      letter-spacing: 0.15rem;
      &:active {
        background-color: rgba(242, 246, 252, 0.7);
      }
      &::before {
        content: '';
        width: 0;
        height: 0;
        border-top: 1rem solid transparent;
        border-right: 1rem solid rgba(242, 246, 252, 0.7);
        border-bottom: 1rem solid transparent;
        position: absolute;
        left: 1.8rem;
        /* bottom: 100%; */
      }
    }
    /deep/.el-collapse-item__wrap {
      border: 0;
    }
    /deep/.el-collapse-item__content {
      padding: 0;
    }
    /deep/.el-collapse {
      border: 0;
    }
    .monthList_item {
      padding: 1rem 2rem;
      .monthList_content {
        font-size: 1.4rem;
        position: relative;
        color: rgba(0, 0, 0, 0.55);
        font-weight: 500;
        &:hover {
          color: #fb6c28;
        }
        &::after {
          content: '';
          width: 100%;
          transform: scaleX(0);
          position: absolute;
          height: 0.1rem;
          box-sizing: border-box;
          background-color: #fb6c28;
          transition: transform 0.25s ease-out;
          left: 0;
          bottom: -0.2rem;
          transform-origin: bottom right;
        }
        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .content_separated {
          padding: 0 0.3rem;
        }
      }
    }
  }
}
</style>
