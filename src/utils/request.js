import axios from "axios";

//创建一个新的axios对象
const  request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000
})

//request拦截器
//可以自请求发送前对请求做一些处理
//比如：统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    // config.headers['token'] = user.token;  // 设置请求头
    return config
},error => {
    console.error('请求错误', error);
    return Promise.reject(error)
})

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 兼容服务器返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.error('请求错误', error);
        return Promise.reject(error)
    }
)

export default request