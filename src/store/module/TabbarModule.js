const module = {
  namespaced: true, // 命名空间
  state: {
    isTabbarShow: true
  },
  mutations: {
    hideTabBarState (state, flag) {
      state.isTabbarShow = flag
    }
  },
  actions: {
  }
}

export default module
