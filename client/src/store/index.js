import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';


//login module
import * as profileActions from './profile/actions';
import * as profileMutations from './profile/mutations';
import * as profileGetters from './profile/getters';
import * as profileState from './profile/state';


const state = {
  ...loginState,
  ...profileState
};

const mutations = {
  ...loginMutations,
  ...profileMutations
};

const getters = {
  ...loginGetters,
  ...profileGetters
};

const actions = {
  ...loginActions,
  ...profileActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
