<template>
	<v-app-bar
		app
		color="#13893f"
		dark
	>
	<div style="font-size:30px; padding-left:20px; letter-spacing:2px;">
		<span><b>SPORT</b></span><span style="color:#fda733"><b>HUB</b></span>
	</div>

		<v-spacer></v-spacer>		
		<v-btn			
			text
			@click="onHomeClick"
		>
			<span class="mr-2">Home</span>
			<v-icon>mdi-home</v-icon>
		</v-btn>

		<v-btn			
			text			
			v-if="isAuthenticated"
			@click="onProfileClick" 
		>
			<span class="mr-2">Profile</span>
			<v-icon>mdi-account-box</v-icon>
		</v-btn>
		<v-btn			
			text
			@click="onProdAdminClick" 
			v-if="isAuthenticated"		>
			<span class="mr-2">Prod.Admin</span>
			<v-icon>mdi-settings</v-icon>
		</v-btn>
		<v-btn			
			text
			@click="onCalendarClick"
		>
			<span class="mr-2">Available Fields</span>
			<v-icon>calendar_today</v-icon>
		</v-btn>
		<v-btn			
			text
			@click="onProductClick"
		>
			<span class="mr-2">Product</span>
			<v-icon>mdi-map</v-icon>
			
		</v-btn> 

		<v-btn			
			text
			@click="onLoginClick" 
			v-if="!isAuthenticated"
		>
			<span class="mr-2">Login</span>
			<v-icon>mdi-account-circle</v-icon>
		</v-btn>	
					
		<v-btn			
			text
			@click="onLogoutClick"
			v-else
		>
			<span class="mr-2">Logout </span>
			<v-icon>mdi-logout</v-icon>

		</v-btn>	
		<v-btn			
			text
			@click="onAboutClick"
		>
			<span class="mr-2">About</span>
			<!-- <v-icon>mdi-announcement</v-icon> -->
			<span class="material-icons">
				announcement
			</span>
		</v-btn>
	</v-app-bar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'NavBar',
	computed: {
		...mapGetters(['isAuthenticated']),
		currentRouteName() {
			return this.$route.name;
    }
	},
	methods: {
		...mapActions(['onLogout']),
		onHomeClick: function () {
			if (this.currentRouteName != 'Home') {
				this.$router.push('/');
			}			
		},
		onAboutClick: function () {	
			if (this.currentRouteName != 'About') {
				this.$router.push('/about');
			}		
		},
		onProductClick: function () {		
			if (this.currentRouteName != 'Product') {
				this.$router.push('/product');
			}	
		},
		onProfileClick: function () {		
			if (this.currentRouteName != 'Profile') {
				this.$router.push('/profile');
			}	
		},
		onLogoutClick: function () {
			this.onLogout();
				if (this.currentRouteName != 'Home') {
				this.$router.push('/');
			}	
		},
		onLoginClick: function () {	
			if (this.currentRouteName != 'Login') {
				this.$router.push('/login');
			}		
		},

		onProdAdminClick:function () {	
			if (this.currentRouteName != 'ProdAdmin') {
				this.$router.push('/prodAdmin');
			}		
		},

		onCalendarClick: function () {	
			if (this.currentRouteName != 'Calendar') {
				this.$router.push('/calendar');
			}

		}
	}
}
</script>
<style >

</style>
