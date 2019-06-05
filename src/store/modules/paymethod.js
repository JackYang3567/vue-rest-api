import paymethod from '../../api/paymethod'

// initial state
const state = {
  paymethods: []
}

// getters
const getters = {}
// actions
const actions = {
  getAllPaymethods ({ commit }) {
    paymethod.getPaymethods(paymethods => {
      commit('setPaymethods', paymethods)
    })
  }
}

// mutations
const mutations = {
  setPaymethods (state, paymethods) {
    state.paymethods = paymethods
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
