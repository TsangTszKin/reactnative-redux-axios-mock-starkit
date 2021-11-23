import axios from 'axios';

const http = axios.create({
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // 'Authorization': '' //设置默认的token到请求头
  }
})


/**
 * 请求拦截
 */
 http.interceptors.request.use(config => {
  return config
})

/**
 * 响应拦截
 */
 http.interceptors.response.use(response => {
  return response
})

export default http
