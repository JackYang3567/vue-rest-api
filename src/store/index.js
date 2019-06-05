import Vue from 'vue'
import Vuex from 'vuex'


import auth from './modules/auth'
import cart from './modules/cart'
import products from './modules/products'
import sliders from './modules/slider'
import users from './modules/users'
import lotterytype from './modules/lotterytype'
import lottery from './modules/lottery'
import payamount from './modules/payamount'
import paymethod from './modules/paymethod'
import accesstoken from './modules/accesstoken'
import createLogger from '../plugins/logger'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    cart,
    products,
    sliders,
    users,
    lotterytype,
    lottery,
    payamount,
    paymethod,
    accesstoken
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
