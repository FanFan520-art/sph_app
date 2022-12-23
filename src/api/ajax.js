//对axios进行二次封装
import axios from 'axios'
//引入进度条
import nprogress, { done, start } from 'nprogress';
import 'nprogress/nprogress.css';
//start：进度条开始，done：进度条结束
import store from '@/store';

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    start();
    //config配置对象里有一个很重要的属性，headers请求头
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    done();
    //服务器相应的数据返回
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'))
});


//对外暴露
export default requests;