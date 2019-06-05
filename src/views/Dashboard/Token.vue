<template>
  <div class="token">
     <div class="layui-main">
        <div class="layui-tab layui-tab-card">
            <div class="layui-card-header layui-bg-gray">TOKEN账号维护&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;（提示：点击对应token右侧的<B style="color:red">接口面板</B>按钮,即可看到您已购买的授权接口）<span class="layui-badge-rim fr pointer refresh" style="margin-top:10px"><i class="layui-icon layui-icon-refresh" style="font-size:12px"></i> 刷新</span></div>
            <div class="layui-card-body">
        
                <table class="layui-table text-display" lay-skin="line" id="hist-body">
                    <thead>
                    <tr>
                        <td><button class="layui-btn layui-btn-normal layui-btn-xs btn-add"><i class="layui-icon">&#xe608;</i>创建</button></td>
                        <td>&emsp;&emsp;账号TOKEN</td>
                        <td>&emsp;&emsp;&emsp;创建时间</td>
                        <td>&emsp;&emsp;&emsp;常用功能</td>
                        <td>&emsp;状态</td>
                        <td>备注<span style="color:#ac2925">(点击可修改)</span></td>
                    </tr>
                    </thead>
                    <tbody id="test2"></tbody>
                </table>
              
                <div class="layui-card-body">
                  <table class="layui-table text-display" lay-skin="line" id="hist-body" style="display: table;">
                    <thead>
                    <tr>
                      <td><button class="layui-btn layui-btn-normal layui-btn-xs btn-add" 
                      @click="createToken()"><i class="layui-icon"></i>创建</button></td>
                      <td>&emsp;&emsp;账号TOKEN</td>
                      <td>&emsp;&emsp;&emsp;创建时间</td>
                      <td>&emsp;&emsp;&emsp;常用功能</td>
                      <td>&emsp;状态</td>
                      <td>备注<span style="color:#ac2925">(点击可修改)</span></td>
                    </tr>
                    </thead>
                    <tbody id="test2">
                      <tr v-for="(actoken, index) in accessTokens"  
                          class="table-text" 
                          data-sign="1269">
                        <td>           
                          <button :class="{'layui-btn':true, 
                                            'layui-btn-warm': parseInt(actoken.status)?true : false, 
                                            'layui-btn-danger':parseInt(actoken.status)?false :true ,
                                            'layui-btn-xs':true, 
                                            'btn-edit': parseInt(actoken.status)?true : false,
                                            'btn-del':parseInt(actoken.status)?false :true}"
                                  @click="changeDel(actoken.Id, actoken.status)">
                             <i class="layui-icon"></i>{{parseInt(actoken.status)? '变更':'删除'}}
                          </button>
                        </td>
                        <td class="text-token">{{actoken.token}}</td>
                        <td>{{actoken.created_at}}</td>
                        <td>
                          <router-link :to="{name:'purchase'}" title="购买和续费"><i class="layui-icon"></i> 购买</router-link> 
                          <router-link :to="{name: 'authinterface', params: { token: actoken.token }}" 
                            v-if="parseInt(actoken.status)?true : false"
                            class="mr3" title="访问接口生成面板">
                            <i class="layui-icon" style="color:red"></i>
                            <b style="color:red">接口面板</b>
                          </router-link>
                        </td>
                        <td><span :class="{'layui-badge-rim':parseInt(actoken.status)? false: true,'layui-badge': parseInt(actoken.status)?true : false, 'layui-bg-blue': parseInt(actoken.status)?true : false}"> {{parseInt(actoken.status)? '正在使用':'等待使用'}}</span></td>
                        <td class="pointer text-descr" title="点击可以修改">
                            <span class="btn-edit-descr" @click="editNotes(actoken.Id)">{{ actoken.notes? actoken.notes:' 默认接口账号'}}</span>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <div class="text-loding" id="data" v-show="!accessTokens.length" >没有接口账号，请点击左上角“创建”</div>
                </div>
                <div class="text-loding" id="data"  v-show="accessTokens.length">正在刷新接口账号信息...</div>
            </div>
        </div>
        <div class="layui-tab layui-tab-card">
            <div class="layui-card-header layui-bg-gray">操作注意事项</div>
            <div class="layui-card-body">
                <div class="layui-fluid">
                    <ol class="items">
                        <li>这里显示您账号下所有的接口账号（TOKEN），你可以对其进行维护</li>
                        <li>已有消费记录的TOKEN不允许被删除，只能变更代码</li>
                        <li>如果需要单独启用新的接口账号（TOKEN），请单击左上角的<abbr lay-tips="创建新的TOKEN账号">创建</abbr>按钮</li>
                        <li>如果您的TOKEN被人盗用，请在您的<span style="color:#01aaed">技术人员到位的情况下</span>再点击对应TOKEN左侧的<abbr lay-tips="变更当前TOKEN账号代码">变更</abbr>按钮</li>
                        <li style="color:red">(重要提醒：TOKEN变更会影响到你现有的业务，请谨慎操作)</li>
						<li>对于存在多个TOKEN的用户，以免混淆，建议使用“备注”，以便于您区分不同TOEKN，例：用途、网站等</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
 import { mapState, mapActions, mapMutations } from 'vuex'

