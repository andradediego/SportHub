import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)
/*
export default new Vuex.Store({
    state:{
        fields:[]
    },
    action:{
        loadFields({commit}){
            axios
            .get('http://localhost:3000/api/product', {
                name: payload.name,
                location: payload.location,
                description: payload.description,
                src: payload.src,
            })
            .then(res=>res.data)
            .then(fields=>{
                commit('SET_FIELDS', fields)
            })
        }
    },
    mutations:{
        SET_FIELDS(state, fields){
            state.fields = fields
        }
    }
})*/