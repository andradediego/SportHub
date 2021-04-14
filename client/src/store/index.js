import Vue from 'vue'
import Vuex from 'vuex'

//login module
import * as loginActions from './login/actions';
import * as loginMutations from './login/mutations';
import * as loginGetters from './login/getters';
import * as loginState from './login/state';

//field
import * as fieldActions from './fields/actions';
import * as fieldMutations from './fields/mutations';
import * as fieldGetters from './fields/getters';
import * as fieldState from './fields/state';
//edit field
import * as eFieldActions from './fieldsEdit/actions';
import * as eFieldMutations from './fieldsEdit/mutations';
import * as eFieldGetters from './fieldsEdit/getters';
import * as eFieldState from './fieldsEdit/state';
//booking field
import * as bfieldActions from './bookingField/actions';
import * as bfieldMutations from './bookingField/mutations';
import * as bfieldGetters from './bookingField/getters';
import * as bfieldState from './bookingField/state';
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
  ...fieldState,
  ...eFieldState, 
  ...bfieldState, 
  ...profileState,
  ...calendarState
};

const mutations = {
  ...loginMutations,
  ...fieldMutations,
  ...eFieldMutations,
  ...bfieldMutations,
  ...profileMutations,  
  ...calendarMutations
};

const getters = {
  ...loginGetters,
  ...fieldGetters,
  ...eFieldGetters,
  ...bfieldGetters,
  ...profileGetters,  
  ...calendarGetters
};

const actions = {
  ...loginActions,
  ...fieldActions,
  ...eFieldActions, 
  ...bfieldActions, 
  ...profileActions,  
  ...calendarActions
};

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
