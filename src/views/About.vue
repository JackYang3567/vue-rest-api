<template>
  <div class="layui-main">
    <div class="layui-tab">
        <div class="layui-card-body">
            <div class="layui-fluid">
                <div class="box layui-text">
                    <h1>关于我们</h1>
                    <p>成都市锦江区GK网络工作室是一家多年完全致力于中国及世界各地公益彩票事业，提供全方位彩票开奖及彩票相关服务的提供商。</p>
                    <p>旗下GK网API以中国市场为技术研发基地,以互联网技术、电信技术、无线应用技术为依托，将创新的技术与传统的彩票产业相结合，面向全球彩票服务市场，提供最快最全的彩票开奖相关服务，包括彩票开奖结果调用、彩票系统的研发、彩票开奖移动客户端，及彩票产品创新等。</p>
                    <p>GK网API拥有一流的技术研发创新实力以及国内外多年的彩票网站运营及管理经验，为中国以及全球彩票玩家提供一流的彩票创新产品及优质的服务。GK网API本着专业、诚信、服务至上的经营理念， 充分发挥机动灵活的运营及管理机制，伴随着中国互联网及手机互联网时代的腾飞、彩票市场的不断繁荣，和各方客户的忠诚支持，将全面促进新型彩票服务市场的全盛发展。</p>
                </div>
                <fieldset class="layui-elem-field layui-field-title">
                    <legend>更新记录</legend>
                        <div class="layui-field-box">
                            <ul class="layui-timeline">
                                <li class="layui-timeline-item">
                           
                                     <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                     <div class="layui-timeline-content layui-text">
                                        <h3 class="layui-timeline-title">2019/02/28
                                            <span class="layui-badge-rim">V3.0.1新版更新</span> 
                                            <span class="layui-badge-dot"></span>
                                        </h3>
                                        <ul>
                                            <li>数据结构更新开放用户多TOKEN功能。一个帐号同时可以拥有多个TOKEN接口</li>
                                            <li>新增开奖历史查询页面，支持按天或按日期查询，方便各位会员查询漏期数据补单！</li>
                                            <li>开奖历史,接口购买页面由于彩种日益增多，此次添加了搜索彩种功能,方便会员查找购买指定接口。</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                    <div class="layui-timeline-content layui-text">
                                        <h3 class="layui-timeline-title">2018/12/17</h3>
                                            <ul>
                                                <li>API服务器全面升级,DDOS防护能力提升至360GB</li>
                                                <li>增加API接口备用地址 主接口：api.b1api.com 备用接口：api.b1cp.com</li>
                                            </ul>
                                    </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                    <div class="layui-timeline-content layui-text">
                                        <h3 class="layui-timeline-title">2018/10/09</h3>
                                        <ul>
                                             <li>GKAPI官网界面重整,页面美化,新增了API占用IP查询清理功能</li>
                                             <li><span style="color:#ff5722">新版本用户可自助登陆查询及清理API占用IP！</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                         <div class="layui-timeline-content layui-text">
                                             <h3 class="layui-timeline-title">2018/05/06</h3>
                                             <ul>
                                                 <li>API接口重要升级,分布式数据库设计,用到同时4种数据库工作,智能DNS负载均衡提升了稳定性</li>
                                             </ul>
                                         </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                    <div class="layui-timeline-content layui-text">
                                         <h3 class="layui-timeline-title">2017/08/13</h3>
                                         <ul>
                                             <li>官网改版,新增网站公告,新闻资讯,技术文档栏目！关闭了原GK网论坛</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                                    <div class="layui-timeline-content layui-text">
                                        <h3 class="layui-timeline-title">2017/04/03</h3>
                                        <ul>
                                            <li>开放免费试用功能<span style="color:#ff174c">(GK网活跃用户数突破3000人)</span></li>
                                       </ul>
                                    </div>
                                </li>
                                <li class="layui-timeline-item">
                                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                               
                                    <div class="layui-timeline-content layui-text">
                                        <h3 class="layui-timeline-title">2017/01/28 GK网正式上线运营</h3>
                                    
                                    </div>
                                </li>
                            </ul>
                        </div>
            </fieldset>
        </div>
    </div>
</div>
</div>  

</template>

<style scoped>
 @import "../../public/css/about.css";
</style>
