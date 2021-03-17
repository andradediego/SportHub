import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';

//
import * as FieldActions from './fields/actions';
import * as FieldMutations from './fields/mutations';
import * as FieldGetters from './fields/getters';
import * as FieldState from './fields/state';

//login module
import * as profileActions from './profile/actions';
import * as profileMutations from './profile/mutations';
import * as profileGetters from './profile/getters';
import * as profileState from './profile/state';


//calendar module
import * as calendarActions from './calendar/actions';
import * as calendarMutations from './calendar/mutations';
import * as calendarGetters from './calendar/getters';
import * as calendarState from './calendar/state';


const state = {
  ...loginState,
  ...profileState,
  ...FieldState,
  ...calendarState
};

const mutations = {
  ...loginMutations,
  ...profileMutations,
  ...FieldMutations,
  ...calendarMutations
};

const getters = {
  ...loginGetters,
  ...profileGetters,
  ...FieldGetters,
  ...calendarGetters
};

const actions = {
  ...loginActions,
  ...profileActions,
  ...FieldActions,
  ...calendarActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
