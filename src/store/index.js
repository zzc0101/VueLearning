import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from '@/store/module/CityModule'
import TabbarModule from '@/store/module/TabbarModule'
import CinemaModule from '@/store/module/CinemaModule'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// store "全局"的对象
export default new Vuex.Store({
  // 永久存储
  plugins: [createPersistedState()],
  // 公共状态
  state: {
  },
  // 集中式修改状态
  mutations: {
  },
  // 异步
  actions: {
  },
  // 各个模块 -- 组装模块
  modules: {
    CityModule,
    TabbarModule,
    CinemaModule
  }
})
// store 只是存在内存中的
// store 配置 持久化
