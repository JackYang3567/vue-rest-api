
<template>
   <footer>
        <div class="layui-footer footer footer-index">
                <div class="jcb-main">
                   <p>
                    <router-link to="/about"><font color="#C0C0C0">关于我们</font></router-link>
                     <router-link to="/problem"><font color="#C0C0C0">常见问题</font></router-link>
                    <router-link :to="{ name: 'interfaces'}"><font color="#C0C0C0">接口概述</font></router-link>
                    <router-link :to="{ name: 'trial'}" ><font color="#C0C0C0">免费试用</font></router-link>
                    <router-link to="/contact" ><font color="#C0C0C0">联系我们</font></router-link>
					</p>
                  
                    <font color="#C0C0C0">CopyRight © 2010-2019 GK网</font> <a href="http://www.miibeian.gov.cn" target="_blank"><font color="#C0C0C0">蜀ICP备19033890号</font></a>服务范围：本站仅提供彩票数据查询相关服务，无投注购彩业务。
                   
                </div>
          </div>
    </footer>
</template>

<script>
export default {
  name: 'Footerbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
     .jcb-main {padding-bottom:10px; max-width: 1140px;margin: 0 auto;position: relative;}
     .footer {background-color: #393D49;position:absolute;
     bottom:0;width:100%;height:auto;padding: 0px 0;line-height: 30px;text-align: center;
     color: #666;font-weight: 300;margin-top: 50px;   position: relative;}
     .footer a {padding: 0 5px;}
     p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
     .site-union {margin-top: 10px;color: #999;} 
	 .img-xys {display: inline-block; height: auto; max-width: 100%;}
</style>
