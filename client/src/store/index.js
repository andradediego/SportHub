import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';
import * as fieldActions from './fields/actions';
import * as fieldMutations from './fields/mutations';
import * as fieldGetters from './fields/getters';
import * as fieldState from './fields/state';
import * as eFieldActions from './fieldsEdit/actions';
import * as eFieldMutations from './fieldsEdit/mutations';
import * as eFieldGetters from './fieldsEdit/getters';
import * as eFieldState from './fieldsEdit/state';

const state = {
  ...loginState,
  ...fieldState,
  ...eFieldState
};

const mutations = {
  ...loginMutations,
  ...fieldMutations,
  ...eFieldMutations
};

const getters = {
  ...loginGetters,
  ...fieldGetters,
  ...eFieldGetters
};

const actions = {
  ...loginActions,
  ...fieldActions,
  ...eFieldActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
