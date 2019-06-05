<template>
    <div class="jcb-main alone-nav">
    <div class="layui-tab layui-tab-card">
        <div class="layui-card-header trend-tab">
            <form class="layui-form">
                <div class="layui-inline">
                    <label class="layui-form-label1">请选择：</label>
                    <div class="layui-input-block1">
                        <select name="cls" id="cls" lay-verify="required" lay-filter="myselect">
                    <option value="">请选择彩种类型</option>
                     <option v-for="(lottery, index) in lotterytypes" 
                            :value="lottery.Id" >
                        {{ lottery.type_name  }}
                     </option>
                   
                </select>
                <div ref="lotterytype" :class="[layuiUnselect,layuiFormSelect, isActiveType ? layuiFormSelected : '']">
                    <div class="layui-select-title">
                        <input type="text" @click="clickLotteryType()"  ref="lotterytypeval" 
                         placeholder="请选择彩种类型" value="" readonly="" 
                         class="layui-input layui-unselect">
                        <i class="layui-edge"></i>
                    </div>
                    <dl class="layui-anim layui-anim-upbit" style="">
                       <dd lay-value="" 
                           @click="selectedLotteryType(0,$event)" 
                           :class="{ 'layui-this':0==current}">请选择彩种类型</dd>
                        <dd v-for="(lottery, index) in lotterytypes" 
                                    :lay-value="lottery.Id"  
                                    @click="selectedLotteryType(lottery.Id,$event)" 
                                    :class="{ 'layui-this':lottery.Id==current}"
                                    >
                                {{ lottery.type_name  }}
                        </dd>
                       
                    </dl>
                </div>
                    </div>
                </div>

                <div class="layui-inline">
                    <label class="layui-form-label1">请选择：</label>
                    <div class="layui-input-block1">
                        <select  lay-verify="required" lay-filter="myselect">
                    <option value="">请选择彩种名称</option>
                     <option v-for="(lottery, index) in curLotterys" 
                            :value="lottery.code" >
                       [{{ lottery.code}}] {{  lottery.name  }}
                     </option>
                   
                </select>
                <div ref="lottery" :class="[layuiUnselect,layuiFormSelect, isActive ? layuiFormSelected : '']">
                    <div class="layui-select-title">
                        <input type="text" @click="clickLottery()"  ref="lotteryval" 
                         placeholder="请选择彩种名称" value="" readonly="" 
                         class="layui-input layui-unselect">
                        <i class="layui-edge"></i>
                    </div>
                    <dl class="layui-anim layui-anim-upbit" style="">
                       <dd lay-value="" 
                           @click="selectedLottery(0,$event)" 
                           :class="{ 'layui-this':0==currentLottery}">请选择彩种名称</dd>
                        <dd v-for="(lottery, index) in curLotterys" 
                                    :lay-value="lottery.code"  
                                    @click="selectedLottery(lottery.Id,$event)" 
                                    :class="{ 'layui-this':lottery.Id==currentLottery}"
                                    >
                                 {{ lottery.name }}
                        </dd>
                       
                    </dl>
                </div>
                    </div>
                </div>
                <div class="fr time">
                    <div class="fl day-a">
                          <a v-for="(day, index) in lastThreeDays"
                          href="javascript:;"
                          :data-date="dateTime(day.date)"                     
                        @click="addDayClass(index,$event)" :class="[ 'AwardDiff',index==currentDay ? 'active':'']">
                {{ day.title  }}
               
            </a>
                      
                    </div>
                    <div class="filter-time fr">
                        <span>按日期</span> 
                        <input type="text" placeholder="请选择日期" 
                        class="text kc-calendar" id="dateSelect" 
                        @click="laydate({ istime: true, format: 'YYYY/MM/DD hh:mm:ss' })" 
                        value="2019-05-31">
                    </div>
                </div>
            </form>
        </div>
        <div class="layui-card-body">
            <table class="layui-table code-ball">
                <thead>
                    <tr>
                        <th style="text-align:center;">彩种名称</th>
                        <th style="text-align:center;">期号</th>
                        <th style="text-align:center;">时间</th>
                        <th style="text-align:center;">开奖号码</th>
                        <th style="text-align:center;" colspan="3">总和</th>
                        <th width="30">波色</th>
                        <th width="30">极值</th>
                        <th width="30">豹子</th>
                    </tr>
                </thead>
               
                <tbody>
                    <tr  v-for="(ilottey, index) in lotterysHistory" 
                    class="fadeInUp animated">
                        <td class="text-info">{{ilottey.name}}</td>
                        <td class="issue">{{ilottey.expect}}</td>
                        <td class="time">{{ilottey.time}}</td>
                        <td class="open-ball my_webfont">
                            <span v-for="(icode, index) in ilottey.code"
                            class="ball">{{icode}}</span>
                        </td>
                        <td>{{ilottey.sum}}</td>
                        <td><span :class="[ilottey.bigSmall.isBig ? 'txt_cyan':'txt_orange']">{{ilottey.bigSmall.text}}</span></td>
                        <td><span :class="[ilottey.bigSmall.isDouble ? 'txt_orange':'txt_cyan']">{{ilottey.bigSmall.sad}}</span></td>
                        <td><span :class="[ilottey.bigSmall.WaveColor]">{{ilottey.bigSmall.WaveName}}</span></td>
                        <td><span :class="[ilottey.bigSmall.extreClass]">{{ilottey.bigSmall.extremum}}</span></td>
                        <td><span class="txt_grey">---</span></td>
                        
                    </tr>

                </tbody>
            </table>
         
            <div class="text-loding" style="text-align:center;" v-if="!lotterysHistory.length">正在刷新历史记录信息...</div>
            <div id="c_page" style="text-align:center;"></div>
        </div>
    </div>
    <div style="height: 15px;"></div>
