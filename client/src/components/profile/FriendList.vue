<template>
  <div>		
		<v-row>
      <v-col cols="12">
        <v-card           
          v-for="friend in userFriends" :key="friend.id">
          <v-card-title>{{friend.Name}}</v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" 
              @click="onGoToProfile(friend.id)"
              :loading="isLoadingProfile">Go to the profile</v-btn>
            <v-btn color="error" 
              @click="onRemoveFriend(friend.friendLoginId)"
              :loading="isLoadingProfile">Remove Friend</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
	</div>
</template>

<script>


import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FriendList',

  components: {
  },
	computed: {
		...mapGetters([
      'userFriends', 
      'isLoadingProfile'
    ]),		
	},

  data: () => ({
		editMode: true
  }),
  methods: {
    ...mapActions(['onResolveFriendRequest']),
    onGoToProfile: function (id) {
      this.$router.push(`/userSearchProfile/${id}`);
    },
    onRemoveFriend: function (id) {
      const data = {
				id,
				accepted: false,
				canceled: true
			}
      console.log(id);
			this.onResolveFriendRequest(data);
    }
  },
  mounted() {    
  }
};
</script>
<style scoped>

</style>
