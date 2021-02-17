<template>
  <v-app>    
    <v-main>
      <NavBar/>
      <v-container>
        <v-fade-transition leave-absolute>
          <router-view></router-view>        
        </v-fade-transition>
      </v-container>      
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
