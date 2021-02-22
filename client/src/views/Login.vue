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
              label="E-mail"
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
            <v-btn block color="primary"
              @click="onClickLogin">
              Log In
            </v-btn>
          </v-col>
          <!-- <v-col cols="12">            
            <v-btn text block>
              Forgot password?
            </v-btn>
          </v-col>
          <v-divider class="mx-4"></v-divider> 
          -->
          <v-col cols="12">            
            <v-btn block color="success">
              Create Account
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
  name: 'Login',
  components: {    
  },
  data: () => ({
    email: 'diego@gmail.com',
    password:'123456',
    displayPassword: false
  }),
  methods: {
    ...mapActions(['onLogin']),
    onClickLogin: function () {
      const userData = {
        email: this.email,
        password: this.password
      }
      
      this.onLogin(userData);
    }
  }
}
</script>
