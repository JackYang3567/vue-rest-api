<template>
    <div class="layui-main user reg">
      <div class="layui-clear main"
           style="box-shadow:0 0 10px #ddd">
        <h2 class="page-title">用户登陆</h2>
           <form class="layui-form" @submit.prevent="signin">
        <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
          <div class="layui-form-item">
               <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label>
               <div class="layui-form-item">
                    <label class="layadmin-user-login-icon layui-icon layui-icon-username"></label>
                    <input type="text" v-model.trim="signinFormData.name"
                           required
                           lay-verify="required"
                           placeholder="请输入帐号(用户名)"
                           autocomplete="off"
                           class="layui-input"
                           maxlength="256">
               </div>
               <div class="layui-form-item">
                    <label class="layadmin-user-login-icon layui-icon layui-icon-password"></label>
                    <input type="password" v-model.trim="signinFormData.pass"
                            required
                            lay-verify="required"
                            placeholder="请输入登陆密码"
                            autocomplete="off"
                            class="layui-input"
                            maxlength="256">
               </div>
              <div class="layui-form-item">
                   <div class="layui-row">
                      <div class="layui-col-xs7">
                        <label class="layadmin-user-login-icon layui-icon layui-icon-auz"></label>
                        <input class="layui-input" v-model.trim="signinFormData.captcha"
                               maxlength="5"
                               lay-vertype="tips"
                               placeholder="请输入图形验证码"
                               type="text"
                               lay-verify="required"
                               autocomplete="off">
                      </div>
                      <div class="layui-col-xs5">
                          <div style="margin-left:10px">
                                <img :src="signin_captcha" @click="getCaptcha"
                                alt="点击更新验证码"
                                class="layadmin-user-login-codeimg"
                                style="border-color:#e6e6e6;border-width:1px;border-style:solid"
                             >
                          </div>
                      </div>
              </div>
          </div>
          <div class="layui-form-item">
              <span class="fl" style="margin-top:7px">没有账号？
                  <router-link style="color:#029789!important" to="/signup">点击注册</router-link>
              </span>
              <span class="fr" style="margin-top:7px">忘记密码？
                  <router-link :to="{name:'forgotpass'}"
                              style="color:#029789!important" >点击找回
                  </router-link>
              </span>
          </div>
          <div class="layui-form-item" v-if="error">
                   <span class="" style="margin-top:7px;color:red">{{ error_message }} </span>
          </div>
          <div class="layui-form-item">
                  <button class="layui-btn layui-btn-fluid layui-btn-normal"
                  lay-submit lay-filter="login" type="submit" >立即登陆</button>
          </div>
     </div>
    </div>
     </form>
   </div>
</div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
import { AIP, SIGNIN_CAPTCHA } from '../../config.json'
import axios from 'axios'

const _API = `${AIP}/member/index.php/Member/Signin`
let self = this
export default {
  data () {
    return {
      error: false,
      error_message: '',
      signin_captcha: `${SIGNIN_CAPTCHA}&t=${Math.random()}`,
      signinFormData: { type: 1 }
    }
  },
  computed: mapState({
    // users: state => state.users.users
  }),
  created () {
    // this.$store.dispatch('users/getAllUsers')
    self = this
  },
  methods: {
    ...mapMutations('auth', [ 'Login' ]),
    signin: function () {
      // let formData = JSON.stringify(this.signinFormData);
      // console.log("signinFormData===",this.signinFormData)
      // axios是response.data里才是数据
      return axios.post(`${_API}`, this.signinFormData)
        .then(function (res) {
          // handle success
          // console.log("API ===res.data.data====>",res.data)
          // resUsers = res.data.data.rows;
          if (res.data.success) {
            self.Login(res.data.data)
            window.location.href = '/'
            // self.$router.push({ path:'/dashboard'})
          } else {
            self.error = !res.data.success
            self.error_message = res.data.error_message
            // console.log("res.data.data====",res.data.error_message)
          }
        }).catch(function (error) {
          // handle error
          console.log(error)
        }).then(function () {
          // always executed
        })
    },
    getCaptcha: function () {
      this.signin_captcha = `${SIGNIN_CAPTCHA}&t=${Math.random()}`
    }
  }
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