import layer from 'layui-layer'
import {AIP} from '../../../config.json'
const _API = `${AIP}/accesstoken/index.php/AccessToken/Add`
const GETAPI = `${AIP}/accesstoken/index.php/AccessToken` // ?muuid=
const DELAPI = `${AIP}/accesstoken/index.php/AccessToken/Del`
const UPDATEAPI = `${AIP}/accesstoken/index.php/AccessToken/Update`



import axios from 'axios';
let self = this;

export default {
 data () {
    return {
      error: false,  
      error_message: '',
      userInfo: this.$store.state.auth.userInfo,    
      createFormData: { type: 1, },
      accessTokens: [],
      myTokens:[],
      current:0, 
    }
  }, 
  computed: {
      ...mapState({
         accesstokens: state => state.accesstoken.accesstokens     
    }),
   
  },
 
  created () {
     this.getMemberAccessToken()
     document.getElementById('tag_1').setAttribute("class","")
   
      /*
    this.$store.dispatch('lotterytype/getAllLotterytypes')
    this.$store.dispatch('lottery/getAllLotteries')
    */
    
    self = this;
  },
  mounted () {
     // this.getMemberAccessToken()
     document.getElementById('tag_1').setAttribute("class","")
  },
  methods: {
    editNotes: function (id) {
       
     layer.open({
        type: 1
        , title: ['修改TOKEN备注', 'font-size:14px;']
        , offset: 'auto' // 具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
        , id: 'notes' // 防止重复弹出
        , content: `<input type="text" id="notes-input" class="layui-layer-input" style="width: 300px;
                                      height: 40px;
                                      margin: 20px;
                                      border: solid;
                                      border-color: gainsboro;
                                      border-width: 1px;">`
        , btn: ['确定', '取消'] // 只是为了演示
        , btnAlign: 'c' // 按钮居中
        , shade: 0.3 // 0不显示遮罩
        , yes: function(){
           self.changeNotes(id)
        }
        , btn2: function(){
           layer.closeAll()
        }
      })
    },
     getMemberAccessToken: function () {
       this.accessTokens = this.accesstokens.filter(token => parseInt(token.member_id)===parseInt(this.userInfo.singinId))
     },
    createToken: function () { 
        this.createFormData.uuid = this.userInfo.uuid
       // let formData = JSON.stringify(this.createFormData);
         return axios.post(`${_API}`, this.createFormData)
          .then(function (res) {
            // handle success
             let opt = new Object; 
             console.log("createFormData===res.data.====>", res.data)   
            if(res.data.success){
             console.log("createFormData===res.data.====>", res.data.data)
                 
                  opt.icon = 1
                  opt.time = 1000;
                  self.getMemberAccessToken()
                  layer.msg('创建成功!',opt)
                 
            }else{
                   opt.icon = 5
                   opt.time = 1000;
                   layer.msg(res.data.error_message,opt)
            }  
          }).catch(function (error) {
          // handle error
          console.log(error)
          }).then(function () {
            // always executed
          });
    },
    changeDel: function(id,status){
      if(parseInt(status)===0){
        let delObj = new Object
        delObj.id = id
        return axios.post(`${DELAPI}`, delObj)
            .then(function (res) {
              // handle success
              if(res.data.success){
                  let opt = new Object; 
                  opt.icon = 1
                  opt.time = 1000;
                  self.getMemberAccessToken()
                  layer.msg('删除成功!',opt)
                  
              }else{
                console.log("res.data.data==error_message==")
              }  
            }).catch(function (error) {
              // handle error
              console.log(error)
            }).then(function () {
              // always executed
            });
      } else {
        layer.open({
        type: 1
        , icon : 0
        , title: ['操作警告', 'font-size:14px;']
        , offset: 'auto' // 具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
        , id: 'notes' // 防止重复弹出
        , content: `<div type="text" id="notes-input" style="width: 300px;
                                      height: 40px;
                                      margin: 20px;">
                                      TOKEN变更可能会影响到你的业务，请谨慎操作，是否继续？
                                      </div>`
        , btn: ['确定', '取消'] // 只是为了演示
        , btnAlign: 'c' // 按钮居中
        , shade: 0.3 // 0不显示遮罩
        , yes: function(){
           self.changeNotes(id)
        }
        , btn2: function(){
           layer.closeAll()
        }
      })
      }

    },
    changeNotes: function(id) {
       let updateObj = new Object
        updateObj.id = id
        updateObj.notes = document.getElementById('notes-input').value

         let formData = JSON.stringify(updateObj);
       // alert( formData)
        
         return axios.post(`${UPDATEAPI}`, updateObj)
            .then(function (res) {
              // handle success
              if(res.data.success){
                  layer.config({
                  //  time: 2000, //设置两秒后默认关闭
                  });
                  let opt = new Object; 
                  opt.icon = 1
                   layer.alert("修改成功", opt, function () {
                     setTimeout( function() {layer.closeAll()}, 10)
                     self.getMemberAccessToken()
                     layer.closeAll()
                    
                  });
              }else{
                console.log("res.data.data==error_message==")
              }  
            }).catch(function (error) {
              // handle error
              console.log(error)
            }).then(function () {
              // always executed
            });
    },
 } 
}
</script>

<style scoped>
     form{
       padding: 20px 0 0 0;
   }
   .jcb-main {
       margin: 20px auto;
   }
   .red{color:#ff0000}
   .layui-layer-content {
        padding: 20px;
        width: 300px;
        height: 120px;
    }
     .layui-input{ width: 100%}
</style>