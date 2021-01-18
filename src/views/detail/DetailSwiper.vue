<template>
  <div class="swiper-container" :class="swiperclass">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    perslide: {
      type: Number,
      default: 1
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted () {
    new Swiper('.' + this.swiperclass, {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true
    })
  }
}

</script>

<style lang="scss" scoped>
  img{
    width: 100%;
  }
</style>
