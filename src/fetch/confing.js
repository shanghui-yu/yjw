import axios from "axios";

const urlType = process.env.REACT_APP_TYPE;
// let baseURL = "http://192.168.5.156";
// let baseURL = "http://yjwadms.szltyj.com:18080";
let baseURL = "https://www.86yingji.com";
if(urlType == 'sit'){
  baseURL = "http://yjws.szltyj.com:18000";
}else if (urlType == "uat") {
  baseURL = "http://yjwuat.86yingji.com:8880";
} else if (urlType == "pro") {
  baseURL = "https://www.86yingji.com";
}
window.APIURL = "http://localhost:3001"
let instance = axios.create({
  baseURL,
});
// instance.defaults.withCredentials=true;
// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
     // 在发送请求之前做些什么

     //设置公共参数
     let device=JSON.stringify({
       language:'cn',
       platform:'web',
       deviceType:'pc',
       source:'1',
       deviceVersion:window.navigator.userAgent
      });
    let newConfig = {
      ...config,
      headers: {
        ...config.headers,
        ...{
         device
        }
      }
    };
    return newConfig;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
