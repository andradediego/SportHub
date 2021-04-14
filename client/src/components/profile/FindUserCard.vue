
<template >
	<v-col cols="12" >
		<v-card>
			<v-card-title>{{user.name}}</v-card-title>
			<v-card-actions>
				<v-btn text color="#13893f"
					v-if="!user.friendRequested"
					@click="onFriendRequest">
					Add Friend
				</v-btn> 
				<v-btn text color="#13893f"
					@click="onGoProfile">
					See Profile
				</v-btn> 
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'FindUserCard',
	props: {		
		user: {
			type: Object,
      required: true
		}
	},
  components: {
  },
  data: () => ({
    
  }),
  computed: {    
  },

  methods: {    
		...mapActions(['onRequestAddFriend']),
    onGoProfile: function () {
			this.$router.push(`/userSearchProfile/${this.user.id}`);
		},
		onFriendRequest: function () {			
			const data = {
				id: this.user.id
			}
			this.onRequestAddFriend(data);
		}
  },
  mounted() {
    
  }
};
</script>
<style>

</style>
