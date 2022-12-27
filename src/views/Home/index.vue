<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <!--v-for用在自定义的标签中-->
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
//引入其他组件
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
import { mapState } from 'vuex'
export default{
    name: '',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted(){
        //在父组件home中发起action，因为mock的floor组件数据有两个，在一个里面请求不行
        this.$store.dispatch("getFloorList");
        //请求用户的登录信息（此时请求拦截器判断登录后服务器有没有返回token，这次请求会带上，向服务器捞用户数据）
        //this.$store.dispatch("userInfo");(准备都放到路由文件中，在路由守卫那里统一去请求这个接口)
    },
    computed:{
        ...mapState({
            floorList: state => state.home.floorList
        })
    }
}
</script>

<style scoped>

</style>