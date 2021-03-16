<template>
	<v-col>
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
							:items="sportsData"
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
import { mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  name: 'EditProfile',  
  data: () => ({
    name: '',
    about: '',
    sportsSelected: []
  }),
  computed: {
    ...mapGetters(['sportsData']),
    sports: function () {
      return ['Baseball', 'Basketball', 'Hockey', 'Soccer', 'Football'];
    }
  },
  methods: {
    ...mapMutations(['setIsEditMode']),
    ...mapActions(['onUpdateUserData', 'onGetSports']),
    onUpdateProfile: function () {
      const data = {
        name: this.name,
        about: this.about,
        sports: this.sportsSelected.map((element) => element.id)
      }
      
			this.onUpdateUserData(data);      
		},
		onCancelUpdateProfile: function () {
			this.setIsEditMode(false);
		}
  },
  mounted() {
    const userProfile = this.$store.getters.userProfile;
    this.name = userProfile.name;
    this.about = userProfile.about;
    this.sportsSelected = userProfile.sports;

    this.onGetSports();
  }
};
</script>
<style scoped>
</style>