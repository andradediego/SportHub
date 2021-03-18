<template>
  <div>		
		<v-row v-if="!isEditMode">
			<DisplayProfile
			:userName="userProfile.name" 
			:userAbout="userProfile.about" 
			:userInterest="userProfile.sports"
			/>
		</v-row>
		
		<v-row v-else>
			<EditProfile/>
		</v-row>

		<v-row v-if="!isEditMode">
			<v-col col-12>
				<v-btn
					color="#13893f"						
					block 					
					dark	
					outlined
					@click="onEnableEditMode"	
				>
					Edit
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
		...mapGetters(['userProfile', 'isEditMode']),		
	},

  data: () => ({
		editMode: true
  }),
  methods: {
    ...mapActions(['onGetUserData']),		
		...mapMutations(['setIsEditMode']),		
		onEnableEditMode: function () {
			this.setIsEditMode(true);
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
