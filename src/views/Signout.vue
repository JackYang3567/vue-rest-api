<template>
    <div class="layui-main user reg">
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
// import Cookie from 'vue-cookies'
// import axios from 'axios'
let self = this
export default {
data () {
    return {
       loginName: '',
       token: ''
    }
  },
  created () {
    // this.$store.dispatch('users/getAllUsers')
     self = this;
  },
  mounted(){
     this.init()
      // window.location.href = '/signin' 
  },
  methods: {
    ...mapMutations('auth',['LogOut']),
    init: function() {
        this.LogOut() 
        window.location.href = '/signin' 
    },
    
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
