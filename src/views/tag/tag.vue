<template>
  <div>
    <div class="header">
      <Header :current="'tag'" @navigateState="navigateState"></Header>
    </div>
    <div class="tag_wrapper">
      <div class="main">
        <Background>
          <el-button v-arrowBtn="'add'">add</el-button>
          <el-button v-arrowBtn="'delete'">delete</el-button>
          <div class="tag_content">
            <Title :name="'全部标签'" :num="12"></Title>
            <Tag :tagList="tagList"></Tag>
          </div>
        </Background>
      </div>
      <Aside ref="aside"></Aside>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("../../component/navBar.vue"),
    Aside: () => import("../../component/aside.vue"),
    Background: () => import("../../component/background.vue"),
    Title: () => import("../../component/title.vue"),
    Tag: () => import("../../component/tag_content.vue"),
  },
  data() {
    return {
      tagList: [
        {
          name: "Vue",
          url: "tagContent",
          id: "classifyId1",
          number: "10",
        },
        {
          name: "React",
          url: "react",
        },
        {
          name: "Angular",
          url: "angular",
        },
        {
          name: "Node",
          url: "node",
        },
        {
          name: "PHP",
          url: "php",
        },
        {
          name: "Java",
          url: "java",
        },
        {
          name: "C++",
          url: "c++",
        },
        {
          name: "C#",
          url: "c#",
        },
        {
          name: "Python",
          url: "python",
        },
        {
          name: "JavaScriptJavaScriptJavaScript",
          url: "javascript",
          number: "10",
        },
        {
          name: "HTML",
          url: "html",
        },
        {
          name: "CSS",
          url: "css",
        },
        {
          name: "TypeScript",
          url: "typescript",
        },
        {
          name: "Go",
          url: "go",
        },
        {
          name: "Swift",
          url: "swift",
        },
        {
          name: "Kotlin",
          url: "kotlin",
        },
        {
          name: "Ruby",
          url: "ruby",
        },
        {
          name: "Rust",
          url: "rust",
        },
        {
          name: "Objective-C",
          url: "objective-c",
        },
        {
          name: "C",
          url: "c",
        },
        {
          name: "Shell",
          url: "shell",
        },
        {
          name: "Perl",
          url: "perl",
        },
        {
          name: "Scala",
          url: "scala",
        },
        {
          name: "Haskell",
          url: "haskell",
        },
        {
          name: "Clojure",
          url: "cl",
        },
      ],
    };
  },
  methods: {
    navigateState(e) {
      this.$refs.aside.navigateState(e);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 6rem;
}
.tag_wrapper {
  max-width: 115rem;
  height: 999rem;
  display: flex;
  flex-direction: row;
  margin: 3rem auto 3rem;
  padding: 0 1.5rem;
  .main {
    height: 999rem;
    width: 100%;
    .tag_content {
      padding: 1rem;
    }
  }
}
</style>
