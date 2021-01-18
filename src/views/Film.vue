<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data,index) in imglist" :key="index">
        <div :style="{backgroundImage: 'url('+data+')'}" style="height: 300px;background-size: cover;background-position: center"></div>
      </div>
    </film-swiper>
    <film-header style="position: sticky;top: 0;background: white;z-index: 100"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './films/FilmHeader'
import filmSwiper from './films/FilmSwiper'
export default {
  data () {
    return {
      imglist: ['https://pic.maizuo.com/usr/movie/423e9dece16c3c98d2f4314dcd40b701.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/365e7ed1cece12034c533ac01d30842c.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/4ca39e8bec04aadc337bc09ee25ed838.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
