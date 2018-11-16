import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let user = new Vuex.Store({
  state: { //存储空间
    loginBase: null
  },
  mutations: { //响应事件
    login: function (state, data) {
      state.loginBase = data;
    }
  }
});


export default user;
