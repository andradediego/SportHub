<template>
	<div>
		<v-row>
			<v-col
				cols="12"
				xs="12"
				sm="8"
				md="6"
				offset-sm="2"
				offset-md="3"
				>
				<v-card flat>				
					<h1 class="text-center font mt-8">{{userSearchProfile.name}}</h1>						
					<!-- <v-img
						height="200px"
						src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
					>					            
						<v-card-title class="white--text mt-8">
							<v-avatar size="56">
								<img
									alt="user"
									src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
								>
							</v-avatar>
							<p class="ml-3">
								John Doe
							</p>
						</v-card-title>
					</v-img> -->
					<v-card-title>About</v-card-title>
					<v-card-text>
						{{userSearchProfile.about}}					
					</v-card-text>

					<v-card-title>Interest in</v-card-title>

					<v-card-text>
						<v-chip-group							
							column
						>
							<v-chip v-for="sport in userSearchProfile.sports"
								outlined
								color="#13893f"
								:key="sport.id"
							>
								{{sport.sport}}
							</v-chip>
						</v-chip-group>
					</v-card-text>				
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col 
				cols="12"
				xs="12"
				sm="8"
				md="6"
				offset-sm="2"
				offset-md="3"
				>
				<v-btn
					color="#13893f"						
					block 					
					dark	
					outlined
					v-if="!userSearchProfile.friendRequested"
					@click="onAddFriend"	
				>
					Add Friend
				</v-btn>
			</v-col>				
		</v-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'UserSearchProfile',
  components: {
  },
	computed: {
		...mapGetters(['userSearchProfile']) 		
	},

  data: () => ({
		
  }),
  methods: {
    ...mapActions(['onGetUserSearchedProfile', 'onRequestAddFriend']),
		onAddFriend: function () {
			const data = {
				id: this.userSearchProfile.id,			
			}
			this.onResolveFriendRequest(data);
		}
  },
  mounted() {    
		const idUserSearched = {
			id: this.$route.params.id
		}
		this.onGetUserSearchedProfile(idUserSearched);
  }
};
</script>
<style scoped>
.font{
	font-size: 1.75rem!important;
}
</style>
