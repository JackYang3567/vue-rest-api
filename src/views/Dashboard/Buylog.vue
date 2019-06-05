<template>
  <div class="buylog">
     <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <form class="layui-form layui-form-pane">
                    <div class="layui-form-item layui-form-pane">
                        <div class="layui-inline">
                            <label class="layui-form-label">购买时间</label>
                            <div class="layui-input-inline">
                                <input type="text" name="datebegin" class="layui-input" id="datebegin" placeholder="开始日期">
                            </div>
                            <div class="layui-form-mid">-</div>
                            <div class="layui-input-inline">
                                <input type="text" name="dateend" class="layui-input" id="dateend" placeholder="终止日期">
                            </div>
                        </div>
                        <button class="layui-btn layui-btn-sm" lay-submit lay-filter="serach" ><i class="layui-icon">&#xe615;</i> 搜索</button>
                    </div>
                </form>
                <table class="layui-table" lay-data="{ url:'/main/buylog_data.html', page:true, id:'data', limit:15}" lay-filter="data">
                <thead>
                <tr>
                    <th lay-data="{type:'numbers', fixed: 'left'}"></th>
                    <th lay-data="{field:'lotterytype',width:200,align:'center'}">彩种类型</th>
                    <th lay-data="{field:'purchaseday',width:200,align:'center'}">购买时长</th>
                    <th lay-data="{field:'amount',width:200,align:'center'}">金额</th>
                    <th lay-data="{field:'paytime',width:200,align:'center'}">支付时间</th>
                    <th lay-data="{field:'cmark',align:'center'}">备注</th>
                </tr>
                </thead>
                </table>
            </div>
        </div>

  </div>
</template>
<script>
export default {
 name: 'Buylog',
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
	},
  
}
</script>