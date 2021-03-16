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
                        <div >{{field.name}}</div>
                    </v-card-title>
                    <v-card-text class="black--text">
                        <div >{{field.location}}</div>
                    </v-card-text>
                   <v-card-subtitle class="black--text">
                       <div >{{field.description}}</div>
                    </v-card-subtitle>
                     <v-btn class="black--text"
                     color = "#ffffff">Booking</v-btn>
        </v-card>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'field',
    data: ()=>({
        
    }),
    methods:{
    ...mapActions(['loadFields']),
    onclickProduct: function(){
        //
    }
    }
}
</script>
<style>
.text{
color:black !important;
}
</style>