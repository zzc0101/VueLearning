<template>
  <ul>
    <router-link to="/film/nowplaying" tag="li" active-class="activeShow" >正在热映</router-link>
    <router-link to="/film/comingsoon" tag="li" active-class="activeShow" >即将上映</router-link>
  </ul>
</template>

<style lang="scss" scoped>
  ul{
    position: sticky;
    top: 0;
    background: white;
    display: flex;
    height: 40px;
    text-align: center;
    line-height: 40px;
    li{
      flex: 1;
    }
  }
  .activeShow{
    color: red;
    border-bottom: 3px solid red;
  }
</style>
