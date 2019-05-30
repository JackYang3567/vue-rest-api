<template>
   <div class="container">
       <div class="header">
                <div class="jcb-main">
                    <a class="logo" href="/">
                    <img src="picture/logo.png" alt="GK网API" style="position:relative; top:5px">
                    </a>
                    <ul class="layui-nav">
                    <li class="layui-nav-item">
                        <router-link to="/"><i class="layui-icon">&#xe68e;</i> 首 页</router-link>
                    </li>
                    <li class="layui-nav-item">
                        <router-link :to="{ name: 'award'}">开奖历史</router-link>
                    </li>
                    <li class="layui-nav-item">
                        <router-link :to="{ name: 'purchase'}">接口购买</router-link>
                    </li>
                    <li class="layui-nav-item">
                        <router-link :to="{ name: 'trial'}">免费试用</router-link>
                    </li>
                    <li class="layui-nav-item">
                        <router-link :to="{ name: 'interfaces'}">接口说明</router-link>
                    </li>
                        <li class="layui-nav-item"  v-if="loginName">
                            <router-link to="/dashboard" ><i class="layui-icon">&#xe612;</i> 用户中心</router-link>
                        </li>
                        <li class="layui-nav-item"  v-if="loginName">
                            <router-link to="/signout">退 出</router-link>
                        </li>
                         <li class="layui-nav-item" v-else>
                            <router-link to="/signin" ><i class="layui-icon">&#xe612;</i>登陆/ 注册</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        <div class="alone-banner layui-bg-black">
            <div class="jcb-main">
                <h1>全国彩票开奖数据API接口中心</h1>
                <p>GK网API开放平台是GK网面向网络媒体、彩票行业客户、第三方彩票销售或分析机构等用户提供专业权威的开奖数据</p>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
let self = this
export default {
  name: 'Headerbar',
  data () {
    return {
      loginName: this.$store.state.auth.loginName
    }
  },
   computed: mapState ({
     // loginName: (state) => state.auth.loginName
  }),
  created () {
    self = this
    // this.$store.dispatch('auth/loginAction')
    this.loginName = this.$store.state.auth.loginName
    // console.log(' this.$store.state==',this.$store.state.auth)
  },
  methods: {
    ...mapMutations('auth', [ 'LogOut' ]),
    signout: function () {
      self.LogOut()
      window.location.href = '/'
      // self.$router.push({name:'home'});
    }
  },
}

</script>

<style scoped>
html{height:100%;}
        body{min-height:100%;margin:0;padding:0;position:relative;}
            .header {height: 59px;border-bottom: 1px solid #404553;background-color: #393D49;}
            .logo {position: absolute;left: 0;top: 1px;}
            .header .layui-nav {position: absolute;right: 0;top: 0;padding: 0;background: none;}
            .logo img {width: 100%;height: 100%;}
            .alone-banner {height: 120px;text-align: center;font-weight: 300;background-color: #009688;color: #fff;}
            .alone-banner h1 {padding-top: 30px;line-height: 32px;font-size: 30px;font-weight: 300; color: #ffffff}
            .alone-banner p {padding-top: 20px;color: #e2e2e2;color: rgba(255,255,255,.8);}
       .jcb-main {
    padding-bottom: 10px;
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
}
.router-link-active{
   
   /*  background-color: #1E9FFF; */
  
}
</style>
