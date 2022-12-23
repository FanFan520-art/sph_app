<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!--当路由信息为home或search时显示Footer组件-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch('categoryList');
  }
}
</script>

<style scoped>

</style>
