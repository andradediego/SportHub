<template>
  <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="8"
      md="8"
      offset-sm="2"
      offset-md="2"    
      >      
      <v-tabs
        fixed-tabs
        color="#13893f"               
      >
        <v-tabs-slider color="#13893f"></v-tabs-slider>
        <v-tab>Profile</v-tab>
        <!-- <v-tab>Users</v-tab> -->
      
        <v-tab-item>
          <MainProfile />
        </v-tab-item>

        <!-- <v-tab-item>
          <UserSearch />
        </v-tab-item> -->
           
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import MainProfile from '../components/profile/MainProfile';
// import UserSearch from '../components/profile/UserSearch';
export default {
  name: 'Profile',
  components: {
    MainProfile,
    // UserSearch    
  },
  data: () => ({
    tab: null   
  }),
  methods: {    
    onClickProfile: function () {
    }
  }
}
</script>
