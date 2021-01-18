<template>
  <div>
    Center
  </div>
</template>

<script>
export default {
  // 组件内的路由拦截
  beforeRouteEnter (to, from, next) {
    // ...
    if (!localStorage.getItem('token')) {
      next('login')
    } else {
      next()
    }
  }
}
</script>
