<template>
  <div class="token">
     <div class="layui-main">
        <div class="layui-tab layui-tab-card">
            <div class="layui-card-header layui-bg-gray">TOKEN账号维护&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;（提示：点击对应token右侧的<B style="color:red">接口面板</B>按钮,即可看到您已购买的授权接口）<span class="layui-badge-rim fr pointer refresh" style="margin-top:10px"><i class="layui-icon layui-icon-refresh" style="font-size:12px"></i> 刷新</span></div>
            <div class="layui-card-body">
                <table class="layui-table text-display" lay-skin="line" id="hist-body">
                    <thead>
                    <tr>
                        <td><button class="layui-btn layui-btn-normal layui-btn-xs btn-add"><i class="layui-icon">&#xe608;</i>创建</button></td>
                        <td>&emsp;&emsp;账号TOKEN</td>
                        <td>&emsp;&emsp;&emsp;创建时间</td>
                        <td>&emsp;&emsp;&emsp;常用功能</td>
                        <td>&emsp;状态</td>
                        <td>备注<span style="color:#ac2925">(点击可修改)</span></td>
                    </tr>
                    </thead>
                    <tbody id="test2"></tbody>
                </table>
                <div class="text-loding" id="data">正在刷新接口账号信息...</div>
            </div>
        </div>
        <div class="layui-tab layui-tab-card">
            <div class="layui-card-header layui-bg-gray">操作注意事项</div>
            <div class="layui-card-body">
                <div class="layui-fluid">
                    <ol class="items">
                        <li>这里显示您账号下所有的接口账号（TOKEN），你可以对其进行维护</li>
                        <li>已有消费记录的TOKEN不允许被删除，只能变更代码</li>
                        <li>如果需要单独启用新的接口账号（TOKEN），请单击左上角的<abbr lay-tips="创建新的TOKEN账号">创建</abbr>按钮</li>
                        <li>如果您的TOKEN被人盗用，请在您的<span style="color:#01aaed">技术人员到位的情况下</span>再点击对应TOKEN左侧的<abbr lay-tips="变更当前TOKEN账号代码">变更</abbr>按钮</li>
                        <li style="color:red">(重要提醒：TOKEN变更会影响到你现有的业务，请谨慎操作)</li>
						<li>对于存在多个TOKEN的用户，以免混淆，建议使用“备注”，以便于您区分不同TOEKN，例：用途、网站等</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
