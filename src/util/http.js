import axios from 'axios'
import { Toast } from 'vant'
import Vue from 'vue'

Vue.use(Toast)

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610440985700358842122241","bc":"520400"}'
  }
})

// axios 拦截器
// http.interceptors.request()
// http.interceptors.response()
// add a requst interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true,
    loadingType: 'spinner',
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that falls lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response
}, function (error) {
  // Any status code that falls lie within the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default http
