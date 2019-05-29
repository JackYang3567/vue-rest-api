import lotterytype from '../../api/lotterytype'

// initial state
const state = {
  lotterytypes: []
}

// getters
const getters = {}
// actions
const actions = {
  getAllLotterytypes ({ commit }) {
    lotterytype.getLotterytypes(lotterytypes => {
      commit('setLotterytypes', lotterytypes)
    })
  }
}

// mutations
const mutations = {
  setLotterytypes (state, lotterytypes) {
    state.lotterytypes = lotterytypes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
