<template>
  <div>		
		<v-row v-if="!isEditMode">
			<DisplayProfile
			:userData="userProfile"
			/>
		</v-row>
		
		<v-row v-else>
			<EditProfile/>
		</v-row>

		<v-row v-if="userProfile.friendRequested && userProfile.friendRequested.length > 0">
			<v-col cols="12">
				<v-card flat>
					<v-card-title>Friend Requests</v-card-title>
					<v-card-text >					
						<v-card v-for="request in userProfile.friendRequested" :key="request.friendLoginId">
							<v-card-title>{{request.Name}}</v-card-title>
							<v-divider></v-divider>
							<v-card-actions>
								<v-btn color="primary" 
									@click="onAcceptRequest(request.friendLoginId)"
									:loading="isLoadingProfile">Accept Request</v-btn>
								<v-btn color="error" 
									@click="onCancelRequest(request.friendLoginId)"
									:loading="isLoadingProfile">Cancel Request</v-btn>
							</v-card-actions>
						</v-card>
					</v-card-text>		
				</v-card>
			</v-col>
		</v-row>

		<v-row v-if="!isEditMode">
			<v-col cols="12">
				<v-btn
					color="#13893f"						
					block 					
					dark	
					outlined					
					@click="onEnableEditMode"	
				>
					Edit
					<v-icon dark>
						mdi-pencil
					</v-icon>
				</v-btn>
			</v-col>				
		</v-row>
	</div>
</template>

<script>
import DisplayProfile from './DisplayProfile';
import EditProfile from './EditProfile';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainProfile',

  components: {
		DisplayProfile,
		EditProfile
  },
	computed: {
		...mapGetters(['userProfile', 
			'isEditMode', 
			'isLoadingProfile'
		]),		
	},

  data: () => ({
		editMode: true
  }),
  methods: {
    ...mapActions(['onGetUserData', 'onResolveFriendRequest']),		
		...mapMutations(['setIsEditMode']),		
		onEnableEditMode: function () {
			this.setIsEditMode(true);
		},
		onAcceptRequest: function (id) {			
			const data = {
				id,
				accepted: true,
				canceled: false
			};
			this.onResolveFriendRequest(data);
		},
		onCancelRequest: function (id) {			
			const data = {
				id,
				accepted: false,
				canceled: true
			}
			this.onResolveFriendRequest(data);
		}
  },
  mounted() {
    this.onGetUserData();
  }
};
</script>
<style scoped>
.font{
	font-size: 1.75rem!important;
}

</style>
