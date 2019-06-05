<template>
  <div class="layui-main user reg">
       <div class="layui-clear main" style="box-shadow:0 0 10px #ddd">
            <h2 class="page-title">用户注册</h2>
              <form @submit.prevent="signUp">
                  <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
                        <div class="layui-form-item">
                            <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label> 
                            <div class="layui-form-item">
                                  <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label> 
                                  <input type="text"  v-model.trim="signupFormData.name" 
                                          required  
                                          lay-verify="required" 
                                          placeholder="请输入帐号/用户名" 
                                          autocomplete="off" 
                                          class="layui-input"  
                                          maxlength="256">
                            </div>
                            <div class="layui-form-item">
                                <label class="layadmin-user-login-icon layui-icon layui-icon-password"></label> 
                                <input type="password"  v-model.trim="signupFormData.pass" 
                                        required lay-verify="required" 
                                        placeholder="请输入密码" 
                                        autocomplete="off" 
                                        class="layui-input">
                             </div>  
						                 <div class="layui-form-item">
                                 <label class="layadmin-user-login-icon layui-icon layui-icon-password"></label> 
                                 <input type="password"  v-model.trim="signupFormData.repass" 
                                        required lay-verify="required" 
                                        placeholder="请重复密码" 
                                        autocomplete="off" 
                                        class="layui-input">
                             </div>
						                 <div class="layui-form-item">
                                  <label class="layadmin-user-login-icon layui-icon layui-icon-cellphone"></label> 
                                  <input type="text"  v-model.trim="signupFormData.phone" 
                                         lay-verify="required|phone" 
                                         placeholder="请输入手机号码" 
                                         autocomplete="off" 
                                         class="layui-input">
                            </div>
						                <div class="layui-form-item">
                                   <label class="layadmin-user-login-icon layui-icon layui-icon-form"></label> 
                                   <input type="text"  v-model.trim="signupFormData.email" 
                                          lay-verify="email" 
                                          placeholder="请输入邮箱" 
                                          autocomplete="off" 
                                          class="layui-input">
                            </div>
						               <div class="layui-form-item">
                                <label class="layadmin-user-login-icon layui-icon layui-icon-login-qq"></label> 
                                <input type="text"  v-model.trim="signupFormData.qq_number" 
                                        required  lay-verify="required" 
                                        placeholder="请输入QQ号码" 
                                        autocomplete="off" 
                                        class="layui-input">
                           </div>
                           <div class="layui-form-item">
                                <div class="layui-row">
                                    <div class="layui-col-xs7">
                                          <label class="layadmin-user-login-icon layui-icon layui-icon-auz"></label> 
                                          <input class="layui-input"  v-model.trim="signupFormData.captcha" 
                                                  maxlength="5" 
                                                  lay-vertype="tips" 
                                                  placeholder="请输入图形验证码" 
                                                  type="text" 
                                                  lay-verify="required" 
                                                  autocomplete="off">
                                    </div>
                                    <div class="layui-col-xs5">
                                          <div style="margin-left:10px">
                                                <img :src="signup_captcha" @click="getCaptcha"  
                                                      alt="点击更新验证码" 
                                                      class="layadmin-user-login-codeimg" 
                                                      style="border-color:#e6e6e6;border-width:1px;border-style:solid" 
                                                      @click.native="this.src=signup_captcha+Math.random()">
                                          </div>
                                    </div>
                                 </div>
                            </div>
                            <div class="layui-form-item" style="margin-bottom:20px">
                                     <input type="checkbox" name="agreement" 
                                            lay-skin="primary" 
                                            title="同意用户协议" 
                                            checked> 
                                    <span class="fr" style="margin-top:7px">已有帐号？ 
                                        <router-link to="/signin" style="color:#029789!important">点击登陆</router-link>
                                    </span>
                            </div>
                             <div class="layui-form-item" v-if="error">                       
                                    <span class="" style="margin-top:7px;color:red">{{ error_message }} </span>
                            </div>     
                            <div class="layui-form-item"  style="text-align: center;">                           
                                <button class="layui-btn layui-btn-fluid layui-btn-normal" 
                                        lay-submit lay-filter="reg">立即注册
                                </button> 
                        </div> 
                   </div>
              </div>  
                </form>
        </div>
   </div>
</template>

<script>
import layer from 'layui-layer'
import { mapState, mapActions, mapMutations } from 'vuex'
import {AIP,SIGNUP_CAPTCHA} from '../../config.json'
import axios from 'axios';
const _API = `${AIP}/member/index.php/Member/Signup`
export default {
 data () {
    return {
      error: false,  
      error_message: '',
      signup_captcha: `${SIGNUP_CAPTCHA}&t=${Math.random()}`,
      signupFormData: {type: 0,},
    }
  },  
   created () {
    // this.$store.dispatch('users/getAllUsers')
     self = this;
  },
  methods: {
     ...mapMutations('auth',[ 'Login' ]),
    
    signUp: function () { 
     //  let formData = JSON.stringify(this.signupFormData);
      console.log("signupFormData===",this.signupFormData)
      //   alert('signin==='+ formData )
      //  alert("API=======>"+_API)
      axios.post(`${_API}`,this.signupFormData)
        .then(function (res) {
          // handle success
        let opt = new Object; 
          if(res.data.success){
             console.log("res.data.data====",res.data.data)
              res.data.data.created_at = res.data.data.signinTime
              self.Login(res.data.data)
              window.location.href = '/dashboard'
            }else{
              self.error = !res.data.success
              self.error_message = res.data.error_message
              opt.icon = 5
              opt.time = 2000;
              layer.msg(res.data.error_message,opt)
            }      
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     // this.$router.push({name:'signin'})
    },
  
    getCaptcha: function () { 
      this.signup_captcha =  `${SIGNUP_CAPTCHA}&t=${Math.random()}`
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
  .user {
    _height: 450px;
    min-height: 700px;
  }
</style>

