<template>
  <div class="jcb-main alone-nav">
    <div class="userinfo">
        <blockquote class="layui-elem-quote">登陆名:
            <B><span class="red">{{userInfo.name}}</span> </B>
            &nbsp;&nbsp;   可用余额:
            <B><span class="red">0.00</span> </B>  
            &nbsp; <router-link :to="{name: 'recharge'}" class="layui-btn layui-btn-sm">
            <i class="layui-icon">&#xe65e;</i>  立即充值</router-link> &nbsp;&nbsp; 最后登陆时间:<B><span class="red">{{userInfo.signinTime}}</span> </B> </blockquote>
    </div>
    <ul class="layui-tab-title">
        <router-link :to="{name:'dashboard'}" tag="li" active-class="layui-this"><a>个人资料</a></router-link>
        <router-link :to="{name:'token'}" tag="li" active-class="layui-this"><a>接口管理</a></router-link>
        <router-link :to="{name:'profile'}" tag="li" active-class="layui-this"><a>资料修改</a></router-link>
        <router-link :to="{name:'buylog'}" tag="li" active-class="layui-this"><a>购买记录</a></router-link>
        <router-link :to="{name:'purchaselog'}" tag="li" active-class="layui-this"><a>充值记录</a></router-link>
        <router-link :to="{name:'amountlog'}" tag="li" active-class="layui-this"><a>资金变动记录</a></router-link>
		<router-link :to="{name:'recharge'}" tag="li" active-class="layui-this"><a>在线充值</a></router-link>
    </ul>
     <router-view class="child-view" />
    
</div>

</template>

<script>
export default {
 name: 'Dashboard',
  data () {
    return {
      userInfo: this.$store.state.auth.userInfo
    }
  },
}
</script>
<style scoped>
   .jcb-main {
       margin: 20px auto;
   }
   .red{color:#ff0000}
</style>
    
