import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';


const state = {
  ...loginState
};

const mutations = {
  ...loginMutations
};

const getters = {
  ...loginGetters
};

const actions = {
  ...loginActions
};


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
