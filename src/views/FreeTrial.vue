<template>
 
   <div class="jcb-main alone-nav"> 
    <form class="layui-form layui-form-pane" @submit.prevent="getFreeApi" style="padding: 30px 0 0 0px;">
      
        <div class="layui-form-item">
           
            <label class="layui-form-label">请选择：</label>
            
            <div  class="layui-input-block">
                <select name="cls" id="cls" lay-verify="required" lay-filter="myselect">
                    <option value="">请选择彩种类型</option>
                     <option v-for="(lottery, index) in lotterytypes" 
                            :value="lottery.Id" >
                        {{ lottery.type_name  }}
                     </option>
                   
                </select>
                <div ref="lotterytype" :class="[layuiUnselect,layuiFormSelect, isActiveType ? layuiFormSelected : '']">
                    <div class="layui-select-title">
                        <input type="text" @click="clickLotteryType()"  ref="lotterytypeval" 
                         placeholder="请选择彩种类型" value="" readonly="" 
                         class="layui-input layui-unselect">
                        <i class="layui-edge"></i>
                    </div>
                    <dl class="layui-anim layui-anim-upbit" style="">
                       <dd lay-value="" 
                           @click="selectedLotteryType(0,$event)" 
                           :class="{ 'layui-this':0==current}">请选择彩种类型</dd>
                        <dd v-for="(lottery, index) in lotterytypes" 
                                    :lay-value="lottery.Id"  
                                    @click="selectedLotteryType(lottery.Id,$event)" 
                                    :class="{ 'layui-this':lottery.Id==current}"
                                    >
                                {{ lottery.type_name  }}
                        </dd>
                       
                    </dl>
                </div>
            </div>
               
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">请选择：</label>
            <div class="layui-input-block">
               <select  lay-verify="required" lay-filter="myselect">
                    <option value="">请选择彩种名称</option>
                     <option v-for="(lottery, index) in curLotterys" 
                            :value="lottery.code" >
                       [{{ lottery.code}}] {{  lottery.name  }}
                     </option>
                   
                </select>
                <div ref="lottery" :class="[layuiUnselect,layuiFormSelect, isActive ? layuiFormSelected : '']">
                    <div class="layui-select-title">
                        <input type="text" @click="clickLottery()"  ref="lotteryval" 
                         placeholder="请选择彩种名称" value="" readonly="" 
                         class="layui-input layui-unselect">
                        <i class="layui-edge"></i>
                    </div>
                    <dl class="layui-anim layui-anim-upbit" style="">
                       <dd lay-value="" 
                           @click="selectedLottery(0,$event)" 
                           :class="{ 'layui-this':0==currentLottery}">请选择彩种名称</dd>
                        <dd v-for="(lottery, index) in curLotterys" 
                                    :lay-value="lottery.code"  
                                    @click="selectedLottery(lottery.Id,$event)" 
                                    :class="{ 'layui-this':lottery.Id==currentLottery}"
                                    >
                                [{{ lottery.code}}] {{ lottery.name }}
                        </dd>
                       
                    </dl>
                </div>

           </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">验证码:</label>
            <div class="layui-input-inline" style="width:300px; ">
                <input type="text" 
                    v-model.trim="freeFormData.captcha" 
                    id="verify" 
                    lay-verify="required" 
                    placeholder="请输入验证码"
                    autocomplete="off" 
                    class="layui-input">
            </div>
            <div class="layui-form-mid layui-word-aux img" style="cursor:pointer">
                <img :src="free_captcha" @click="getCaptcha" 
                alt="点击更新验证码"  /></div>
            <button class="layui-btn layui-btn-normal" style="width: 180px; float:right"  lay-submit lay-filter="submit">获取实时采集试用账号</button>
            </div>
             <div class="layui-form-item" v-if="error">                       
                   <span class="" style="margin-top:7px;color:red">{{ error_message }} </span>
             </div> 
    </form>

    <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">临时帐号信息：</label>
            <div class="layui-input-block" style="height:260px;">
                <textarea name="desc" ref='desc' readonly STYLE="height: 250px; line-height:30px; background: #eeeeee" 
                  placeholder="请点击按钮获取测试帐号,试用时间为120分钟(2小时)；" class="layui-textarea result">

                </textarea>
                </div>
          <div class="layui-tab layui-tab-card">
              <div class="layui-card-header layui-bg-black">功能说明：</div>
               <div class="layui-card-body">
                   <div class="layui-fluid">
                       <ol class="items">
                           <li>当前页面主要为意向用户提供短期的实时开奖接口试用功能；</li>
                           <li>试用服务器并非正式付费服务器，硬件资源有限，请勿过高频率刷新；</li>
                           <li>每次申请的token账号只能试用一个彩种，如需多彩种试用，重复申请即可；</li>
                        </ol>
                    </div>
                </div>
          </div>
          </div>
          </form>

</div>

</template>
<script>

import { mapState, mapActions, mapMutations } from 'vuex'
import {AIP, AIP_PREFIX, FREE_CAPTCHA} from '../../config.json'
import axios from 'axios';

const _API = `${AIP}/lottery/index.php/Lottery/FreeApi`
let self = this;

