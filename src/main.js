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
import { Button, MessageBox } from 'element-ui';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
//ElementUi的另一种注册方式，在vue原型上添加
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//导入mock
import '@/mock/mockServe';
//引入swiper
import 'swiper/css/swiper.css';

//统一接口api文件里全部的请求函数
import * as API from '@/api';

//引入懒加载插件
import VueLazyload from 'vue-lazyload';
import wukong from '@/assets/1.gif';
//注册插件
Vue.use(VueLazyload,{
  loading: wukong
})
Vue.config.productionTip = false;

//注册自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins, {
  name: 'NiuNiu'
});

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
