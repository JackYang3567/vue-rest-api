import accesstoken from '../../api/accesstoken'

// initial state
const state = {
  accesstokens: []
}

// getters
const getters = {}
// actions
const actions = {
  getAllAccesstokens ({ commit }) {
    accesstoken.getAccesstokens(accesstokens => {
      commit('setAccesstokens', accesstokens)
    })
  }
}
// mutations
const mutations = {
  setAccesstokens (state, accesstokens) {
    state.accesstokens = accesstokens
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
