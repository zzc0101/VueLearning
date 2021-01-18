<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" />
        <h3>{{data.name}}</h3>
        <p class="actorsShow">主演：{{data.actors | actorFilter}}</p>
        <p>{{data.nation}} | {{data.runtime}}分钟</p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http' // 别名 @ ==> src的绝对路径
import Vue from 'vue'
import { List, Cell } from 'vant'
Vue.use(List).use(Cell) // 全局注册
Vue.filter('actorFilter', (actors) => {
  if (actors !== undefined) return actors.map(item => item.name).join(' ')
})

export default {
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=8709610`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  data () {
    return {
      datalist: [],
      loading: false, // 是否正在加载中,防止多次触发的问题
      finished: false, // 未结束
      current: 1, // 记录数据页面
      total: 0
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail?id=${id}`)
    },
    onLoad () {
      if (this.datalist.length === this.total) {
        this.finished = true
        return
      }
      // 1.ajax请求新页面的数据
      // 2.合并新数据到老数据
      // 3.this.loading=false
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=8709610`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.van-cell{
  overflow: hidden;
  padding: 10px;
  img{
    float: left;
    width: 100px;
  }
}
.actorsShow{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
