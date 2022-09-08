import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/Home',
  },
  {
    path: '/Home',
    component: () => import('../views/Home.vue'),
  },
]

//自动路由
function addRouter() {
  let user = [
    {
      name: 'Home',
      path: '/Home',
      title: '首页',
      index: 1,
      icon: 'el-icon-s-help',
      component: 'Home',
    },
    {
      name: 'article',
      path: '/article',
      title: '文章',
      index: 3,
      icon: 'el-icon-s-help',
      component: 'article',
      father: 'article',
    },
    {
      name: 'articleContent',
      path: '/articleContent',
      title: '文章',
      icon: 'el-icon-s-help',
      component: 'articleContent',
      father: 'article',
    },
    {
      name: 'about',
      path: '/about',
      title: '关于',
      index: 7,
      icon: 'el-icon-s-help',
      component: 'about',
      father: 'about',
    },
    {
      name: 'write',
      path: '/write',
      title: '写作',
      icon: 'el-icon-s-help',
      component: 'write',
      father: 'write',
      isShow: false,
    },
    {
      name: 'message',
      path: '/message',
      title: '留言板',
      index: 6,
      icon: 'el-icon-s-help',
      component: 'message',
      father: 'message',
    },
    {
      name: 'dynamic',
      path: '/dynamic',
      title: '动态',
      index: 2,
      icon: 'el-icon-s-help',
      component: 'dynamic',
      father: 'dynamic',
    },
    {
      name: 'column',
      path: '/column',
      title: '专栏',
      index: 4,
      icon: 'el-icon-s-help',
      component: 'column',
      father: 'column',
    },
    {
      name: 'columnContent',
      path: '/columnContent',
      title: '专栏',
      icon: 'el-icon-s-help',
      component: 'columnContent',
      father: 'column',
    },
    {
      name: 'tag',
      path: '/tag',
      title: '标签',
      index: 5,
      icon: 'el-icon-s-help',
      component: 'tag',
      father: 'tag',
    },
    {
      name: 'tagContent',
      path: '/tagContent',
      title: '标签',
      icon: 'el-icon-s-help',
      component: 'tagContent',
      father: 'tag',
    },
  ]
  getRouterList(user)
  //自动导航栏
  let navList = []
  user.forEach((item) => {
    if (item.index) {
      navList.push({
        title: item.title,
        src: item.component,
        index: item.index,
      })
    }
  })

  window.navList = navList
}

function getRouterList(user) {
  user.forEach((item) => {
    routes.push({
      path: item.path,
      component: () =>
        import(
          `../views/${item.father ? item.father + '/' : ''}${
            item.component
          }.vue`
        ),
    })
  })
}

addRouter()

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'selected',
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
