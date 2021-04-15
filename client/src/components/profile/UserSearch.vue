<template>
  <div>
    <v-row>
      <v-col>
        <v-card            
          flat
        >
          <h1 class="text-center font mt-8">User Search</h1>						 
          <v-row>          
            <v-col
            xs="12"
            sm="12"
            md="9">    
            <v-text-field
              label="User Name"
              :loading="isLoadingProfile" 
              v-model="userSearchText"             
            >
              </v-text-field>                             
            </v-col>
            <v-col 
              xs="12"
              sm="12"
              md="3">
              <v-btn block color="#13893f"
                dark
                @click="onSearchUser">
                Search
              </v-btn> 
            </v-col>
          </v-row>
        </v-card>
      </v-col>    
    </v-row>
    <v-row>
      <template v-for="user in findUser">
        <FindUserCard :user="user" :key="user.id"/>
      </template>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FindUserCard from './FindUserCard.vue'
export default {
  name: 'UserSearch',
  components: {
    FindUserCard
  },
  data: () => ({
    userSearchText: ''
  }),
  computed: {
    ...mapGetters(['isLoadingProfile', 'findUser'])    
  },

  methods: {    
    ...mapActions(['onFindUser']),
    onSearchUser: function () {
      if (!this.userSearchText) {
        return;
      }
      const search = {
        search: this.userSearchText
      };
      this.onFindUser(search);
    }
  },
  mounted() {
    
  }
};
</script>
<style>

</style>
