<template>
  <div>
    <van-index-bar :index-list="computedCityList" @select="handleSelect">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
        <van-cell :title="item.name" v-for="(item, index) in data.list" :key="index" @click="handleChangePage(item.name, item.cityId)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import http from '@/util/http'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(Toast)

export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=2323064',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityList = this.handleCityData(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityData (cities) {
      // 输入原始数据， 输出的是 目标数据
      // console.log(cities)

      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code))
      }
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      return newCities
    },
    handleSelect (index) {
      Toast(index)
    },
    handleChangePage (name, cityId) {
      // cityId, cityName 记录下来
      this.changeCityName(name)
      this.changeCityId(cityId)
      this.$router.back()
    }
  }
}

</script>

<style>

</style>
