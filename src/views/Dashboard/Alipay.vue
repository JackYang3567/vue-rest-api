<template>
     <div class="layui-main user reg">
      <div class="layui-clear main"
           style="box-shadow:0 0 10px #ddd">
  
    <h1 class="mod-title">
        <span class="ico_log ico-1"></span>
    </h1>

    <div class="f_m3">
        <div class="order">
        </div>
        <div class="amount" id="money">￥200.00</div>
        <div class="qrcode-img-wrapper" data-role="qrPayImgWrapper">
            <div data-role="qrPayImg" class="qrcode-img-area">
                <div class="ui-loading qrcode-loading" data-role="qrPayImgLoading" style="display: none;">加载中</div>
                <div style="position: relative;display: inline-block; text-align: center;">
                    <img id="show_qrcode" alt="加载中..." src="/public/images/Ali_QrCode.png"   style="display: block; width:50%">
                 </div>
            </div>


        </div>
        
        <div class="detail detail-open" id="orderDetail">
            <div class="sp_n propti">
                <p>1、请使用支付宝扫一扫 </p>
                <p>2、扫描二维码完成支付</p>
             <h1>付款后自动到账 未到账可联系我们</h1>
            </div>

            <div class="f_ar">
                <form id="payform">
                <div class="m_at">
                    <span>会员账号</span>
                    <input type="text" class="select_ipt" readonly name="name" id="name" placeholder="(填写您的会员账号，否则无法即时到账)" onpaste="return false" onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\_]/g,'')">
                    <span class="copy_color"><a href="javascript:;" @click="copyInputText('name')">复制</a> </span>
                </div>
                <div class="m_at">
                    <span>存款额度</span>
                    <input type="text" class="select_ipt" readonly name="price" id="price" placeholder="100.0-3000.0" onkeyup="value=this.value.replace(/\D+/g,'')">
                    <span class="copy_color"><a href="javascript:;" @click="copyInputText('price')">复制</a> </span>
                </div>
                <div class="m_at">
                    <span>转账单号</span>
                    <input type="text" class="select_ipt"  name="orderid" id="orderid" placeholder="(输入您转账单号的最后4位数字)" onkeyup="value=this.value.replace(/\D+/g,'')">
                    <span class="copy_color"><a href="javascript:;" @click="copyInputText('orderid')">复制</a> </span>
                </div>
                <div class="m_at">
                    <span>转账时间</span>
                    <input type="text" class="select_ipt"  name="time" id="time" placeholder="(输入您转账时的时间，如2019-06-05 12:30:22)" >
                    <span class="copy_color"><a href="javascript:;" @click="copyInputText('time')">复制</a> </span>
                </div>

                <input type="hidden" class="select_ipt" name="method" id="method" value="4">
                </form>
                <div class="f_m4"><a href="javascript:;" @click="btnOK_zf_onclick()">确认支付</a></div>
            </div>
            <div class="sp_n">
                <h3>温馨提示</h3>
                <p><span>1、</span>为了避免掉单情况的发生，请您在支付完成后，等待"支付成功"页面跳转出来后再关闭页面，以免掉单。</p>
                <p><span>2、</span>支付未到账？无法支付？请<font color="#0000FF"><a target="_blank" href="" style="text-decoration: none">联系在线客服</a></font>进行咨询。</p>
            </div>
        </div>

        <div class="tip-text">
        </div>


    </div>
   

</div>
</div>

</template>
<script>

import layer from 'layui-layer'
import { mapState, mapMutations } from 'vuex'
import { AIP } from '../../../config.json'
import axios from 'axios'

