import axios from 'axios'
import Qs from 'qs'
import { getAUTHToken } from '@/utils/auth' // 获取token
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Message, Loading } from 'element-ui'
//配置进度条参数
NProgress.configure({
  showSpinner: false,
  minimum: 0.2,
  easeing: 'swing',
  speed: 1000,
  trickleRate: 0.2,
})

//loading层
const LoadingInstance = {
  _target: null, // 保存Loading实例
  _count: 0,
}

/**
 * 处理异常
 * @param {*} error
 */
//处理异常
function httpErrorStatusHandle(error) {
  // 处理被取消的请求
  if (axios.isCancel(error))
    return console.error('请求的重复请求：' + error.message)
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '接口重定向了！'
        break
      case 400:
        message = '参数不正确！'
        break
      case 401:
        message = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        message = '您没有权限操作！'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        console.log(error.response.config)
        break // 在正确域名下
      case 408:
        message = '请求超时！'
        break
      case 409:
        message = '系统已存在相同数据！'
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 501:
        message = '服务未实现！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        message = 'HTTP版本不受支持！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }
  }
  if (error.message.includes('timeout')) message = '网络请求超时！'
  if (error.message.includes('Network'))
    message = window.navigator.onLine ? '服务端异常！' : '您断网了！'

  Message({
    type: 'error',
    message,
  })
}

//重复请求队列
const pendingMap = new Map()

/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
  let { url, method, params, data } = config
  if (typeof data === 'string') {
    data = Qs.parse(data)
  }
  // response里面返回的config.data是个字符串对象
  return [url, method, Qs.stringify(params), Qs.stringify(data)].join('&')
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

// 创建axios实例
function myAxios(axiosConfig, customOptions) {
  // customOptions为自定义配置

  const service = axios.create({
    timeout: 10000, // 设置统一的超时时长
    headers: {
      'Cache-Control': 'public,max-age=100',
      'content-type': 'application/x-www-form-urlencoded',
    },
  })

  // 自定义配置(取消重复请求、loading层、错误处理)
  let custom_options = Object.assign(
    {
      repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
      loading: false, // 是否开启loading层效果, 默认为false
      error_message_show: true, // 是否开启接口错误信息展示，默认为true
    },
    customOptions
  )

  // 添加请求拦截器
  service.interceptors.request.use(
    (config) => {
      // 自动携带token
      if (getAUTHToken() && typeof window !== 'undefined') {
        config.headers.token = getAUTHToken()
      }

      removePending(config)
      custom_options.repeat_request_cancel && addPending(config)
      //loading层效果
      if (custom_options.loading) {
        LoadingInstance._count++
        if (LoadingInstance._count === 1) {
          LoadingInstance._target = NProgress.start() //开启loading层
        }
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  service.interceptors.response.use(
    (response) => {
      removePending(response.config)
      custom_options.loading && successLoading(custom_options) // 关闭loading
      return response
    },
    (error) => {
      error.config && removePending(error.config) //取消重复请求
      custom_options.loading && failureLoading(custom_options) // 关闭loading
      custom_options.error_message_show && httpErrorStatusHandle(error) // 处理错误状态码
      return Promise.reject(error)
    }
  )

  return service(axiosConfig)
}

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
function closeLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target = NProgress.done() //关闭loading层
    LoadingInstance._target = null
  }
}
function successLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target = window.successRequest() //关闭loading层
    LoadingInstance._target = null
  }
}
function failureLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target = window.failureRequest() //关闭loading层
    LoadingInstance._target = null
  }
}

export default myAxios
