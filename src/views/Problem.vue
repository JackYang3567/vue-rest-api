<template>
    <div class="layui-main">
        <div class="layui-tab">
            <div class="layui-card-body">
                <div class="layui-fluid">
                    <div class="box layui-text">
                        <h1>彩票API接口常见问题列表</h1>
                        <h3>一、你们的彩票接口数据来源是通过什么途径？</h3>
                        <p>回复：我们的彩票接口数据来源主要由三部份组成： 1、目前所有重庆，北京，江苏，广东，上海，黑龙江，吉林，山东，浙江，新疆以及湖南等各个省市的高频以及低频彩票都是来源于官方接口。 2、考虑到单一官方接口会存在的不稳定因素以及彩票种类覆盖不全面，所以我们与第三方彩票行业供应商合作购买了其名下所有彩票种类的开奖数据。 3、国外的彩种开奖结果我们全是从发布网站上采集。只是为了保正稳定性，我们专门在国外架设了多台联动服务器进行轮询采集以保正稳定。</p></br>
                        <h3>二、你们的开奖数据的准确性和安全性能保正吗？</h3>
                        <p>回复：我们的开奖数据在收到的第一时间，会首先进行格式验证，包括收到的开奖期号是否为当前彩票的待开奖期号，开奖号码是否符合该彩票规则等8条规则。 除了官方数据来源以外，第三方的付费接口来源，我们还会验证不同的供应商的数据结果是否一致以后才能保存到数据库中，否则会自动通知技术人员。</p></br>
                        <h3>三、你们的服务器在用户数量较大的情况下能稳定吗？</h3>
                        <p>回复：我们在国内位于北京，成都，广东，海外香港，美国五地建立了稳定的协作性服务器集群。 我们采用的是以4*5台Xeon E5-2680V2处理器 + 128G内存 + SSD企业级固态硬盘的服务器共同负载，并为接口平台专门配备了100M + 50M独享带宽 + 30M浮动带宽 +360GB DDOS硬防。（经测试：能达到25亿-30亿PV/天以上的访问量）<br>在数据存储方面，接口数据库用到同时4种数据库工作。程序自身内存 redis mongodb 等内存数据库  mysql永久储存。 保证了数据的快速响应同时拥有持久性</p></br>
                        <h3>四、我购买了你们的付费接口以后，如何知道我的账号有效期还余下多少时间？</h3>
                        <p>回复：正式付费用户，可以登录会员中心-接口管理-授权接口页面,在对应的接口数据中查看到期时间，试用账户默认为120分钟到期。</p></br>
                        <h3>五、 为什么你们的月付接口定价比年付接口定价贵一些呢？</h3>
                        <p>回复：首先，我们的定价机制更鼓励长期使用的支付方式。由于我们的付费接口是每1秒就会为每一个账户分配独立线程来进行最新开奖数据硬盘IO写入，而由于年付会员变化非常小，并发线程对内存的控制也是非常容易评估的， 而短期顾客由于每次购买都是全新的账户名，所以对于并发写入来讲长期累计的消耗更高一些，这也是定价时考虑到的因素。</p></br>
                        <h3>六、我不打算采集你们的接口网页，你们能不能提供数据推送方式的服务呢？</h3>
                        <p>回复：由于不清楚客户的数据或服务器用途，担心会由此引起一些法律或者其它方面的影响，所以我们目前针对广大用户没有考虑数据推送服务。如果贵方能提供正规经营证明，那么推送服务的详细的合作方式与解决方案请与客服详谈。</p></br>
                        <h3>七、你们的接口采集有没有什么限制或者条件？</h3>
                        <p>回复：我们的接口分为试用接口与付费接口两种，其中，试用接口的限制是“单一彩票的采集频率不能高于1次/3秒”使用时间为120分钟。 付费帐号每个接口每天默认允许不超过3台服务器(3个IP)采集访问，每台服务器(每个IP)采集频率不能高于1次/3秒。切记不要将你的账号外传公布，否则会影响到你的正常使用。</p></br>
                        <h3>八、付费接口的彩票采集数据是实时的吗？与官方开奖相比延迟有多少？</h3>
                        <p>回复：由于目前我们所有重庆，北京，江苏，广东，上海，黑龙江，吉林，山东，浙江，新疆以及湖南等各个省市的高频以及低频彩票都是来源于官方接口，再加上网络传输因素，数据延迟在官方之后1~5秒左右，其它彩票的延迟大概在2秒~6秒左右。</p></br>
                        <h3>九、我的账号被人盗用,忘记密码,或者外传了怎么办？</h3>
                        <p>回复：自助服务功能已经开通，您可以使用你申请时绑定的邮箱账号自助找回密码及修改账号token，或联系客服提供QQ号,邮箱或手机号等证明协助找回账号及密码等。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
 @import "../../public/css/about.css";
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