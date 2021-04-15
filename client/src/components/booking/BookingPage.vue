<template class="booking">
    <v-card             
        dark            
        color="#ffffff"
        class="mx-auto pa-3 text"                    
        width="500"
        >        
        <v-img
            :src="bookField.src"
            height="200px"            
        ></v-img>
        <v-card-title class="black--text" >
            <div>{{bookField.Name}}</div>
        </v-card-title>
        <v-card-text class="black--text">
            <div>{{bookField.Location}}</div>
        </v-card-text>
        <v-card-subtitle class="black--text">
            <div>{{bookField.Description}}</div>
        </v-card-subtitle>
    </v-card>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'booking',
    props: ['bookField'],
    data: () => ({
    }),    
    methods: {
        ...mapActions(['loadBookingFields']),
    },
    computed: {        
    }
}
</script>
<style>

</style>