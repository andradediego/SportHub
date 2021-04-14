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
      
      <div>
        <v-btn depressed color="primary" class="add">
        Add to card
        </v-btn>

        <v-btn depressed color="error">
        Cancel
        </v-btn>
      </div>
</div>
</template>
<script>
export default {
    name: 'bookingField', 
    
    data(){
      return{
       id : this.$route.params.id,
       name:  this.$route.params.name,
       src:this.$route.params.src,
       location: this.$route.params.location,
       des: this.$route.params.des
      };
    },  
    mounted(){
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

</style>