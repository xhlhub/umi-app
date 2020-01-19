import axios from 'axios'

const request =  function(params){
    let defaultParams = {
        baseURL: '/api/',
        timeout: 5000,
    }
    return axios(Object.assign({},defaultParams,params))
    .then(res=>{
      const { statusText, status, data } = res
      return Promise.resolve({
        success:true,
        message: statusText,
        statusCode: status,
        data:data,
      })
    })
    .catch(err=>{
      return Promise.reject(err)
    })
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default request