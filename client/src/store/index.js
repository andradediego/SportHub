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

//login module
import * as profileActions from './profile/actions';
import * as profileMutations from './profile/mutations';
import * as profileGetters from './profile/getters';
import * as profileState from './profile/state';


const state = {
  ...loginState,
  ...profileState,
  ...FieldState
};

const mutations = {
  ...loginMutations,
  ...profileMutations,
  ...FieldMutations
};

const getters = {
  ...loginGetters,
  ...profileGetters,
  ...FieldGetters
};

const actions = {
  ...loginActions,
  ...profileActions,
  ...FieldActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
