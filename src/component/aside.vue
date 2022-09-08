<template>
  <div>
    <div class="aside">
      <section class="aside_author interval">
        <author></author>
      </section>
      <section class="aside_new_article interval">
        <background>
          <aside-title
            :title="'最新文章'"
            :imgSrc="require('../assets/svg_icon/fire.svg')"
          ></aside-title>
          <aside-content></aside-content>
        </background>
      </section>
      <section
        class="aside_new_reply interval"
        :class="{ nav_visible: navVisible }"
      >
        <background>
          <aside-title
            :title="'最新回复'"
            :imgSrc="require('../assets/svg_icon/message.svg')"
          ></aside-title>
          <aside-comment></aside-comment>
        </background>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    background: () => import('./background.vue'),
    author: () => import('./author.vue'),
    asideTitle: () => import('./aside_title.vue'),
    asideContent: () => import('./aside_content.vue'),
    asideComment: () => import('./aside_comment.vue'),
  },
  data() {
    return {
      navVisible: true,
    }
  },
  methods: {
    navigateState(e) {
      console.log('aside', e)
      if (e === 'visible') {
        this.navVisible = true
      } else {
        this.navVisible = false
      }
    },
  },
}
</script>

<style lang="less" scoped>
@media screen {
  @media (min-width: 1441px) and (max-width: 1920px) {
    .aside {
      padding: 0 1.5rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    .aside {
      padding: 0 2rem;
    }
  }
}
.interval {
  padding-bottom: 1.5rem;
}
.aside {
  padding-bottom: 1.5rem;

  height: 100%;
  .aside_new_reply {
    position: sticky;
    top: 2rem;
    transition: all 0.2s;
  }
  .nav_visible {
    top: 7.5rem;
  }
}
</style>
