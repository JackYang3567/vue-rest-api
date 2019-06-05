<template>
  <div class="recharge">
    <blockquote class="layui-elem-quote layui-quote-nm red" style="margin-top: 10px;">注意: 充值为在线充值,实时到帐。最小充值金额为1 最大充值金额50000.<br>注：如需大额充值或公司入款，请联系在线客服获取银行账户进行快捷大额转账,本页面只适用小额自动到账充值<br><br>
	<font color="#A020F0">由于扫码支付限额和安全限制等原因，导致转账成功率低，如遇支付失败,可联系客服手动转账！</font>
	</blockquote>
   <div style="border:1px solid #e6e6e6; margin-top: 10px;">
	<form class="layui-form"  method="get" @submit.prevent="rechargePay"> <!-- action="/dashboard/alipay" target="_blank">  -->
		<div class="layui-form-item">
			<label class="layui-form-label" style="line-height:52px">充值方式</label>
			<div class="layui-input-block">
					<div class="paylist">
					<div id="banks">
         
						<ul>
							 <li v-for="(paymethod, index) in paymethods"
                                @click="addClass(index,$event,paymethod)"
                                :class="{'cursor':true,'ybh':index==current}"
                                :payid="paymethod.code"  >
                             <img :src="connect(paymethod.icon_path)"
                             :alt="paymethod.name"
                             align="absmiddle">{{paymethod.name}}</li>
						</ul>
						<div style="clear:left"></div>
					</div>
					<input type="hidden" name="paytype" id="paytype" >
				</div>
			</div>
		</div>  
		<div class="layui-form-item">
			<label class="layui-form-label">充值金额</label>
			<div class="layui-input-block">
                <span v-for="(payamount, index) in custPayamounts" >                
				<input type="radio"
                name="sex"
                :value="payamount.val"
                :title="payamount.val"
                lay-filter="switchTest">
                <div  @click="addPayamountClass(index,$event, payamount.val)"
                      :class="{'layui-unselect':true, 'layui-form-radio':true,
                       'layui-form-radioed':index==currentPayamount}">
                    <i :class="{'layui-anim layui-icon':true,
                    'layui-anim-scaleSpring':index==currentPayamount}"></i><div>{{payamount.val}}</div>
                 </div>
                </span>
          </div>
		</div>
		<div class="layui-form-item price" v-show="isCustom">
			<label class="layui-form-label">自定义金额</label>
			<div class="layui-input-inline">
				<input type="number" name="price" value=""
        id="price" placeholder="请输入金额" autocomplete="off" class="layui-input" lay-verify="price">
			</div>
		</div>     
		<div class="layui-form-item">
			<div class="layui-input-block" style="padding-left:120px;">
			   <button class="layui-btn" lay-submit="" lay-filter="submit"><i class="layui-icon"></i>立即充值</button>                
			</div>
		</div>
	  </form>
</div>
		<div style="border:1px solid #e6e6e6; margin-top: 10px;">
		<br>
		  <h3>&nbsp;&nbsp;&nbsp;&nbsp;在线支付如提示限额或提示限制请直接转账至以下账户：</h3>
      <br>&nbsp;&nbsp;&nbsp;&nbsp;工商银行：&nbsp;&nbsp;卡号：<B><font color="#484891">62220855920292068XX</font></B>
    &nbsp;&nbsp;姓名：<B><font color="#484891">王XX</font></B>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支行：成都金堂淮洲支行
    <br>&nbsp;&nbsp;&nbsp;&nbsp;民生银行：&nbsp;&nbsp;卡号：<B><font color="#484891">62261667100080XX</font></B>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名：<B><font color="#484891">王XX</font></B>
    &nbsp;&nbsp;&nbsp;&nbsp;支行：中国民生银行成都清江支行<br><br>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;转账完成后请联系在线客服为您手动添加余额, 请提供如下转账信息,以便客服及时核对并入款：</h3><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 您的GK网用户名或注册邮箱,QQ,手机号等任意一项<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 您的付款时间,付款金额,付款人姓名,或付款账号后4位,付款备注等（也可提供付款截图）<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 例如：我在2019-05-22 09:22通过农业银行（尾号8888）支付了500元到王XX工行卡内，我的网站用户名是123456，请尽快帮我充值<br><br>
	</div>
    </div>
