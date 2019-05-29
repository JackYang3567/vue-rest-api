<template>
  <div>
  <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
  <Slider />
     <HelloWorld  msg="a vue.js app" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  data () {
    return {
      show: true,
      
    }
  },
  computed: {
    increment () {
      return this.$store.commit('increment')
    },
    count () {
      return this.$store.state.count
    }
  },
  components: {
    HelloWorld,
    Slider
  }
}
</script>

<style scoped>
            .fade-enter-active, .fade-leave-active {
              transition: opacity .5s
            }
            .fade-enter, .fade-leave-active {
              opacity: 0
            }
            .userinfo{margin-top:15px;}
            .red{color: red}
            .layui-form{ margin-top: 30px;}
          .site-idea{margin: 20px 0; font-size: 0; text-align: center; font-weight: 300;}
          .site-idea li{display: inline-block; vertical-align: top; *display: inline; *zoom:1; font-size: 14px; }
          .site-idea li{width: 298px; height: 150px; padding: 30px; line-height: 24px; margin-left: 30px; border: 1px solid #d2d2d2; text-align: left;}
          .site-idea li:first-child{margin-left: 0}
          .site-idea .layui-field-title{border-color: #d2d2d2}
          .site-idea .layui-field-title legend{margin: 0 20px 20px 0; padding: 0 20px; text-align: center;}
          .fr {float: right;}
          @media screen and (max-width: 750px){
          .site-idea{margin: 20px 0;}
            .site-idea li{margin: 0 0 20px 0; width: 100%; height: auto; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}
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
