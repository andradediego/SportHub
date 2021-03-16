<template class="field">
    <v-card             
        dark            
        color="#ffffff"
        class="mx-auto pa-3 text"                    
        width="500"
        >        
        <v-img
            :src="field.src"
            height="200px"            
        ></v-img>
        <v-card-title class="black--text" >
            <div>{{field.Name}}</div>
        </v-card-title>
        <v-card-text class="black--text">
            <div>{{field.Location}}</div>
        </v-card-text>
        <v-card-subtitle class="black--text">
            <div>{{field.Description}}</div>
        </v-card-subtitle>
        <v-btn class="black--text" color="#ffffff" @click="onclickProduct">Booking</v-btn>
    </v-card>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'FieldCard',
    props: ['field'],
    data: () => ({
    }),    
    methods: {
        ...mapActions(['loadFields']),
        onclickProduct: function (){            
        }
    },
    computed: {        
    }
}
</script>
<style>
.text{
    color:black !important;
}
</style>