</template>
<script>
import layer from 'layui-layer'
import { mapState } from 'vuex'
import { AIP } from '../../../config.json'
export default {
  data () {
    return {
      error: false,  
      error_message: '',
      apistr: AIP,
      isCustom: false,
      payFormData: {name: '', paytype: '', price: 0, icon_path:'', qrcode_path: '' },
      curPaymethodId: 0,
      current: 0,  
      custPayamounts: [ { id: 1, val: '50' },
            { id: 2, val: '100' },
            { id: 3, val: '135' },
            { id: 4, val: '200' },
            { id: 5, val: '480' },
            { id: 6, val: '自定义' }],
      curPayamountId: 0,
      currentPayamount: 0,
    }
  },
  mounted () {     
    document.getElementById('tag_1').setAttribute("class","")    
	},
  beforeRouteEnter (to, from, next) {
    next()
  },
  computed: {
      ...mapState({
        paymethods: state => state.paymethod.paymethods,
        payamounts: state => state.payamount.payamounts,
  }),
  
  },
   created () {    
    this.$store.dispatch('payamount/getAllPayamounts')
    this.$store.dispatch('paymethod/getAllPaymethods')   
    self = this
  },
  methods:{    
    connect(path) {
        return `${this.apistr}${path}`
    },    
    addClass: function (index, event,obj) { 
        console.log('msg=',index,'===event',event,'===paymethodId',obj.Id)
         document.getElementById('paytype').setAttribute("value",obj.code)
         this.payFormData.paytype = obj.code
         this.payFormData.name = obj.name
         this.payFormData.icon_path = obj.icon_path
         this.payFormData.qrcode_path = obj.qrcode_path
         this.payFormData.Id = obj.Id
         this.current = index
         this.curPaymethodId = paymethodId
         let ele = event.currentTarget 
    },
    addPayamountClass: function (index, event, val) {        
        this.currentPayamount = index
        let ele = event.currentTarget 
        val==='自定义'?  this.isCustom = true : this.isCustom = false
        document.getElementById('price').setAttribute("value",val)
        this.payFormData.price = val       
    },
    rechargePay: function () {
       this.payFormData.price =  document.getElementById('price').value
       let opt = new Object
       opt.icon = 5
       opt.time = 1500  
       let ret = true , msg = ''               
       if(this.payFormData.paytype.trim().length<1){
          msg ='您还没有选择充值方式，请选择' 
          ret = false
         
       }      
       if(this.payFormData.price < 50){
          msg ='您还没有选择充值金额，请选择或自定义输入金额' 
          ret = false
         
       }
       ret? this.$router.push({ name: 'alipay', params:this.payFormData}) :  layer.msg(msg,opt)
     
    }
  }
}
</script>
<style>
  .userinfo{margin-top:15px;}
    .red{color: red}
    .layui-form{ margin-top: 30px;}
    .price{display:block}
	.layui-input-block{ margin-left:10px;}
	.fleft{ float:left;}
	
.paylist{padding:0px;border-top: 0}
#cards{display:none;}

.paylist li{display:inline-block;float:left;width:138px;line-height: 60px;margin:1px 0;border:1px solid #fff;text-align:center}
.paylist .yb,.paylist .ybh{border:1px solid #e67e22;border-radius:3px;}

.paylist {
    padding: 0px;
    border-top: 0;
}
html{height:100%;}
        body{min-height:100%;margin:0;padding:0;position:relative;color:#000000}
            .header {height: 59px;border-bottom: 1px solid #404553;background-color: #393D49;}
            .logo {position: absolute;left: 0;top: 1px;}
            .header .layui-nav {position: absolute;right: 0;top: 0;padding: 0;background: none;}
            .logo  {width: 100%;height: 100%;}
            .alone-banner {height: 120px;text-align: center;font-weight: 300;background-color: #009688;color: #fff;}
            .alone-banner h1 {padding-top: 30px;line-height: 32px;font-size: 30px;font-weight: 300;}
            .alone-banner p {padding-top: 20px;color: #e2e2e2;color: rgba(255,255,255,.8);}
            .jcb-main {padding-bottom:10px; max-width: 1140px;margin: 0 auto;position: relative;}
            .footer {background-color: #393D49;position:absolute;bottom:0;width:100%;height:auto;padding: 0px 0;line-height: 30px;text-align: center;color: #666;font-weight: 300;margin-top: 50px;}
            .footer a {padding: 0 5px;}
            .site-union {margin-top: 10px;color: #999;} 
			.img-xys {display: inline-block; height: auto; max-width: 100%;}
img {
        display: inline; 
}
</style>
