<template>
 <v-row>
   <v-col
    cols="12"
    xs="12"
    sm="8"
    md="6"
    offset-sm="2"
    offset-md="3"
   >
    <v-toolbar
      dark
      color="#13893f"
    >
      <v-toolbar-title>Location selection</v-toolbar-title>
      <v-autocomplete
        v-model="select"             
        cache-items
        class="mx-4"
        :search-input.sync="search"
        flat
        :items="items"
        hide-no-data
        hide-details
        label="Search for a facility"
        solo-inverted
      ></v-autocomplete>
    </v-toolbar>
   </v-col>
   <v-col
    cols="12"
    xs="12"
    sm="8"
    md="6"
    offset-sm="2"
    offset-md="3">
     <v-img 
      src="https://cdn.dribbble.com/users/124813/screenshots/5331224/593-football-players-floydworx_4x.png?compress=1&resize=800x600"
      ></v-img>  
   </v-col>
 </v-row>
</template>
 
<script>
export default {
  name: 'Home',
  components: {    
  },
  data: () => ({
    picker: null,
    items: [],
    select: null,
    search: null,
    loading: false,
    states: [
          'Highbury Ave N',
          'Windermere Rd',
          'Sandford St',
          'Windermere Rd',
          'Adelaide St N',
          'Marconi Blvd',
          'Oxford St E',
          'Meadowgate Blvd',
          'Clarke Rd',
        ]
  }),
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
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
