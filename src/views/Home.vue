<template>
  <div class="body">
    <header class="header">
      <nav-bar @navigateState="navigateState" :current="'Home'"></nav-bar>
    </header>
    <div class="wrapper">
      <div class="main">
        <background>
          <div class="main_content">
            <div class="mian_content_sulff">
              <el-carousel :interval="800000000" type="card" height="40rem">
                <el-carousel-item v-for="item in 6" :key="item">
                  <div class="sulff_item">
                    <img
                      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                      alt=""
                    />
                    <div class="sulff_item_context">
                      <h3 class="sulff_context_title">
                        <router-link class="navs" :to="`/`"
                          >XinY的个人网站搭建流程</router-link
                        >
                      </h3>
                      <p class="sulff_context_content">
                        XinY的个人网站搭建流程XinY的个人网站搭建流程XinY的个人网站搭建流程XinY的个人网站搭建流程XinY的个人网站搭建流程XinY的个人网站搭建流程
                      </p>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="mian_content_recomment">
              <titleName :name="'推荐专栏'" :more="more"></titleName>
              <grid :gridList="gridList"></grid>
            </div>
            <div class="mian_content_title">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="最新文章" name="latestArticle">
                  <common-list></common-list>
                </el-tab-pane>
                <el-tab-pane label="热门文章" name="hot">
                  <common-list></common-list>
                </el-tab-pane>
                <el-tab-pane label="最近更新" name="recently"
                  ><common-list></common-list
                ></el-tab-pane>
                <el-tab-pane label="最多点赞" name="most"
                  ><common-list></common-list
                ></el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </background>
      </div>
      <Aside ref="aside"></Aside>
    </div>
  </div>
</template>

<script>
import loading from '../mixin/loading'
export default {
  mixins: [loading],
  data() {
    return {
      activeName: 'latestArticle',
      navVisible: true,
      more: {
        title: '全部专栏',
        link: 'column',
        src: 'el-icon-menu',
      },
      gridList: [
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
        {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        },
      ],
    }
  },
  components: {
    navBar: () => import('../component/navBar'),
    background: () => import('../component/background'),
    titleName: () => import('../component/title'),
    grid: () => import('../component/grid'),
    author: () => import('../component/author.vue'),
    asideTitle: () => import('../component/aside_title.vue'),
    asideContent: () => import('../component/aside_content.vue'),
    asideComment: () => import('../component/aside_comment.vue'),
    commonList: () => import('../component/common_list.vue'),
    Aside: () => import('../component/aside.vue'),
  },
  mounted() {},
  methods: {
    handleClick() {},
    toPort() {
      this.$router.push('/article')
    },
    navigateState(e) {
      this.$refs.aside.navigateState(e)
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
}
.wrapper {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;

  .main {
    flex: 1;
    min-width: 0;
  }
}
@media screen {
  @media (min-width: 1441px) and (max-width: 1920px) {
    .interval {
      padding-bottom: 1.5rem;
    }
    .header {
      height: 6rem;
    }
    .wrapper {
      max-width: 115rem;
      height: 999rem;
      width: 100%;
      margin: 3rem auto 3rem;
      padding: 0 1.5rem;
      .main {
        font-size: 5rem;
        .main_content {
          padding: 1rem;
          .mian_content_sulff {
            /deep/ .el-carousel__item--card {
              width: 70%;
              left: -10%;
            }
            /deep/.el-carousel__indicators--outside {
              margin-top: -5rem;
            }
            .sulff_item {
              img {
                width: 100%;
                height: 100%;
              }
              .sulff_item_context {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                margin-bottom: 3rem;
                height: 20%;
                background: rgba(0, 0, 0, 0.3);
                text-align: center;
                line-height: 3rem;
                .sulff_context_title {
                  text-align: left;
                  padding: 1rem 0 0 1.5rem;
                  font-size: 2.2rem;
                  font-weight: 700;
                  .navs {
                    text-decoration: none;
                    color: #fff;
                  }
                }
                .sulff_context_content {
                  font-size: 1.4rem;
                  padding: 0.3rem 10rem 0 1.5rem;
                  color: #888;
                  text-align: left;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
              }
            }
          }
          .mian_content_recomment {
          }
          .mian_content_title {
            /deep/.el-tabs__item.is-active {
              color: #fb6c28;
              font-weight: 900;
              font-size: 1.5rem;
            }
            /deep/.el-tabs__active-bar {
              background: #fb6c28;
            }
            /deep/.el-tabs__item:hover {
              color: #fb6c28;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    .interval {
      padding-bottom: 1.5rem;
    }
    .header {
      height: 6rem;
    }
    .wrapper {
      max-width: 150rem;
      height: 999rem;
      width: 100%;
      margin: 3rem auto 3rem;
      padding: 0 1.5rem;
      .main {
        font-size: 5rem;
        .main_content {
          padding: 1rem;
          .mian_content_sulff {
            /deep/ .el-carousel__item--card {
              width: 70%;
              left: -10%;
            }
            /deep/.el-carousel__indicators--outside {
              margin-top: -5rem;
            }
            .sulff_item {
              img {
                width: 100%;
                height: 100%;
              }
              .sulff_item_context {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                margin-bottom: 3rem;
                height: 20%;
                background: rgba(0, 0, 0, 0.3);
                text-align: center;
                line-height: 3rem;
                .sulff_context_title {
                  text-align: left;
                  padding: 1rem 0 0 1.5rem;
                  font-size: 2.2rem;
                  font-weight: 700;
                  .navs {
                    text-decoration: none;
                    color: #fff;
                  }
                }
                .sulff_context_content {
                  font-size: 1.4rem;
                  padding: 0.3rem 10rem 0 1.5rem;
                  color: #888;
                  text-align: left;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
              }
            }
          }
          .mian_content_recomment {
          }
          .mian_content_title {
            /deep/.el-tabs__item.is-active {
              color: #fb6c28;
              font-weight: 900;
              font-size: 1.5rem;
            }
            /deep/.el-tabs__active-bar {
              background: #fb6c28;
            }
            /deep/.el-tabs__item:hover {
              color: #fb6c28;
            }
          }
        }
      }
    }
  }
}
</style>
