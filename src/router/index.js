import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'
Vue.use(VueRouter) // 注册模块，已经全局组件 router-view

const routes = [
  {
    path: '/film',
    component: Film,
    // 嵌套路由
    children: [
      {
        path: '/film/nowplaying', // 简写
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  // {
  //   path: '/detail/:myid', // 动态路由 ':' 是占位符
  //   component: Detail,
  //   name: 'zzcDetail'
  // },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '*', // 通配符
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history', // 分为 hash 和 history 两种模式
  routes
})

export default router
