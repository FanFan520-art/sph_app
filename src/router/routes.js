//引入路由组件
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
export default [
    {
        path: "/detail/:skuId",
        component: Detail,
        meta: {show: true}
    },
    {
        path: "/home",
        component: Home,
        meta: {show: true}
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: {show: true},
        name: "search",
        //路由组件传参可以通过props
        //1.布尔值(只能传params参数)
        //props: true
        //2.对象写法
        //props:{a:1,b:2}
        //3.函数写法(比较常用)
        //props: ($route) => ({keyword:$route.params.keyword, k:$route.query.k})
    },
    {
        path: "/login",
        component: Login,
        meta: {show: false}
    },
    {
        path: "/register",
        component: Register,
        meta: {show: false}
    },
    {
        path: "*",
        redirect: "/home"
    }
]