<template>
 <div class="jcb-main alone-nav">
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
            <li v-for="(lottery, index) in lotterytypes"  
            @click="addClass(index,$event,lottery.Id)" :class="{ 'layui-this':index==current}">
                {{ lottery.type_name  }}
            </li>
                       
        </ul>
        <div class="layui-tab-content" style="min-height: 300px;">
            <div id="name-reload">
                搜索彩种：
                <div class="layui-inline">
                    <input class="layui-input" name="name" id="go-name" autocomplete="off" placeholder="在此输入彩种名称搜索">
                </div>
                <button class="layui-btn" data-type="reload">搜索</button>
            </div>
           
            <div class="layui-tab-item layui-show">
                 <div class="layui-table-box">
                     <div class="layui-table-header">
                        <table class="layui-table" color="#FF0000" lay-data="{ url:'/index/data.html?font=1108f3f5691fe8ab',skin:'line', where:{'c':'1'},page:true, id:'data0', limit:40}" lay-filter="data0">
                            <thead>
                                <tr>
                                    <th :style="{width:'170px'}" lay-data="{field:'name', width:180,align:'center', templet: '#nameTpl'}">彩种名称</th>
                                    <th :style="{width:'130px'}" lay-data="{field:'qh', width:130,align:'center'}">期 号</th>
                                    <th :style="{width:'160px'}" lay-data="{field:'opentime',width:200,align:'center'}">开奖时间</th>
                                    <th :style="{width:'260px'}" lay-data="{field:'num',align:'left',toolbar: '#numTpl'}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开奖号码</th>
                                    <th :style="{width:'260px'}" lay-data="{align:'right', toolbar: '#menu',width:220}"></th>
                                </tr>
                            </thead>
                        </table>
                     </div> 
            
                    <div class="layui-table-body layui-table-main">
                        <table cellspacing="0" cellpadding="0" border="0" class="layui-table" lay-skin="line">
                            <tbody>
                               
                                <tr data-index="0" class=""  v-for="(lottery, index) in curHistorys" >
                                    <td :style="{width:'170px'}" data-field="name" data-key="1-0-0" align="center" :data-content="lottery.name" class="">
                                        <div class="layui-table-cell laytable-cell-1-0-0"> 
                                            <a href="/history/hljssc.html" class="layui-table-link">{{lottery.name}}</a> 
                                        </div>
                                    </td>
                                    <td :style="{width:'130px'}" data-field="qh" data-key="1-0-1" align="center" class="">
                                        <div class="layui-table-cell laytable-cell-1-0-1">{{lottery.expect}}</div>
                                    </td>
                                    <td :style="{width:'160px'}" data-field="opentime" data-key="1-0-2" align="center" class="">
                                        <div class="layui-table-cell laytable-cell-1-0-2">{{lottery.time}}</div>
                                    </td>
                                    <td :style="{width:'260px'}" data-field="num" data-key="1-0-3" align="left" data-off="true" class="">
                                        <div class="layui-table-cell laytable-cell-1-0-3"> 
                                            <div class="open-ball my_webfont">
                                                <span class="ball" v-for=" itcode in lottery.code">{{itcode}}</span>
                                                
                                        </div> 
                                        </div>
                                    </td>
                                    <td :style="{width:'260px'}" data-field="4" data-key="1-0-4" align="right" data-off="true" class="layui-table-col-special">
                                        <div class="layui-table-cell laytable-cell-1-0-4"> 
                                            <a class="layui-btn layui-btn-sm layui-btn-primary" lay-event="more">
                                                <i class="layui-icon layui-anim layui-anim-rotate layui-anim-loop"></i>
                                            </a> 
                                            <router-link class="layui-btn layui-btn-sm layui-btn-normal" :to="{name:'trial'}">试用</router-link> 
                                            <router-link class="layui-btn layui-btn-sm layui-btn-normal" :to="{name:'history',
                                            params:{type_id:lottery.type_id,name:lottery.name,code:lottery.type,range:1,time:'2019-06-05',split:1440}}">
                                                <i class="layui-icon"></i>历史
                                            </router-link> 
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
import { mapState, mapActions, mapMutations } from 'vuex'
import {AIP, AIP_PREFIX, FREE_CAPTCHA} from '../../config.json'
const _API = `${AIP}/lotteryhistory/index.php/Lotteryhistory`
import axios from 'axios';
let self = this;

export default {
 data () {
    return {
      error: false,  
      error_message: '',
      curTypeId: 1,
      curLotterys:[],
      curHistorys:[],
      current:0, 
    }
  },
  computed: {
      ...mapState({
        lotterytypes: state => state.lotterytype.lotterytypes,
        lotterys: state => state.lottery.lotterys,
    }),
  },
  created () {
    this.$store.dispatch('lotterytype/getAllLotterytypes')
    this.$store.dispatch('lottery/getAllLotteries')
    self = this;
  },
  methods: {
    addClass: function (index, event,typeId) { 
        console.log('msg=',index,'===event',event,'===typeId',typeId)
         this.current = index
         this.curTypeId = typeId
         let ele = event.currentTarget;
         this.curLotterys = this.lotterys.filter(lottery => parseInt(lottery.type_id)===parseInt(this.curTypeId)) 
         this.curHistorys=[]
       
          this.curLotterys.map((item) => {
            //  alert(`${_API}?type=${item.code}&range=0&time=0`)
           axios.get(`${_API}?type=${item.code}&range=0&time=0`)
          .then(function (res) {
            // handle success
           
            if(res.data.success){
             console.log("get Historys===res.data.====>",res.data.data)
             let _item = new Object
              _item.name = item.name
              _item.type_id = typeId
              _item.expect = res.data.data.expect
              _item.code = res.data.data.code.split(',')
              _item.time = res.data.data.time
              _item.type = res.data.data.type
              self.curHistorys.push(_item)
            }else{
             
              console.log("res.data.data==error_message==")
            }  
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        } )
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
    top: 14px;
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
.layui-table,.layui-table th{text-align:center;}@font-face{font-family:b1cpapi;
src:url(/public/fonts/1108f3f5691fe8ab.eot);
src:url(/public/fonts/1108f3f5691fe8ab.eot#iefix) format('embedded-opentype'),url(/public/fonts/1108f3f5691fe8ab.woff) format('woff'),
url(/public/fonts/1108f3f5691fe8ab.ttf) format('truetype')}.my_webfont{font-family:b1cpapi!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
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

.layui-table {
     display: block;
     margin: 0px 0;
}
.layui-table th{
    border-width: 0px;
    padding: 12px 15px;
}
.layui-tab-title li {    
    padding: 0 13px;
}
.layui-table-body {
    position: relative;
    overflow: auto;
    margin-right: -9px;
    margin-bottom: -1px;
}
</style>



