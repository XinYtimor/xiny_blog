import store from '../store/index'
window.$store = store
const permiss = {
  bind() {
    console.log(
      '每当指令绑定到元素上的时候，就会立刻执行bind这个函数。只调用一次。和css相关的操作，可以放在这个钩子函数中。'
    )
  },
  // inserted() {
  //   console.log('元素插入到DOM中的时候，会执行inserted函数。只调用一次。')
  // },
  inserted(el, binding) {
    // 取出vuex中包含在用户信息中的按钮权限数组
    // const pointArr = store.state.user.userInfo.roles.points
    const pointArr = store.state.userInfo.btnPermiss || [] //从vuex中拿到当前页面的权限信息，用来进行按钮、菜单、内容等级别的权限控制
    console.log('pointArr', pointArr)
    // 通过binding.value可以取出自定义指令传过来的值，通过includes方法判断数组中是否包含
    if (!pointArr.includes(binding.value)) {
      // 若不包含则移除元素
      el.parentNode.removeChild(el)
    }
  },
}
export default permiss

// 生命周期：
// bind:只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
// inserted:被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
// update:所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
// componentUpdated:指令所在组件的 VNode 及其子 VNode 全部更新后调用。
// unbind:只调用一次，指令与元素解绑时调用。
