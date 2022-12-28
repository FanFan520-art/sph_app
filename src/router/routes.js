//引入路由组件
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
//引入二级路由
import MyOrder from '@/views/Center/myOrder'
import GroupOrder from '@/views/Center/groupOrder'
export default [
    {
        path: "/center",
        component: Center,
        meta: {show: true},
        children:[
            {
                path: "myorder",
                component: MyOrder
            },
            {
                path: "grouporder",
                component: GroupOrder
            },
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: {show: true}
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay,
        meta: {show: true}
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: {show: true}
    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: ShopCart,
        meta: {show: true}
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: {show: true}
    },
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