const _API = `${AIP}/payment/index.php/Payment/Add`
let self = this
export default {
  data () {
    return {
      error: false,
      error_message: '',
      apistr: AIP,
      payFormData: {},
      userInfo: this.$store.state.auth.userInfo,
     /* payIconPath: '',
      paymethodName: '',
      paytype: '',
      price: 0,
      qrcodePath: '',
      */
    }
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {
          console.log("to.params====",to.params)
           // 'pay_account_four','time'
         
          vm.payFormData.member_id = vm.userInfo.singinId
          vm.payFormData.amount = to.params.price
          vm.payFormData.payer = vm.userInfo.name
          vm.payFormData.method = to.params.Id

           document.getElementById('price').setAttribute("value",to.params.price)
           document.getElementById('money').innerHTML = '￥'+ to.params.price
           document.getElementById('name').setAttribute("value",vm.userInfo.name)
           document.getElementById('method').setAttribute("value", to.params.Id)
           
           document.getElementById('show_qrcode').setAttribute("src",vm.connect(to.params.qrcode_path))
           
         // vm.currentLotteryTypeId = to.params.type_id
         // vm.getLotteyHistory(to.params)
     })    
  },
  computed: mapState({
    // users: state => state.users.users
  }),
  created () {
  
    // this.$store.dispatch('users/getAllUsers')
    self = this
  },
 
  methods: {
     getValByElementId(id) {
         return document.getElementById(id).value
    },
     connect(path) {
         return `${this.apistr}${path}`
     },
     copyInputText(id){
         return document.getElementById(id).value
     },
     btnOK_zf_onclick(){
        let opt = new Object
        opt.icon = 5
        opt.time = 1500  
        let ret = true , msg = '' 
        this.payFormData.pay_account_four = this.getValByElementId('orderid')
        this.payFormData.time = this.getValByElementId('time')              
        if(this.payFormData.pay_account_four.trim().length<1){
            msg ='输入您转账单号的最后4位数字' 
            ret = false
            
        }      
        if(this.payFormData.time < 1){
            msg ='输入您转账时的时间，如2019-06-05 12:30:22' 
            ret = false
            
        }
        if(!ret){
            layer.msg(msg,opt)
        } else {
           // let formData = JSON.stringify(this.payFormData);  
            // alert(formData)
              return axios.post(`${_API}`, this.payFormData)
                .then(function (res) {
                // handle success
               
                console.log( "====111===res.data===",res.data)
                if (res.data.success) {
                     opt.icon = 1
                      opt.time = 2000;
                    layer.msg('充值成功！',opt)
                } else {
                    opt.time = 2000;
                    layer.msg(res.data.error_message,opt)
                }
                }).catch(function (error) {
                // handle error
                console.log(error)
                }).then(function () {
                // always executed
                }) 
        }
      
     
        
         
     // 'member_id','amount', 'payer','pay_account_four','method','time'
    }
  }
}
</script>

<style scoped>
.user .main {
    top: 20px;
    min-height: 200px;
    padding: 5% 5% 5% 5%;
    background: #fff;
    margin: 0 auto;
    max-width: 60%;
}

.amount {
   font-size: 48px;
    margin-top: 0;
    width: 100%;
    text-align: center;
}
.propti {
   font-size: 20px;
    margin-top: 0;
    width: 100%;
    text-align: center;
}
* {
    margin: 0;
    padding: 0;
}

html, body {
    -webkit-text-size-adjust: none;
}

body, nav, dl, dt, dd, p, h1, h2, h3, h4, ul, ol, li, input, button, textarea, footer {
    margin: 0;
    padding: 0
}

.dis {
    display: none;
}

em, i {
    font-style: normal;
}

body {
    font-size: 14px;
    font-family: "微软雅黑";
    color: #333;
    background: #fff;
    -webkit-text-size-adjust: none;
    min-width: 320px;
    overflow-x: hidden;
    position: relative;
    margin-bottom: 55px;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%
}

form {
    display: inline
}

ul, ol {
    list-style: none
}

a {
    text-decoration: none;
    color: #333
}

    a:hover, a:active, a:focus {
        color: #000;
        text-decoration: none;
    }

    a:active {
        color: #aaa;
    }

.clear {
    clear: both;
}

img {
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}

button, input, select, textarea {
    font-size: 100%;
    vertical-align: middle;
    outline: none;
}

textarea {
    resize: none
}

button, input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button
}

    button::-moz-focus-inner, input::-moz-focus-inner {
        padding: 0;
        border: 0
    }

table {
    border-collapse: collapse;
    border-spacing: 0
}

.nobg {
    background: none !important;
}

.nobr {
    border-bottom: none !important;
}

.ma_le {
    margin-left: 0 !important;
}

/*全局样式*/
.bod {
    width: 100%;
    float: left;
}

.header {
    width: 100%;
    float: left;
}

    .header img {
        width: 100%;
    }

/*焦点图*/
.swipe {
    width: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    margin: 0 auto
}

.swipe-wrap {
    overflow: hidden;
    position: relative;
}

    .swipe-wrap > div {
        float: left;
        width: 100%;
        position: relative;
    }

.swipe_pic {
    position: relative;
    overflow: hidden;
    background-color: #efefef;
    background-position: center center;
    background-size: 60px auto;
    background-repeat: no-repeat;
}

    .swipe_pic img {
        width: 100%;
    }

