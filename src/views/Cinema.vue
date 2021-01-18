<template>
  <div>
    <van-nav-bar
    title="标题"
    @click-left="handleLeft"
    @click-right="handleRight"
    >
      <template #left>
        {{ cityName }}
        <van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" size="22" color="black" />
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{height: height}">
      <ul>
        <li v-for="data in this.cinemaList" :key="data.cinemaId">
          <div>{{data.name}}</div>
          <div class="address">{{data.address}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BetterScroll from 'better-scroll'
import { NavBar, Icon } from 'vant'
import { mapActions, mapMutations, mapState } from 'vuex'

Vue.use(NavBar).use(Icon)

export default {
  data () {
    return {
      height: 0
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId', 'cityName'])
  },
  methods: {
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    ...mapActions('CinemaModule', ['getCinemaList']),
    handleLeft () {
      // 清空 cinemaList
      this.clearCinemaList()
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/search')
    }
  },
  mounted () {
    // 访问cityName, cityId
    this.height = document.documentElement.clientHeight - 100 + 'px'

    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      this.getCinemaList(this.cityId).then(res => {
        // 状态立即修改，但是 dom 异步渲染
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true // 滚动时 滚动条显示，过几秒就会消失
            }
          })
        })
      })
    } else {
      // 状态立即修改，但是 dom 异步渲染
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true // 滚动时 滚动条显示，过几秒就会消失
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  li{
    padding: 5px;
    .address {
      font-size: 12px;
      color: gray;
    }
  }
  .cinema{
    overflow: hidden;
    position: relative; // 修正滚动条的位置
  }
</style>
