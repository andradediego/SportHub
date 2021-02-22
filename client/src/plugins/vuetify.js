// src/plugins/vuetify.js

import Vue from 'vue'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
	icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
}

export default new Vuetify(opts)
