<template >
          <div class="bookingField">
        <!-- <v-img
            :src="field.src"
            height="200px"            
        ></v-img>
        
            <div>{{field.Name}}</div>
        
            <div>{{field.Location}}</div>
        
        
            <div>{{field.Description}}</div>
         -->
         {{ $route.params.id }}
        
  </div>
</template>
<script>
//import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'BookingField',      
   
    mounted() {
       
    }, 
    props:['field'],

}
</script>
