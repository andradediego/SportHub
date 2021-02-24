<template>
  <v-app>    
    <v-main>
      <NavBar/>
      <v-container>
        <v-fade-transition leave-absolute>
          <router-view></router-view>        
        </v-fade-transition>
        <v-calendar>
        <CalendarMonth/>
        </v-calendar>
      </v-container>      
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import CalendarMonth from "./components/CalendarMonth";

export default {
  name: "App",

  components: {
    CalendarMonth
  }
};

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
