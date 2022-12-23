//对axios进行二次封装
import axios from 'axios'
//引入进度条
import nprogress, { done, start } from 'nprogress';
import 'nprogress/nprogress.css';
//start：进度条开始，done：进度条结束

const mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000
});

//请求拦截器
mockRequests.interceptors.request.use((config)=>{
    start();
    //config配置对象里有一个很重要的属性，headers请求头
    return config;
});

//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    done();
    //服务器相应的数据返回
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'))
});


//对外暴露
export default mockRequests;