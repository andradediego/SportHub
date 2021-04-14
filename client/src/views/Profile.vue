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
        <v-tab v-if="userFriends.length > 0">Friends</v-tab>
        <v-tab>Find Users</v-tab>
      
        <v-tab-item>
          <MainProfile />
        </v-tab-item>

        <v-tab-item v-if="userFriends.length > 0">
          <FriendList />
        </v-tab-item>

        <v-tab-item>
          <UserSearch />
        </v-tab-item>
           
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import MainProfile from '../components/profile/MainProfile';
import UserSearch from '../components/profile/UserSearch';
import FriendList from '../components/profile/FriendList';
export default {
  name: 'Profile',
  components: {
    MainProfile,
    UserSearch,
    FriendList    
  },
  computed: {
		...mapGetters(['userFriends']),		
	},
  data: () => ({
    tab: null   
  }),
  methods: {    
    onClickProfile: function () {
    }
  },
  mounted() {    
  }
}
</script>
