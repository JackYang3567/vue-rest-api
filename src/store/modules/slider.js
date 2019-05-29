import slider from '../../api/slider'

// initial state
const state = {
  sliders: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllSliders ({ commit }) {
    slider.getSliders(sliders => {
      commit('setSliders', sliders)
    })
  }
}

// mutations
const mutations = {
  setSliders (state, sliders) {
    state.sliders = sliders
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
