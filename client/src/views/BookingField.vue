<template >
<div class="bookingField">
      <div class="left">
          <v-img
            :src="src"
          height="500px"            
        ></v-img>
        <h1>{{name}}</h1>
        <h2>{{location}}</h2>
        <h3>{{des}}</h3> 
      </div>
        <v-row class="left">
    <v-date-picker v-model="picker1"></v-date-picker>
    <v-date-picker v-model="picker2"></v-date-picker>
  </v-row>
      <div>
        <v-btn depressed color="primary" class="add"
        @click="booking"
        >
        Book
        </v-btn>

        <v-btn depressed color="error">
        Cancel
        </v-btn>
      </div>
      <div class="fb">
       <p>Feedback:</p> 
        <input type="text" placeholder="How your experience about our factilities" col="50">
      </div>
     
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'bookingField', 
    
    data(){
      return{
       id : this.$route.params.id,
       name:  this.$route.params.name,
       src:this.$route.params.src,
       location: this.$route.params.location,
       des: this.$route.params.des,
       picker1: new Date().toISOString().substr(0, 10),
       picker2: new Date().toISOString().substr(0, 10),
      };
    },  
    mounted(){
    },
      methods: {
   ...mapActions(['onBooking']),
    booking: function () {
      const bookingData = {
       id : this.$route.params.id,
       datePick1: this.picker1,
       datePick2: this.picker2,
      }
      this.onBooking(bookingData);
    }
  }
    
}
</script>
<style scoped>
.left{
  float: left;
  margin-right:25%;
  margin-bottom: 20px;
}
.add{
  margin-right:15px;
}
.fb{
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>