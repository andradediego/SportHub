<template >
          <div class="bookingField">
      
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
