<template>
  <nav>
    <ul>
      <!--声明式导航-->
      <router-link to="/film" tag="li" active-class="zzcactive">
        <i class="fa fa-2x fa-youtube" aria-hidden="true"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="zzcactive">
        <i class="fa fa-2x fa-caret-square-o-right" aria-hidden="true"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li" active-class="zzcactive">
        <i class="fa fa-2x fa-user-circle" aria-hidden="true"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    background: white;
    z-index: 99;
    ul{
      display: flex;
      li{
        flex: 1;
        display: flex;
        flex-direction: column;
        span{
          font-size: 12px;
        }
      }
    }
  }
  .zzcactive {
    color: #007aff;
  }
</style>
