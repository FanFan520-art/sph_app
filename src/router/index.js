//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store';
//使用插件
Vue.use(VueRouter);
//重写push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
//配置路由
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
});

//全局路由守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    //next();
    //获取仓库中的token----可以确定用户是否登录了
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        //已经登录了，还想去登录是不被允许的
        if (to.path == '/login' || to.path == '/register') {
            next('/');
        } else {
            //已经登录了，访问的是非登录与注册
            //有用户姓名证明有用户信息，可以放行，否则要发getUserInfo接口的请求来获取信息再放行
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('userInfo');
                    next();
                } catch (error) {
                    //token失效
                    store.dispathc('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        let toPath = to.path;
        if(toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1){
            next('/login?redirect='+toPath);
        }else{
            next();
        }
    }
    //console.log(store);
});

export default router;