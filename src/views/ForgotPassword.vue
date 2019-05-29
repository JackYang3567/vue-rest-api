<template>
    <div class="layui-main user reg">
        <div class="layui-clear main" style="box-shadow:0 0 10px #ddd">
          <h2 class="page-title">密码找回</h2>
          <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
              <div class="layui-form-item">
                 <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label> 
                <div class="layui-form-item">
                       <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label> 
                        <div class="layui-form-item">
                           <label class="layadmin-user-login-icon layui-icon layui-icon-password"></label> 
                           <input type="text" name="email"
                                  lay-verify="email" 
                                  placeholder="请输入邮箱" 
                                  autocomplete="off" 
                                  class="layui-input" 
                                  maxlength="256">
                        </div>  
						            <div class="layui-form-item">
                            <div class="layui-row">
                                <div class="layui-col-xs7">
                                     <label class="layadmin-user-login-icon layui-icon layui-icon-auz"></label> 
                                     <input class="layui-input" name="verify" 
                                            lay-vertype="tips" 
                                            maxlength="5" 
                                            placeholder="请输入图形验证码" 
                                            type="text" 
                                            lay-verify="required" 
                                            autocomplete="off">
                                  </div>
                            <div class="layui-col-xs5">
                              
                               
                               <div style="margin-left:10px">
                                  <img :src="forgot_captcha" 
                                      @click="getCaptcha" 
                                  alt="点击更新验证码" 
                                  class="layadmin-user-login-codeimg" 
                                  style="border-color:#e6e6e6;border-width:1px;border-style:solid" >
                              </div>
                                
                             </div>
                       </div>
                </div>
					    	<div class="layui-form-item" style="text-align: center;">
                            <button class="layui-btn layui-btn-fluid layui-btn-normal" 
                            lay-submit lay-filter="Retrieve">立即找回</button>
                </div>
             </div>
           </div>
        </div>   
   </div>
</div>



</template>

<script>
import { mapState } from 'vuex'
import {AIP_PREFIX,FORGOT_CAPTCHA} from '../../config.json'
import axios from 'axios';
let self = this;
export default {
  data () {
    return {      
      forgot_captcha: `${FORGOT_CAPTCHA}?t=${Math.random()}`,
      forgotFormData: {type: 1,},    
    }
  },

  computed: mapState({
    users: state => state.users.users
  }),
  created () {
    //this.$store.dispatch('users/getAllUsers')
  },
  methods: {
      restPass: function () { 
      alert('restPass')
      //this.$store.dispatch('auth/loginAction')
      this.$router.push({name:'signin'})
     
    },
    getCaptcha: function () { 
      this.forgot_captcha =  `${FORGOT_CAPTCHA}?t=${Math.random()}`
   }, 
  },
 
  
}
</script>

<style scoped>
  .login {
    min-height: 600px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .input-captcha {
    width: 30%;
  }

  .img-captcha{
    height: 34px;
    border-radius: 5px;
    margin-left: 55%;
    margin-top: -54px;
    margin-bottom: 10px;
  }

</style>
