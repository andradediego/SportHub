import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';
import * as FieldActions from './fields/actions';
import * as FieldMutations from './fields/mutations';
import * as FieldGetters from './fields/getters';
import * as FieldState from './fields/state';

const state = {
  ...loginState,
  ...FieldState
};

const mutations = {
  ...loginMutations,
  ...FieldMutations
};

const getters = {
  ...loginGetters,
  ...FieldGetters
};

const actions = {
  ...loginActions,
  ...FieldActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
