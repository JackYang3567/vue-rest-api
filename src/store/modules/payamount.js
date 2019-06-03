import payamount from '../../api/payamount'

// initial state
const state = {
  payamounts: []
}

// getters
const getters = {}
// actions
const actions = {
  getAllPayamounts ({ commit }) {
    payamount.getPayamounts(payamounts => {
      commit('setPayamounts', payamounts)
    })
  }
}

// mutations
const mutations = {
  setPayamounts (state, payamounts) {
    state.payamounts = payamounts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
