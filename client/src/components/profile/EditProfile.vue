<template>
	<v-col      
      >
      <v-card flat>       
       <v-card-text>
        <v-row>
          <v-col cols="12">    
            <v-text-field
              label="Full Name"
              v-model="name"
            >
            </v-text-field>
            <v-textarea
							name="input-7-1"
							label="About"
							v-model="about"
							hint="Tell us about yourself..."
						></v-textarea>
						<v-combobox						
							label="Interests"
							:items="sports"
              item-text="sport" 
              v-model="sportsSelected"
							multiple
							chips
						></v-combobox>           
          </v-col>
        </v-row>
       </v-card-text>        
       <v-card-actions>
         <v-row>
          <v-col cols="12">            
            <v-btn block color="success" 
            @click="onUpdateProfile" >
              Update Profile
            </v-btn>
          </v-col>
          <v-col cols="12">            
             <v-btn block color="primary"
              @click="onCancelUpdateProfile">
              Cancel
            </v-btn>
          </v-col>          
        </v-row>        
       </v-card-actions>
      </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'EditProfile',  
  data: () => ({
    name: '',
    about: '',
    sportsSelected: []
  }),
  computed: {
    sports: function () {
      return ['Baseball', 'Basketball', 'Hockey', 'Soccer', 'Football'];
    }
  },
  methods: {
    ...mapMutations(['setIsEditMode']),
    onUpdateProfile: function () {
			alert(1);
		},
		onCancelUpdateProfile: function () {
			this.setIsEditMode(false);
		}
  },
  mounted() {
    let userProfile = this.$store.getters.userProfile;
    this.name = userProfile.name;
    this.about = userProfile.about;
    this.sportsSelected = userProfile.sports;
  }
};
</script>
<style scoped>
</style>