</div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'
import {AIP, AIP_PREFIX, FREE_CAPTCHA} from '../../config.json'
import axios from 'axios'
import laydate from 'laydate'
import '../assets/js/laydate.js'
const _API = `${AIP}/lotteryhistory/index.php/Lotteryhistory`
let self = this;

export default {
 data () {
    return {
      searchDate: new Date(),
      
      error: false,  
      error_message: '',
      curLotteryName: '',
      curLotterys:[],
      lotterysHistory:[],
      currentLotteryTypeId: 0,
      lotteryFormData:{code:'',},
      current:0,  
      currentLottery:0,    
      isActiveType: false,
      isActive: false,
      layuiUnselect:'layui-unselect', 
      layuiFormSelect:'layui-form-select', 
      layuiFormSelected:'layui-form-selected',
      lastThreeDays:[
          {title:"今天",date: 0},
          {title:"昨天",date:-1},
          {title:"前天",date:-2},
      ],
      currentDay: 0,
    }
  },  
  beforeRouteEnter (to, from, next) {
      next(vm => {
          vm.currentLotteryTypeId = to.params.type_id
          vm.getLotteyHistory(to.params)
     })    
  },
  computed: {
     ... mapState({
         lotterytypes: state => state.lotterytype.lotterytypes,
         lotterys: state => state.lottery.lotterys,
         
    }),
    
  },
  created () {
    
    this.$store.dispatch('lotterytype/getAllLotterytypes')
    this.$store.dispatch('lottery/getAllLotteries')
    this.lotteryFormData = {code:'', time: this.dateTime(0) }
    self = this
  }, 
  mounted () {
    laydate.now()
  },
  methods: {
      inArray(search,array){
        for(var i in array){
            if(array[i]==search){
                return true
            }
        }
        return false
    },
    clickLotteryType: function () { 
      this.isActiveType = !this.isActiveType
    },
    selectedLotteryType: function (index, event) { 
        console.log('msg=',index,'===event',event)
         this.isActiveType = false
         this.current = index
         let ele = event.currentTarget
         this.$refs.lotterytypeval.value =  ele.innerHTML.trim()
        
         this.currentLotteryTypeId = ele.attributes['lay-value'].value
         this.$refs.lotterytype.setAttribute("class","layui-unselect layui-form-select") 
         this.curLotterys = this.lotterys.filter(lottery => parseInt(lottery.type_id)===parseInt(this.currentLotteryTypeId)) 
       
  },
     clickLottery: function () { 
      this.isActive = !this.isActive
    },
    selectedLottery: function (index, event) { 
        console.log('msg=',index,'===event',event)
         this.isActive = false
         this.currentLottery = index
         let ele = event.currentTarget
         this.$refs.lotteryval.value =  ele.innerHTML.trim()
         this.curLotteryName =  ele.innerHTML.trim()
         this.lotteryFormData.code = ele.attributes['lay-value'].value.trim()
         this.$refs.lottery.setAttribute("class","layui-unselect layui-form-select")
          console.log('lotteryFormData 111====', this.lotteryFormData )    
        let formData = JSON.stringify(this.lotteryFormData);   
         // alert(formData) 
          this.getLotteyHistory(this.lotteryFormData)
         
    },
    addDayClass: function (index, event) {
         this.isActive = false
         this.currentDay = index
         let ele = event.currentTarget
         this.lotteryFormData.time = ele.attributes['data-date'].value.trim()
        //  console.log('lotteryFormData 222====', this.lotteryFormData )   
         let formData = JSON.stringify(this.lotteryFormData);  
        // alert(formData) 
         this.getLotteyHistory(this.lotteryFormData)
    },
    getDayTime: function (temDay)  {
     let day = new Date(temDay)
      let year = day.getFullYear()
      let month = day.getMonth()+1
      let date = day.getDate()
      if (month < 10) month = "0" + month
      if (date < 10) date = "0" + date
      let dayStr = year+"-" + month +"-"+date     
      return  dayStr
     },
    dateTime: function (count)  {
      let day = new Date()
      let temDay = day.getTime()+ count*24*60*60*1000
      day = new Date(temDay)
      let year = day.getFullYear()
      let month = day.getMonth()+1
      let date = day.getDate()
      if (month < 10) month = "0" + month
      if (date < 10) date = "0" + date
      let dayStr = year+"-" + month +"-"+date     
      return  dayStr
     },
     getLotteyHistory: function (formData) {
         this.lotterysHistory = []
          
           // alert(`${_API}?type=${formData.code}&range=1&time=${formData.time}&split=1440`)
           // this.curLotterys.map((item) => {
                axios.get(`${_API}?type=${formData.code}&range=1&time=${formData.time}&split=1440`)
          .then(function (res) {
            // handle success
            // console.log("History 111===res.data.====>",res.data)   
            if(res.data.success){           
             let rows = res.data.data.rows
              // console.log("History 222===res.data.data.rows====>",rows)
             let _rows = rows.filter(lottery => formData.time===self.getDayTime(lottery.time))
              _rows.map((i) => {
                let  code_k3 = [19, 22, 31, 35, 36, 37, 38, 39, 43, 44, 45, 47, 80, 81, 82, 153, ]
                let _item = new Object
                _item.name =  formData.name || self.curLotteryName
                _item.expect = i.expect
                _item.code = i.code.split(',')
                _item.time = i.time
                _item.sum = _item.code.reduce((prev, cur) => parseInt(prev)  + parseInt(cur) , 0)
              
                 let bigSmall = new Object
                 let _bigSmall = []
                 bigSmall.isBig = false 
                 bigSmall.text = '小'
                 bigSmall.isDouble = false 
                 bigSmall.sad = '单'
                 bigSmall.WaveColor = 'txt_red'
                 bigSmall.WaveName  = '红波'
                 bigSmall.extremum = '---'
                 bigSmall.extreClass = 'txt_grey'
                
                 //   console.log('_item.sum=indexOf===',self.code_k3.indexOf(parseInt(_item.sum)))
                if(!self.inArray((parseInt(_item.sum), code_k3))) {
                    if(parseInt(_item.sum) >9){
                        bigSmall.isBig = true 
                        bigSmall.text = '大'
                    }
                    if( !(parseInt(_item.sum)%2) ){
                        bigSmall.isDouble = true 
                        bigSmall.sad = '双' 
                     }
                     if(13 == parseInt(_item.sum) || 14 == parseInt(_item.sum)|| 0 == parseInt(_item.sum) || 27 == parseInt(_item.sum)){
              
                         bigSmall.WaveColor = 'txt_grey'
                         bigSmall.WaveName  = '波色'
                     }
                    else {
                        let e = parseInt(_item.sum) % 3
                        if(1 == e){
                            bigSmall.WaveColor = 'txt_green'
                            bigSmall.WaveName  = '绿波'
                        }

                        if(1 == 2){
                            bigSmall.WaveColor = 'txt_blue'
                            bigSmall.WaveName  = '蓝波'
                        }
                    }
                }
                else
                {
                   if(parseInt(_item.sum) >13){
                        bigSmall.isBig = true 
                        bigSmall.text = '大'
                    }  
                     if( !(parseInt(_item.sum)%2) ){
                     bigSmall.isDouble = true 
                     bigSmall.sad = '双' 
                     }
                      if(13 == parseInt(_item.sum) || 14 == parseInt(_item.sum)|| 0 == parseInt(_item.sum) || 27 == parseInt(_item.sum)){
              
                         bigSmall.WaveColor = 'txt_grey'
                         bigSmall.WaveName  = '波色'
                     }
                    else {
                        let e = parseInt(_item.sum) % 3
                        if(1 == e){
                            bigSmall.WaveColor = 'txt_green'
                            bigSmall.WaveName  = '绿波'
                        }

                        if(1 == 2){
                            bigSmall.WaveColor = 'txt_blue'
                            bigSmall.WaveName  = '蓝波'
                        }
                    }
                }

                if( parseInt(_item.sum)>=22){
                     bigSmall.extremum = '极大'
                     bigSmall.extreClass = 'txt_purple'
                } 
                if(  parseInt(_item.sum)<6){
                     bigSmall.extremum = '极小'
                     bigSmall.extreClass = 'txt_purple'
                } 
                // _bigSmall.push(bigSmall)
                 _item.bigSmall = bigSmall
                self.lotterysHistory.push(_item)
              })
            
            }else{
             
              console.log("History message==error_message==")
            }  
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        // })
     }
    
 } 
}
</script>

<style scoped>

    .trend-tab .day-a a {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        width: 45px;
        text-align: center;
        float: left;
        margin-left: 5px;
        margin-top: 6px;
        border-radius: 3px;
        font-size: 13px;
    }
    .fr {
        float: right;
    }
    .fl {
        float: left;
    }
    .trend-tab {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e5e5e5;
    }
    .trend-tab .day-a a.active, .trend-tab .day-a a:hover {
        background: #e73f3f;
        color: #fff;
    }

    .trend-tab .day-a a {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        width: 45px;
        text-align: center;
        float: left;
        margin-left: 5px;
        margin-top: 6px;
        border-radius: 3px;
        font-size: 13px;
    }
    .trend-tab .filter-time .btn, .trend-tab .filter-time span {
        display: inline-block;
        float: left;
        padding: 0 10px;
        height: 28px;
        line-height: 28px;
        background: #f1f1f1;
    }
    .trend-tab .filter-time .text {
        float: left;
        height: 28px;
        line-height: 28px;
        padding: 0 8px;
        width: 120px;
        border-left: 1px solid #ddd;
        background: url(../../public/images/time.jpg) 89px center no-repeat;
        font-size: 13px;
    }
    .trend-tab .filter-time {
        border: 1px solid #ddd;
        font-size: 13px;
        margin-top: 5px;
        margin-left: 30px;
    }
    .trend-tab {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e5e5e5;
    }
    .trend-tab .filter-time .btn, .trend-tab .filter-time span {
        display: inline-block;
        float: left;
        padding: 0 10px;
        height: 28px;
        line-height: 28px;
        background: #f1f1f1;
    }
    input, select, textarea {
        box-shadow: none;
        border-radius: 0;
        background: 0 0;
        border: none;
    }
    .layui-table .open-ball span {
        background: #01AAED;
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

    .code-ball .bg_red {
        background-color: #e84e40;
        color: #fff
    }

    .code-ball .bg_grey {
        background-color: #bdc3c7;
        color: #fff
    }

    .code-ball .bg_green {
        background-color: #0c0;
        color: #fff
    }

    .code-ball .bg_blue {
        background-color: #3c51e7;
        color: #fff
    }

    .code-ball .bg_orange {
        background-color: #ffa800;
        color: #fff
    }

    .code-ball .bg_purple {
        background-color: #c6c;
        color: #fff
    }

    .code-ball .bg_cyan {
        background-color: #099;
        color: #fff
    }

    .code-ball .bg_khaki {
        background-color: #c63;
        color: #fff
    }

    .code-ball .bg_dark {
        background-color: #666;
        color: #fff
    }

    .code-ball .txt_red {
        color: #e74c3c
    }

    .code-ball .txt_grey {
        color: #ccc
    }

    .code-ball .txt_green {
        color: #0c0
    }

    .code-ball .txt_blue {
        color: #3c51e7
    }

    .code-ball .txt_orange {
        color: #ffa800
    }

    .code-ball .txt_purple {
        color: #c6c
    }

    .code-ball .txt_cyan {
        color: #099
    }

    .code-ball .txt_khaki {
        color: #c63
    }

    .code-ball .txt_dark {
        color: #666
    }
	.text-loding{padding:15px 0;text-align:center;color:#999}
.layui-form-label1 {
    float: left;
    display: block;
    padding: 9px 5px;
    width: ;
    font-weight: 400;
    line-height: 20px;
    text-align: right;
}
.layui-input-block1 {
    margin-left: 70px;
    min-height: 36px;
}
</style>
