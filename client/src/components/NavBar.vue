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
			@click="onAboutClick"
		>
			<span class="mr-2">About</span>
			<!-- <v-icon>mdi-announcement</v-icon> -->
			<span class="material-icons">
				announcement
			</span>
		</v-btn>
		<v-btn			
			text
			@click="onProductClick"
		>
			<span class="mr-2">Product</span>
			
		</v-btn> 
		<!-- <v-btn
			text
			@click="onRegisterClick"
		>
					<span class="mr-2">Register</span>
		</v-btn> -->
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
		onLogoutClick: function () {
			this.onLogout();
		},
		// onRegisterClick: function () {
		// 	if (this.currentRouteName != 'Register') {
		// 		this.$router.push('/register');
		// 	}
		// },
		onLoginClick: function () {	
			if (this.currentRouteName != 'Login') {
				this.$router.push('/login');
			}		
		}
	}
}
</script>
<style >

</style>