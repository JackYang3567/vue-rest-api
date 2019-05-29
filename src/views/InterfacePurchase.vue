<template>
  <div class="jcb-main alone-nav">
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
          <ul class="layui-tab-title"> 
            <li v-for="(lottery, index) in lotterytypes"  
                @click="addClass(index,$event)"  
                :class="{ 'layui-this':index==current}">
                {{ lottery.type_name  }}
            </li>
           
        </ul>
        
        <div class="layui-tab-content" style="min-height: 300px;">
            <div id="name-reload">
                <div class="layui-inline">
                    <input class="layui-input" name="name" id="go-name"
                     autocomplete="off" placeholder="在此输入彩种名称搜索">
                </div>
                <button class="layui-btn" data-type="reload">搜索</button>
            </div>
            <div class="layui-tab-item layui-show">
                <table class="layui-table" 
                lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', 
                where:{'c':'1'},page:true, id:'data0', limit:40}" 
                lay-filter="data0">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
             </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'3'},page:true, id:'data1', limit:40}" lay-filter="data1">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'6'},page:true, id:'data2', limit:40}" lay-filter="data2">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'7'},page:true, id:'data3', limit:40}" lay-filter="data3">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'8'},page:true, id:'data4', limit:40}" lay-filter="data4">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'9'},page:true, id:'data5', limit:40}" lay-filter="data5">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
                        <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'4'},page:true, id:'data6', limit:40}" lay-filter="data6">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
             <div class="layui-tab-item ">
                <table class="layui-table" lay-data="{ url:'/index/data.html?font=673936ef02935e32',skin:'line', where:{'c':'5'},page:true, id:'data7', limit:40}" lay-filter="data7">
                    <thead>
                        <tr>                  
                            <th lay-data="{field:'name', width:200,align:'center'}">彩种名称</th>
                            <th lay-data="{field:'month_amount', width:200,align:'center'}">月付价格（元）</th>
                            <th lay-data="{field:'quarter_amount',width:200,align:'center'}">季付价格（元）</th>
                            <th lay-data="{field:'year_amount',align:'center'}">年付价格（元）</th>
                            <th lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                        </tr>
                    </thead>
                </table>
            </div>
         </div>
      </div> 
  </div>

</template>
<script>

import { mapState} from 'vuex'

let self = this;

export default {
 data () {
    return {
      current:0,     
    }
  },
  computed: mapState({
    lotterytypes: state => state.lotterytype.lotterytypes
  }),
  created () {
    this.$store.dispatch('lotterytype/getAllLotterytypes')
  },
  methods: {
    addClass: function (index, event) { 
        console.log('msg=',index,'===event',event)
         this.current = index
         let el = event.currentTarget;
    },
 } 
}
</script>
<style scoped>
 .layui-layer{width:500px;text-align:center;}
    .layui-table-cell {min-height: 35px;line-height: 35px;height: auto}
    .jcb-main .layui-tab ul{text-align: center}
    .jcb-main .layui-tab li{border:solid 1px #e2e2e2;margin-left: 5px; border-bottom: none}
    .layui-this{background: #1E9FFF;color: #F0F0F0 !important;}
    .yourclass{border:solid 1px #009688}

    s{width: 32px;height: 32px; display: block; float: left;margin:1px;  }
    .layui-tab-content{position: relative;}
    #name-reload{
        position: absolute;
        z-index: 10;
        right: 25px;
        top: 25px;
        color: #727272;
    }
    .layui-table .open-ball span {
        background: #1E9FFF;
        border-radius: 16px;
        width: 28px;
        line-height: 28px;
        height: 28px;
        color: #fff;
        font-style: normal;
        margin: 2px;
        display: inline-block;
        text-align: center;
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
