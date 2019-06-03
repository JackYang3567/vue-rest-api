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
        <router-link :to="{name:'dashboard'}" id="tag_1" tag="li" ><a>个人资料</a></router-link>
        <router-link :to="{name:'token'}" tag="li" ><a>接口管理</a></router-link>
        <router-link :to="{name:'profile'}" tag="li" ><a>资料修改</a></router-link>
        <router-link :to="{name:'buylog'}" tag="li" ><a>购买记录</a></router-link>
        <router-link :to="{name:'purchaselog'}" tag="li" ><a>充值记录</a></router-link>
        <router-link :to="{name:'amountlog'}" tag="li" ><a>资金变动记录</a></router-link>
	    <router-link :to="{name:'recharge'}" tag="li" ><a>购买续费</a></router-link>
      
    </ul>
    <div class="layui-tab layui-tab-card">
	<div class="layui-card-header layui-bg-black">产品授权</div>
	<div class="fly-panel-main">
		<form class="layui-form">
			<div class="layui-form-item"><label class="layui-form-label">接口账号</label>
				<div class="layui-input-inline" style="width:300px">
														<select name="token" lay-verify="required" lay-filter="myselect">
						<option value="">请选择一个接口来操作</option>
											<option value="6353688DD4C33AA3">6353688DD4C33AA3 - 默认接口账号</option>
											<option value="B3CEBA8E2F6BEC0F">B3CEBA8E2F6BEC0F - 默认接口账号</option>
											<option value="D90A0703F7E4DF51">D90A0703F7E4DF51 - 默认接口账号</option>
											<option value="C72510E98FCDA9A8">C72510E98FCDA9A8 - 默认接口账号</option>
										</select><div class="layui-unselect layui-form-select"><div class="layui-select-title"><input type="text" placeholder="请选择一个接口来操作" value="" readonly="" class="layui-input layui-unselect"><i class="layui-edge"></i></div><dl class="layui-anim layui-anim-upbit"><dd lay-value="" class="layui-select-tips">请选择一个接口来操作</dd><dd lay-value="6353688DD4C33AA3" class="">6353688DD4C33AA3 - 默认接口账号</dd><dd lay-value="B3CEBA8E2F6BEC0F" class="">B3CEBA8E2F6BEC0F - 默认接口账号</dd><dd lay-value="D90A0703F7E4DF51" class="">D90A0703F7E4DF51 - 默认接口账号</dd><dd lay-value="C72510E98FCDA9A8" class="">C72510E98FCDA9A8 - 默认接口账号</dd></dl></div>
						</div>
			</div>
			<div class="layui-form-item"><label class="layui-form-label">产品：</label>
				<div class="layui-form-mid" style="float:none">黑龙江时时彩</div>
				<input type="hidden" name="lotteryid" value="105">
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">授权期限：</label>
				<div class="layui-input-block">
					<button type="button" class="layui-btn fly-form-btn layui-btn-primary layui-this" data-id="1" data-type="change" data-required="true">月付</button>
					<button type="button" class="fly-form-btn layui-btn layui-btn-primary " data-id="3" data-type="change" data-required="true">季付</button>
					<button type="button" class="fly-form-btn layui-btn layui-btn-primary " data-id="12" data-type="change" data-required="true">年付</button></div>
			</div>
			<div class="layui-form-item"><label class="layui-form-label">您的选择：</label>
				<div class="layui-input-block">
					<div class="layui-form-mid">黑龙江时时彩 - <span id="sqqx">月付</span>授权</div>
				</div>
			</div>
			<div class="layui-form-item"><label class="layui-form-label">所需费用：</label>
				<div class="layui-input-block">
					<div class="layui-form-mid" id="LAY_price" style="font-size:23px;color:#ff5722">￥50.00</div>
					<div class="layui-clear"></div>
				</div>
			</div>
			<div class="layui-form-item"><label class="layui-form-label">支付方式：</label>
				<div class="layui-input-block"><input type="radio" name="pay_type" value="money" title="余额支付" checked=""><div class="layui-unselect layui-form-radio layui-form-radioed"><i class="layui-anim layui-icon"></i><div>余额支付</div></div></div>
			</div>
			<div class="layui-form-item">
				<div class="layui-input-block">
					<input type="hidden" name="time" value="1">
					<button class="layui-btn layui-btn-danger" lay-submit="" lay-filter="orderPay">立即提交</button>
				</div>
			</div>
		</form>
	</div>
</div>
    
</div>

</template>

<script>
export default {
 name: 'Dashboard',
  data () {
    return {
      current: 0,
      userInfo: this.$store.state.auth.userInfo
    }
  },
  created () {
    
    self = this;
  },
  
}
</script>
<style scoped>
   .jcb-main {
       margin: 20px auto;
   }
   .red{color:#ff0000}
</style>
    
