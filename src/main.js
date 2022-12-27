import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from '@/router';
//注册仓库
import store from '@/store'
//注册全局的三级联动组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
//导入mock
import '@/mock/mockServe';
//引入swiper
import 'swiper/css/swiper.css';

//统一接口api文件里全部的请求函数
import * as API from '@/api';
Vue.config.productionTip = false;

//测试发请求的代码
// import {reqGetSearchInfo} from '@/api';
// reqGetSearchInfo();

new Vue({
  //配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V
  router,
  //在Vue的实例中注册store选项，子组件可以通过this.$store访问到store实例。
  store
}).$mount('#app');
