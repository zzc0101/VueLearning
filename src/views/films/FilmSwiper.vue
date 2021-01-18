<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-navigation"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle' // 引入swiper.js 文件
import 'swiper/swiper-bundle.min.css' // 引入 swiper.css 文件
export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      // 分页器
      pagination: {
        el: '.swiper-navigation'
      }
    })
  }
}
</script>

<style scoped>

</style>
