import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'
window.$store = store
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
      rules: ['delete'],
    },
    {
      name: 'tagContent',
      path: '/tagContent',
      title: '标签',
      icon: 'el-icon-s-help',
      component: 'tagContent',
      father: 'tag',
      rules: ['add'], //通过用户权限接口获取到的每个路由的权限信息保存到rules中
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
      meta: { rules: item.rules }, //将每个路由的权限信息保存到路由的meta中
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
  console.log('routerto', to.meta.rules)
  window.$store.commit('updateUserPermiss', to.meta.rules) //在页面跳转时将每个页面的权限信息同步到vuex中，进入到permiss。js中
  console.log('vuex', window.$store.state.userInfo)
  next()
})

export default router
