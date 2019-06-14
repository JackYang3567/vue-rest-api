/**
 *   原文件index.2019-06-06-back.js
 *   //棋牌缓存
    message_home: {},
 */

import message from '../../api/message'

// initial state
const state = {
  messages: [],
}

// getters
const getters = {}

// actions
const actions = {
    SOCKET_getAllMessages ({ commit }) {
    message.getMessages(messages => {
      commit('SOCKET_setMessages', messages)
    })
  }
}

// mutations
const mutations = {
    SOCKET_setMessages (state, messages) {
    state.messages = messages
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
