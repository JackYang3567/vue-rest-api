
import Cookie from 'vue-cookies'
const state = {
  userInfo: Cookie.get('userInfo'),
  loginName: Cookie.get('loginName'),
  token: Cookie.get('token')
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  Login (state, user) {
    state.userInfo = user
    state.loginName = user.email
    state.token = user.uuid
    // 往cookie中写数据
    Cookie.set('userInfo', user)
    Cookie.set('loginName', user.email)
    Cookie.set('token', user.uuid)
  },
  LogOut (state) {
    console.log("LogOut======")
    state.userInfo = ''
    state.loginName = ''
    state.token = ''
    // 往cookie中写数据
    Cookie.set('userInfo', '')
    Cookie.set('loginName', '')
    Cookie.set('token', '')

    console.log("state======",state)
    console.log("Cookie======",Cookie)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