export default {
 data () {
    return {
      error: false,  
      error_message: '',
      curLotterys:[],
      currentLotteryTypeId: 0,
      freeFormData:{code:''},
      free_captcha: `${FREE_CAPTCHA}&t=${Math.random()}`,
      current:0,  
      currentLottery:0,    
      isActiveType: false,
      isActive: false,
      layuiUnselect:'layui-unselect', 
      layuiFormSelect:'layui-form-select', 
      layuiFormSelected:'layui-form-selected' 
    }
  },
  computed: {
     ... mapState({
         lotterytypes: state => state.lotterytype.lotterytypes,
         lotterys: state => state.lottery.lotterys,
         
    })
  },
  created () {
    this.$store.dispatch('lotterytype/getAllLotterytypes')
    this.$store.dispatch('lottery/getAllLotteries')
    self = this;
  }, 
  methods: {
    clickLotteryType: function () { 
      this.isActiveType = !this.isActiveType
    },
    selectedLotteryType: function (index, event) { 
        console.log('msg=',index,'===event',event)
         this.isActiveType = false
         this.current = index
         let ele = event.currentTarget
         this.$refs.lotterytypeval.value =  ele.innerHTML.trim()
         this.currentLotteryTypeId = ele.attributes['lay-value'].value
         this.$refs.lotterytype.setAttribute("class","layui-unselect layui-form-select") 
         this.curLotterys = this.lotterys.filter(lottery => parseInt(lottery.type_id)===parseInt(this.currentLotteryTypeId)) 
    },
     clickLottery: function () { 
      this.isActive = !this.isActive
    },
    selectedLottery: function (index, event) { 
        console.log('msg=',index,'===event',event)
         this.isActive = false
         this.currentLottery = index
         let ele = event.currentTarget
         this.$refs.lotteryval.value =  ele.innerHTML.trim()
         this.freeFormData.code = ele.attributes['lay-value'].value.trim()
         this.$refs.lottery.setAttribute("class","layui-unselect layui-form-select")         
    },
    getCaptcha: function () { 
      this.free_captcha =  `${FREE_CAPTCHA}&t=${Math.random()}`
    }, 
    getFreeApi: function () {
      let formData = JSON.stringify(this.freeFormData)
          //console.log("signinFormData===",this.signinFormData)
         // alert(formData)
          return axios.post(`${_API}`,this.freeFormData)
          .then(function (res) {
            // handle success
            // console.log("getFreeApi===res.data.====>",res.data)   
            if(res.data.success){
             console.log("getFreeApi===res.data.====>",res.data.data)
            
              let str =  res.data.data.temporary_account.res + ": "
                  str += res.data.data.temporary_account.val + "\n"                
                  str += res.data.data.stop_time.res + ": "
                  str += res.data.data.stop_time.val + "\n"                 
                  str += res.data.data.latest_query_json.res + ":\n "
                  str += res.data.data.latest_query_json.val + "\n"                  
                  str += res.data.data.latest_query_xml.res + ":\n"
                  str += res.data.data.latest_query_xml.val + "\n"
                  str += res.data.data.query_json_by_date.res + ":\n"
                  str += res.data.data.query_json_by_date.val + "\n"
                  str += res.data.data.query_xml_by_date.res + ":\n"
                  str += res.data.data.query_xml_by_date.val + "\n"                
                 self.$refs.desc.innerHTML = str
            }else{
              self.error = !res.data.success
              self.error_message = res.data.error_message
              console.log("res.data.data====",res.data.error_message)
            }  
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
   }
 } 
}
</script>

<style scoped>
 @import "../../public/css/lottery-01.css";
  .img img{width:80px;}
    .layui-form-mid img{width: 190px; height: 37px; margin-top: -8px;}

 .child-view {
	/*position: absolute;*/
	width: 800px;
	margin: 0 auto;
	
  }
  .layui-form-pane .layui-form-label {
    
    padding: 8px 15px;
    height: 38px;
    line-height: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px 0 0 2px;
    color: #000000;
  }
   html{height:100%;}
        body{min-height:100%;margin:0;padding:0;position:relative;}
            .header {height: 59px;border-bottom: 1px solid #404553;background-color: #393D49;}
            .logo {position: absolute;left: 0;top: 1px;}
            .header .layui-nav {position: absolute;right: 0;top: 0;padding: 0;background: none;}
            .logo img {width: 100%;height: 100%;}
            .alone-banner {height: 120px;text-align: center;font-weight: 300;background-color: #009688;color: #fff;}
            .alone-banner h1 {padding-top: 30px;line-height: 32px;font-size: 30px;font-weight: 300;}
            .alone-banner p {padding-top: 20px;color: #e2e2e2;color: rgba(255,255,255,.8);}
            .jcb-main {padding-bottom:10px; max-width: 1140px;margin: 0 auto;position: relative;}
            .footer {background-color: #393D49;position:absolute;bottom:0;width:100%;height:auto;padding: 0px 0;line-height: 30px;text-align: center;color: #666;font-weight: 300;margin-top: 50px;}
            .footer a {padding: 0 5px;}
            .site-union {margin-top: 10px;color: #999;} 
			.img-xys {display: inline-block; height: auto; max-width: 100%;}

</style>