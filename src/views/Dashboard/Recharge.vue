<template>
  <div class="recharge">
    <blockquote class="layui-elem-quote layui-quote-nm red" style="margin-top: 10px;">注意: 充值为在线充值,实时到帐。最小充值金额为1 最大充值金额50000.<br>注：如需大额充值或公司入款，请联系在线客服获取银行账户进行快捷大额转账,本页面只适用小额自动到账充值<br><br>
	<font color="#A020F0">由于扫码支付限额和安全限制等原因，导致转账成功率低，如遇支付失败,可联系客服手动转账！</font>
	</blockquote>
    <div style="border:1px solid #e6e6e6; margin-top: 10px;">
        
        <form class="layui-form" action="/main/alipay.html" method="get" target="_blank">
            <div class="layui-form-item">
                <label class="layui-form-label" style="line-height:52px">充值方式</label>
                <div class="layui-input-block">
						<div class="paylist">
                        <div id="banks">
                            <ul>
							    <li payid="zfb" class="cursor ybh"> <img src="//127.0.0.1:8484/index/images/method-ali.png" alt="支付宝支付" align="absmiddle">支付宝支付</li>
								 <!--li payid="zfb2" class="cursor"> <img src="/resource/images/span-zfb.png" alt="支付宝官方" align="absmiddle">支付宝(官方)</li-->
                                <!--li payid="wx" class="cursor"><img src="/resource/images/span-wx.png" alt="微信支付" align="absmiddle">微信支付</li-->
                                <li payid="wx2" class="cursor" style="width: 145px"><img src="//127.0.0.1:8484/index/images/method-wx.png" alt="微信支付官方" align="absmiddle">微信支付(官方)</li>
                                <li payid="qq" class="cursor"> <img src="//127.0.0.1:8484/index/images/method-qq.png" alt="QQ钱包支付" align="absmiddle">QQ钱包支付</li>
                                <li payid="qq2" class="cursor"> <img src="//127.0.0.1:8484/index/images/method-qq.png" alt="QQ钱包官方" align="absmiddle">QQ钱包(官方)</li>
                            </ul>
                            <div style="clear:left"></div>
                        </div>
                        <input type="hidden" name="paytype" id="paytype" value="zfb" />                 

                    </div>
                </div>
				  
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">充值金额</label>
                <div class="layui-input-block">                     
                    <input type="radio" name="sex" value="50" title="50"  lay-filter="switchTest">
                    <input type="radio" name="sex" value="100" title="100" lay-filter="switchTest">
					<input type="radio" name="sex" value="135" title="135" lay-filter="switchTest">
                    <input type="radio" name="sex" value="200" title="200" lay-filter="switchTest">
					<input type="radio" name="sex" value="480" title="480" lay-filter="switchTest">
                    <input type="radio" name="sex" value="" title="自定义" lay-filter="switchTest">                   
                </div>
            </div>
            <div class="layui-form-item price">
                <label class="layui-form-label">自定义金额</label>
                <div class="layui-input-inline">  
                    <input type="number" name="price" value="" id="price" placeholder="请输入金额" autocomplete="off" class="layui-input" lay-verify="price">
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block" style="padding-left:120px;">
                   <button class="layui-btn" lay-submit lay-filter="submit"><i class="layui-icon">&#xe65e;</i>    立即充值</button>                
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
export default {

  beforeRouteEnter (to, from, next) {
      // ... 
  
   next()
  },
}
</script>

<style>
.paylist {
    padding: 0px;
    border-top: 0;
}
.paylist li {
    display: inline-block;
    float: left;
    width: 138px;
    line-height: 60px;
    margin: 1px 0;
    border: 1px solid #fff;
    text-align: center;
}
</style>
