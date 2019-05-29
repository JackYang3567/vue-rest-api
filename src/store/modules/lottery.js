import lotterytype from '../../api/lottery'

// initial state
const state = {
  lotterys: []
}

// getters
const getters = {}
// actions
const actions = {
  getAllLotteries ({ commit }) {
    lotterytype.getLotteries(lotterys => {
      commit('setLotteries', lotterys)
    })
  }
}

// mutations
const mutations = {
  setLotteries (state, lotterys) {
    state.lotterys = lotterys
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
