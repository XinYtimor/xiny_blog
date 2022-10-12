import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const state = {
  userInfo: {
    btnPermiss: [],
  },
  count: 0,
};

const mutations = {
  addCount(state, step) {
    state.count += step;
  },
  updateUserPermiss(state, newPermiss) {
    state.userInfo.btnPermiss = newPermiss;
  },
};

const actions = {
  setTime(context, step) {
    setTimeout(() => {
      context.commit("decrease", step);
    }, 1000);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    // 持久化插件配置
    createPersistedState({
      // storage:存储位置，localStorage或sessionStorage或cookie
      // cookie 存储方式有区别，下面单独讲
      // 默认存储在localStorage中
      storage: window.sessionStorage,
      // 存储的 key 值，默认是vuex
      key: "vueX",
      // 要存储的数据,render函数的参数是state对象
      render(state) {
        return { ...state };
        // 我这里直接把state中的全部数据解构存进去，
        // 也可以只存需要的数据，以key:value的形式
        // 如下
        // return {userName:state.userName}
      },
    }),
  ],
});
