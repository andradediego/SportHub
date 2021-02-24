<template>
<v-app>
    <v-container>
<div class="content">Book a sports facility near you</div> 
 <div id="app" class="search-bar">
   <div class="left">
    <v-toolbar
      dark
      color="#13893f"
    >
      <v-toolbar-title>Location selection</v-toolbar-title>
      <v-autocomplete             
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Search for a facility"
        solo-inverted
      ></v-autocomplete>
    </v-toolbar>
  </div>
  <div class="right">
      <v-date-picker
        float=right        
        color="#13893f"
       
      ></v-date-picker>
  </div>
</div>

  <div class="img1">
  <v-img 
  src="https://cdn.dribbble.com/users/124813/screenshots/5331224/593-football-players-floydworx_4x.png?compress=1&resize=800x600"
  ></v-img>
  </div>
    </v-container>
</v-app>
</template>
 
<script>
export default {
  name: 'Home',
  components: {    
  },
}
</script>
<style>
.content{
  font-size:36px;
  text-align: center;
  padding-top: 5%;
  font-weight: 500;
}
.search-bar{
  padding-top:20px;
  display: flex;
  justify-content: space-around;

}
.left{
  margin-right:-32%;
}
.img1{
  text-align: center;
  align-content: center;
  max-width:92%;
}
</style>
