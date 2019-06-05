<template>
  <div class="amountlog">
    <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <form class="layui-form layui-form-pane">
                    <div class="layui-form-item layui-form-pane">
                        <div class="layui-inline">
                            <label class="layui-form-label">时间</label>
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
                <table class="layui-table" lay-data="{ url:'/main/amountlog_data.html', page:true, id:'data', limit:15}" lay-filter="data">
                <thead>
                <tr>
                    <th lay-data="{type:'numbers', fixed: 'left'}"></th>
                    <th lay-data="{field:'amount',width:150,align:'center'}">变动金额</th>
                    <th lay-data="{field:'lastamount',width:150,align:'center'}">变动后余额</th>
                    <th lay-data="{field:'addtime',width:200,align:'center'}">变动时间</th>
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
 name: 'Amountlog',
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
		document.getElementById('tag_class').setAttribute("class","layui-this")
	},
  
}
</script>