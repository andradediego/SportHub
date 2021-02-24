<template>
  <v-row>
    <v-col
      xs="12"
      sm="12"
      md="6"
      offset-md="3"
      lg="4"
      offset-lg="4"
      >
      <v-card>       
       <v-card-text>
        <v-row>
          <v-col cols="12">    
            <v-text-field
              label="Full Name"
              v-model="name"
            >
            </v-text-field>
             <v-text-field
              label="Confirm E-mail"
              v-model="email"
            >
            </v-text-field>
            <v-text-field
              label="Password"
              :append-icon="displayPassword ? 'mdi-eye' : 'mdi-eye-off'"              
              :type="displayPassword ? 'text' : 'password'"
              class="input-group--focused"
            @click:append="displayPassword = !displayPassword"
              v-model="password"
            >
            </v-text-field>
          </v-col>
        </v-row>
       </v-card-text>
       
       <v-card-actions>
         <v-row>
          <v-col cols="12">            
            <v-btn block color="success" 
            @click="onRegisterClick" >
              Register
            </v-btn>
          </v-col>
          <v-col cols="12">            
             <v-btn block color="primary"
              @click="onClickHome">
              Back
            </v-btn>
          </v-col>
          
        </v-row>        
       </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  components: {    
  },
  data: () => ({
    name: '',
    email: '',
    password:'',
    displayPassword: false
  }),
  methods: {
   ...mapActions(['onRegister']),
    onRegisterClick: function () {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      
      this.onRegister(userData);
    },
    onClickHome: function () {	
			if (this.currentRouteName != 'Home') {
				this.$router.push('/Login');
			}		
    }
  }
}

</script>



