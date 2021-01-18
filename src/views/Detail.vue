<template>
  <v-touch @swiperight="onSwipeRight">
  <div v-if="filminfo">
    <detail-header v-top :title="filminfo.name"></detail-header>
    <div :style="{backgroundImage:'url('+filminfo.poster+')'}"
         style="height: 300px;background-size: cover;background-position: center;"></div>
    <h3>
      {{ filminfo.name }} -- {{ filminfo.filmType.name }}
    </h3>
    <div>{{ filminfo.category }}</div>
    <div>{{ filminfo.premiereAt | dareFilter }} 上映</div>
    <div>{{ filminfo.nation }} | {{ filminfo.runtime }} 分钟</div>
    <div :class="isShow? '' : 'synopsis' ">
      {{ filminfo.synopsis }}
    </div>
    <div style="text-align: center;">
      <i class="fa" :class="isShow? 'fa-angle-double-up':'fa-angle-double-down'" aria-hidden="true"
         @click="isShow=!isShow"></i>
    </div>
    <h3>演职人员</h3>
    <detail-swiper :perslide="3" swiperclass="swiper-actors">
      <div class="swiper-slide" v-for="(data, index) in filminfo.actors" :key="index">
        <div :style="{backgroundImage: 'url('+data.avatarAddress+')'}"
             style="height: 200px; background-size: cover; background-position: center;"></div>
        <div style="text-align: center">
          <div><b>{{ data.name }}</b></div>
          <div>{{ data.role }}</div>
        </div>
      </div>
    </detail-swiper>
    <h3>剧照</h3>
    <detail-swiper :perslide="2" swiperclass="swiper-photos">
      <div class="swiper-slide" v-for="(data, index) in filminfo.photos" :key="index">
        <div :style="{backgroundImage: 'url('+data+')'}"
             style="height: 100px; background-size: cover; background-position: center;"
             @click="handlePreview(index)"></div>
      </div>
    </detail-swiper>
  </div>
  <div v-else>获取异常</div>
  </v-touch>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from '@/views/detail/DetailSwiper'
import detailHeader from '@/views/detail/DetailHeader'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
import VueTouch from 'vue-touch'

Vue.use(ImagePreview)
Vue.use(VueTouch, { name: 'v-touch' })

Vue.filter('dareFilter', (date) => {
  // 日期处理函数 - moment
  return moment(date * 1000).format('YYYY-MM-DD')
})

// 定义指令
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 300) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  props: {
    perslide: {
      type: Number,
      default: 1
    }
  },
  components: {
    detailSwiper,
    detailHeader
  },
  data () {
    return {
      filminfo: null, // 使用 null 会赋值一个对象类型
      isShow: false
    }
  },
  mounted () {
    // 隐藏
    this.hideTabBarState(false)
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=5649279`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filminfo = res.data.data.film
    })
  },
  methods: {
    ...mapMutations('TabbarModule', ['hideTabBarState']),
    handlePreview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        loop: false,
        closeable: true
      })
    },
    onSwipeRight () {
      console.log('zzc')
    }
  },
  beforeDestroy () {
    this.hideTabBarState(true)
  }
}
</script>

<style lang="scss" scoped>
.synopsis {
  height: 40px;
  overflow: hidden;
}
</style>
