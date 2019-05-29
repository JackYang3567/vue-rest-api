<template>
  <div class="changepass">
    <blockquote class="layui-elem-quote layui-quote-nm red" style="margin-top: 10px;color:#ff0000">注意: 新版本API接口的token值改为用户自助生成,修改密码不会变更token值.如需变更token请至接口管理页面修改,变更token后180秒生效</blockquote>
    <div style="border:1px solid #e6e6e6; margin-top: 10px;">
        
        <form class="layui-form" action=""  @submit.prevent="chagePass">
            <input type="hidden" v-model.trim="infoFormData.uuid">
			<div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly :value="userInfo.name" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">余额</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly value="0.00" autocomplete="off" class="layui-input red">
                    </div>
                </div>
			<br />
			<br />
            </div>
			<div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">手机号码</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly :value="userInfo.phone" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">邮  箱</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly :value="userInfo.email" class="layui-input">
                    </div>
                </div>
                <br />
                <br />
             </div>
			<div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">Q  Q</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly :value="userInfo.qq_number" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">注册时间</label>
                    <div class="layui-input-inline">
                        <input type="text"  readonly :value="userInfo.created_at" class="layui-input">
                    </div>
                </div>
                <br />
                <br />
             </div>
			<div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">登录时间</label>
                    <div class="layui-input-inline">
                        <input type="text" readonly :value="userInfo.signinTime" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">密码框</label>
                    <div class="layui-input-inline">
                        <input type="password"
                        required
                        v-model.trim="infoFormData.password"
                        lay-verify="required"  
                        placeholder="不修改请留空" 
                        autocomplete="off"
                         class="layui-input">
                    </div>
                    <!--div class="layui-form-mid layui-word-aux">不修改请留空</div-->
                </div>
            
            <div class="layui-inline">
                    <button class="layui-btn" 
                    lay-submit lay-filter="submit" 
                    type="submit">修改密码</button>
                </div>
            </div>
            
        </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import {AIP} from '../../../config.json'
import axios from 'axios';

const _API = `${AIP}/member/index.php/Member/Update`
export default {
 name: 'Changepass',
  data () {
    return {
      userInfo: this.$store.state.auth.userInfo,
      infoFormData: {mode:'pass', uuid:this.$store.state.auth.userInfo.uuid}, 
    }
  },
  created () {
    // this.$store.dispatch('users/getAllUsers')
     self = this;
  },
  methods: {
      ...mapMutations('auth',['LogOut']),
      chagePass: function () { 
           let formData = JSON.stringify(this.infoFormData);
          
           return axios.post(`${_API}`,this.infoFormData)
                .then(function (res) {
                    // handle success
                    //console.log("API ===res.data.data====>",res.data)
                    if(res.data.success){
                     //console.log("res.data.success====>",res.data.success)
                     self.LogOut()
                     window.location.href = '/signin'
                    }else{
                    // self.error = !res.data.success
                    // self.error_message = res.data.error_message
                    // console.log("res.data.data====",res.data.error_message)
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
 form{
       padding: 20px 0 0 0;
 }
</style>
