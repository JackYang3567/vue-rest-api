import Vue from 'vue'
import Router from 'vue-router'
import { mapState, mapMutations } from 'vuex'
import Cookie from 'vue-cookies'
import store from '../store'
import Home from '../views/Home.vue'

// import Agent from '../views/Agent.vue'
// import Details from '../views/Details.vue'
// import User from '../views/User.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 默认 hash 模式的URL中有#号
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', // 命名路由
      component: Home,
      meta: {
        // requiresAuth: true,
        title: '首页'
      }
    },
    {
      path: '/a',
      redirect: '/b'
      // 重定向:   从 /a 重定向到 /b
    },
    {
      // 动态路径参数 以冒号开头
      path: '/dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Dashboard.vue'),
      meta: {
        requiresAuth: true,
        title: '用户中心'
      },
      children: [
        {
          // 当 /dashboard/:id/changepass 匹配成功，
          // Changepass 个人资料 会被渲染在 Dashboard 的 <router-view> 中
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Changepass.vue'),
          meta: {
            requiresAuth: true,
            title: '个人资料'
          }
        },
        {
          // 当 /Dashboar/:id/token 匹配成功
          // Token 接口管理 会被渲染在 Dashboard 的 <router-view> 中
          path: 'token',
          name: 'token',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Token.vue'),
          meta: {
            requiresAuth: true,
            title: '接口管理'
          }
        },
        {
          // 当 /Dashboar/:id/profile 匹配成功
          // Profile 资料修改 会被渲染在 Dashboard 的 <router-view> 中
          path: 'profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Profile.vue'),
          meta: {
            requiresAuth: true,
            title: '资料修改'
          }
        },
        {
          // 当 /Dashboar/:id/buylog 匹配成功
          // Buylog 购买记录 会被渲染在 Dashboard 的 <router-view> 中
          path: 'buylog',
          name: 'buylog',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Buylog.vue'),
          meta: {
            requiresAuth: true,
            title: '购买记录'
          }
        },
        {
          // 当 /Dashboar/:id/purchase 匹配成功
          // Purchase 充值记录 会被渲染在 Dashboard 的 <router-view> 中
          path: 'purchase',
          name: 'purchaselog',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Purchase.vue'),
          meta: {
            requiresAuth: true,
            rechargeBtn: true,
            title: '充值记录'
          }
        },
        {
          // 当 /Dashboar/:id/amountlog 匹配成功
          // Amountlog 资金变动记录 会被渲染在 Dashboard 的 <router-view> 中
          path: 'amountlog',
          name: 'amountlog',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Amountlog.vue'),
          meta: {
            requiresAuth: true,
            title: '资金变动记录'
          }
        },
        {
          // 当 /Dashboar/:id/recharge 匹配成功
          // Recharge 在线充值 会被渲染在 Dashboard 的 <router-view> 中
          path: 'recharge',
          name: 'recharge',
          component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Recharge.vue'),
          meta: {
            requiresAuth: true,
            title: '在线充值'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        // requiresAuth: true,
        title: '关于我们'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
      meta: {
        // requiresAuth: true,
        title: '联系我们'
      }
    },
    {
      path: '/overview-interfaces',
      name: 'interfaces',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Interfaces.vue'),
      meta: {
        // requiresAuth: true,
        title: '接口概述'
      }
    },
    {
      path: '/free-trial',
      name: 'trial',
      // route level code-splitting
      // this generates a separate chunk (trial.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "trial" */ '../views/FreeTrial.vue'),
      meta: {
        // requiresAuth: true,
        title: '免费试用'
      }
    },
    {
      path: '/interface-purchase',
      name: 'purchase',
      // route level code-splitting
      // this generates a separate chunk (trial.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "trial" */ '../views/InterfacePurchase.vue'),
      meta: {
        // requiresAuth: true,
        title: '接口购买'
      }
    },
    {
      path: '/award-opening-history',
      name: 'award',
      // route level code-splitting
      // this generates a separate chunk (trial.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "trial" */ '../views/OpeningHistory.vue'),
      meta: {
        // requiresAuth: true,
        title: '开奖历史'
      }
    },
    {
      path: '/problem',
      name: 'problem',
      // route level code-splitting
      // this generates a separate chunk (trial.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "trial" */ '../views/Problem.vue'),
      meta: {
        // requiresAuth: true,
        title: '常见问题'
      }
    },
    {
      path: '/agent',
      name: 'agent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Agent.vue'),
      meta: {
        // requiresAuth: true,
        title: '代理'
      }
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
      meta: {
        // requiresAuth: true,
        title: '产品中心'
      }
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/User.vue'),
      meta: {
        // requiresAuth: true,
        title: '用户列表'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/SignUp.vue'),
      meta: {
        // requiresAuth: true,
        title: '会员注册'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/SignIn.vue'),
      meta: {
        // requiresAuth: true,
        title: '会员登录'
      }
    },
    {
      path: '/signout',
      name: 'signout',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "signout" */ '../views/Signout.vue'),
      meta: {
        // requiresAuth: true,
        title: '退出登录'
      }
    },
    {
      path: '/forgot-password',
      name: 'forgotpass',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/ForgotPassword.vue'),
      meta: {
        // requiresAuth: true,
        title: '找回密码'
      }
    },
    {
      // 会匹配所有路径
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
      meta: {
        // requiresAuth: true,
        title: '404页面'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.auth.token){
    console.log("Cookie.get('token')===",Cookie.get('token'))
    console.log("====this.$store.state.auth.token", store.state.auth.token)
    next('/signin')
  // next()

  }else{
    next()
  }
})
router.afterEach((to) => {
  document.title = 'GK网全国彩票开奖API接口调用平台,Xml,Json免费彩票数据采集API接口试用' // to.meta.title
})

export default router