.swipe_num {
    position: absolute;
    right: 43%;
    bottom: 10px;
}

    .swipe_num li {
        float: left;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        font-size: 0;
        text-indent: 999em;
        background: #fff;
        margin: 0 5px;
        overflow: hidden
    }

        .swipe_num li.active {
            width: 10px;
            height: 10px;
            border-radius: 5px;
        }

        .swipe_num li.active {
            background: #7c7c7c;
            box-shadow: 0 0 2px #7c7c7c;
        }



.td_f {
    width: 96%;
    float: left;
    height: 40px;
    z-index: 99999;
    margin: 5px 0 5px 2%;
}

    .td_f a {
        height: 30px;
        line-height: 30px;
        width: 85%;
        float: left;
        overflow: hidden;
    }

.so_p {
    float: left;
    width: 10%;
    color: #ffa32d;
    font-size: 14px;
}

    .so_p img {
        margin-bottom: -3px;
        margin-right: 3px;
    }

.m_at {
    width: 100%;
    float: left;
    padding: 10px 1% 10px 1%;
}

    .m_at span {
        width:20%;
        padding-left: 2%;
        line-height: 35px;
        color: #000;
        float: left;
    }

    .m_at span > a {
        color: #08c;
    }
.select_ipt {
    width: 50%;
    float: left;
    height: 35px;
    line-height: 35px;
    color: #979696;
    font-size: 14px;
    padding-left: 2%;
    border-radius: 5px;
    background: none;
    border: 1px solid #e5e5e5;
}


.regular-radio {
    display: none;
}

    .regular-radio + label {
        float: right;
        margin: 10px 20% 0 0;
        -webkit-appearance: none;
        background-color: #fafafa;
        border: 1px solid #f9496f;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
        padding: 9px;
        border-radius: 50px;
        display: inline-block;
        position: relative;
    }

    .regular-radio:checked + label:after {
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50px;
        position: absolute;
        top: 3px;
        background: #f9496f;
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.3);
        text-shadow: 0px;
        left: 3px;
        font-size: 32px;
    }

    .regular-radio:checked + label {
        background-color: #fff;
        color: #f9496f;
        border: 1px solid #f9496f;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1), inset 0px 0px 10px rgba(0,0,0,0.1);
    }

.f_m1 {
    width: 70%;
    float: left;
    padding: 10px 5% 10px 5%;
}

.f_m2 {
    width: 90%;
    float: left;
    padding: 10px 5% 10px 5%;
    border-bottom: 1px solid #e5e5e5;
}

    .f_m2 p {
        width: 85%;
        float: left;
    }

        .f_m2 p img {
            float: left;
            width: 20%;
            margin-right: 3px;
            margin-top: 2px;
        }

        .f_m2 p span {
            display: block;
            color: #403a38;
        }

        .f_m2 p em {
            display: block;
            color: #757474;
            font-size: 12px;
        }

.f_m3 {
    width: 90%;
    float: left;
    padding: 10px 5% 10px 5%;
    border-bottom: 1px solid #e5e5e5;
}

    .f_m3 span {
        float: left;
        margin-right: 5px;
        line-height: 35px;
        color: #2f2523;
    }

.content {
    width: 100%;
    margin: 0 auto;
}

.f_m3 img {
    display: block;
    width: 100%;
    max-width: 100%;
}


.f_m4 {
    width: 90%;
    float: left;
    padding: 10px 5% 10px 5%;
   
}

    .f_m4 a {
        width: 100%;
        float: left;
        background: #a38362;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        border-radius: 10px;
    }

.sp_n {
    width: 90%;
    float: left;
    padding: 10px 5% 10px 5%;
   
}

    .sp_n h3 {
        text-align: center;
        font-size: 20px;
        color: #fa5b16;
    }

        .sp_n h3 img {
            margin-right: 5px;
            font-weight: normal;
        }

    .sp_n p {
        margin: 10px 0;
        color: #848483;
    }

        .sp_n p span {
            
                float: left;
    top: -9px;
    position: relative;

        }

        .sp_n p em {
            width: 90%;
            float: left;
        }

.foot {
    width: 100%;
    float: left;
    height: 35px;
    line-height: 35px;
    font-size: 12px;
    background: #3a3530;
    color: #fffefe;
    text-align: center;
}

.tips-plane {
    position: fixed;
    top: 10px;
    left: 10px;
    right: 10px;
    background-color: #fff;
    border-radius: 8px;
    height: auto;
    font-size: 16px;
    padding: 20px;
    box-shadow: 0 0 8px rgb(0,0,0);
    text-align: left;
    color: #f00;
    z-index: 9999;
}

.tips-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ccc;
}

.tips-plane .tips {
    text-align: left;
    font-size: 18px;
}
</style>
