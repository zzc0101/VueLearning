<template>
  <div>
    <!--    <router-view></router-view> // 一级路由配置-->
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex' // 映射状态

// ES6 导出模块
export default {
  data () {
    return {
    }
  },
  components: {
    tabbar
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    touch-action: none;
  }
  ul{
    list-style-type: none;
  }
  section {
    margin-bottom: 50px;
  }
  html, body{
    height: 100%;
  }
</style>
