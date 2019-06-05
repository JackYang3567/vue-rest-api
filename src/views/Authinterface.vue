<template>
  <div class="jcb-main alone-nav">
    <div class="userinfo">
        <blockquote class="layui-elem-quote">登陆名:
            <B><span class="red">{{userInfo.name}}</span> </B>
            &nbsp;&nbsp;   可用余额:
            <B><span class="red">0.00</span> </B>  
            &nbsp; <router-link :to="{name: 'recharge'}" class="layui-btn layui-btn-sm">
            <i class="layui-icon">&#xe65e;</i>  立即充值</router-link> &nbsp;&nbsp; 最后登陆时间:<B>
                <span class="red">{{userInfo.signinTime}}</span> </B> 
        </blockquote>
    </div>
    <ul class="layui-tab-title">
        <router-link :to="{name:'dashboard'}"  tag="li" active-class="layui-this"><a>个人资料</a></router-link>
        <router-link :to="{name:'recharge'}" tag="li" id="tag_class" active-class="layui-this"><a>授权接口</a></router-link>
        <router-link :to="{name:'token'}" tag="li" active-class="layui-this" ><a>接口管理</a></router-link>
        <router-link :to="{name:'profile'}" tag="li" active-class="layui-this"><a>资料修改</a></router-link>
        <router-link :to="{name:'buylog'}" tag="li" active-class="layui-this"><a>购买记录</a></router-link>
        <router-link :to="{name:'purchaselog'}" tag="li" active-class="layui-this"><a>充值记录</a></router-link>
        <router-link :to="{name:'amountlog'}" tag="li" active-class="layui-this" ><a>资金变动记录</a></router-link>
	    <router-link :to="{name:'recharge'}" tag="li" active-class="layui-this"><a>在线充值</a></router-link>
      
    </ul>
   <div class="layui-tab-content">
        <blockquote class="layui-elem-quote layui-quote-nm">
            接口请求参数说明：<a href="/bbs/article/10.html" target="_blank" style="color:red"><b>点击查看</b></a><br>
            当前接口 Token： <span style="color:red">6353688DD4C33AA3</span>&emsp;&emsp;主接口地址：
            <span style="color:red">api.b1api.com</span>&emsp;&emsp;备用接口地址：
            <span style="color:red">api.b1cp.com</span>
        </blockquote>

            <div class="layui-tab-item layui-show">		 
                <table class="layui-table" lay-data="{ url:'/main/role_data.html?token=6353688DD4C33AA3', page:true, id:'data', limit:15}" lay-filter="data">
                    <thead>
                        <tr>
                            <th lay-data="{field:'lotteryname',width:160, align:'center'}">彩种</th>
                            <th lay-data="{field:'e_name',align:'center',width:160}">别名</th>
                            <th lay-data="{field:'validtime',align:'left',width:280}">有效时间</th>
                            <th lay-data="{align:'center', toolbar: '#menu'}">API</th>
                        </tr>
                    </thead>
                </table>
                <div class="layui-form layui-border-box layui-table-view" lay-filter="LAY-table-1" style=" ">
                    <div class="layui-table-box">
                        <div class="layui-table-header">
                            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
                                <thead>
                                    <tr>
                                        <th data-field="lotteryname" data-key="1-0-0" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0" align="center">
                                                <span>彩种</span>
                                            </div>
                                        </th>
                                        <th data-field="e_name" data-key="1-0-1" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1" align="center">
                                                <span>别名</span>
                                            </div>
                                        </th>
                                        <th data-field="validtime" data-key="1-0-2" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2" align="left">
                                                <span>有效时间</span>
                                            </div>
                                        </th>
                                        <th data-field="3" data-key="1-0-3" class=" layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3" align="center">
                                                <span>API</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="layui-table-body layui-table-main">
                            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
                                <tbody>
                                    <tr data-index="0" class="">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">腾讯分分彩</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">txffc</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2020-04-27 16:34:17</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="1" class="">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">广东11选5</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">gd115</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-10-04 17:28:46</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="2" class="">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">湖南快乐10分</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">hnklsf</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 14:00:54</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="3" class="">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">广西快乐10分</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">gxklsf</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 11:45:02</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="4">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">甘肃快三</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">gsk3</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 11:43:56</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="5">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">河北快三</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">hebk3</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 11:43:29</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="6">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">湖北快三</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">hbk3</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 11:41:23</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a>
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="7">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">北京快三</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">bjk3</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-23 11:39:35</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="8">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">广西快三</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">gxk3</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-07-04 17:30:02</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-index="9">
                                        <td data-field="lotteryname" data-key="1-0-0" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-0">幸运飞艇</div>
                                        </td>
                                        <td data-field="e_name" data-key="1-0-1" align="center" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-1">xyft</div>
                                        </td>
                                        <td data-field="validtime" data-key="1-0-2" align="left" class="">
                                            <div class="layui-table-cell laytable-cell-1-0-2">2019-06-26 16:29:10</div>
                                        </td>
                                        <td data-field="3" data-key="1-0-3" align="center" data-off="true" class="layui-table-col-special">
                                            <div class="layui-table-cell laytable-cell-1-0-3"> 
                                                <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon"> </i>续费</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="show"><i class="layui-icon"></i>IP白名单</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="clear"><i class="layui-icon"></i>清除IP</a> 
                                                <a class="layui-btn layui-btn-sm" lay-event="view"><i class="layui-icon"></i>获取API</a> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                                        
                                        
            </div>
	
   
        </div>
    </div>
  </div>

</template>

<script>
export default {
 name: 'Authinterface',
  data () {
    return {
      current: 0,
      userInfo: this.$store.state.auth.userInfo
    }
  },
  created () {
    
    self = this;
	},
	mounted () {
        document.getElementById('tag_1').setAttribute("class","")
		document.getElementById('tag_class').setAttribute("class","layui-this")
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
    
