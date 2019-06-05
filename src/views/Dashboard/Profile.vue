<template>
  <div class="profile">
      <blockquote class="layui-elem-quote layui-quote-nm red" style="margin-top: 10px;">
          <b>注意: 请务必完善您的账户信息！邮箱地址为找回密码,接收API到期通知的唯一途径,请务必填写正确有效的邮箱地址！
          </b>
       </blockquote>
    <div style="border:1px solid #e6e6e6; margin-top: 10px;">
        
        <form class="layui-form" action=""  @submit.prevent="chageInfo">
            
			<div class="layui-form-item">
           	<div class="layui-inline">
                <label class="layui-form-label">手机号码</label>
                <div class="layui-input-inline">
                    <input type="text"  id="phone" v-model.trim="infoFormData.phone"  class="layui-input">
                </div>
            </div>
            </div>
			<br />
			<div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">邮  箱</label>
                    <div class="layui-input-inline">
                        <input type="text"  id="email"  v-model.trim="infoFormData.email" class="layui-input">
                    </div>
                </div>
                </div>
                <br />
			
                <div class="layui-inline">
                    <label class="layui-form-label">Q  Q</label>
                    <div class="layui-input-inline">
                        <input type="text"  id="qq"  v-model.trim="infoFormData.qq_number" class="layui-input">
                    </div>
                </div><br />
              
             <div class="layui-form-item">                       
                   <span class="" style="margin-top:7px;color:red"></span>
              </div>     
			   <div class="layui-inline">
                <label class="layui-form-label"></label>
                <div class="layui-input-inline">
                   <button class="layui-btn"  id="dosubmit" type="submit">立即绑定</button>
                </div>
            </div>
            <div class="layui-form-item">                       
                   <span ></span>
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
 name: 'Dashboard',
  data () {
    return {
      userInfo: this.$store.state.auth.userInfo,
      infoFormData: {mode:'info', 
      uuid: this.$store.state.auth.userInfo.uuid,
      phone: this.$store.state.auth.userInfo.phone,
      email: this.$store.state.auth.userInfo.email,
      qq_number: this.$store.state.auth.userInfo.qq_number,
      }, 
      
    }
  },
   created () {
    // this.$store.dispatch('users/getAllUsers')
     self = this;
  },
   mounted () {
     document.getElementById('tag_1').setAttribute("class","")
  },
  methods: {
      ...mapMutations('auth',[ 'Login' ]),
      chageInfo: function () {
           let formData = JSON.stringify(this.infoFormData);
          return axios.post(`${_API}`,this.infoFormData)
                .then(function (res) {
                    // handle success
                    //console.log("API ===res.data.data====>",res.data)
                    if(res.data.success){
                     console.log("res.data.success====>",res.data)
                      res.data.data.name = self.userInfo.name
                     res.data.data.created_at = self.userInfo.created_at
                     res.data.data.signinTime = self.userInfo.signinTime
                     self.Login(res.data.data)
                     window.location.href = '/dashboard'
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
  },
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
</style>
    
