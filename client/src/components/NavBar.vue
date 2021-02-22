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
			<v-icon>mdi-open-in-new</v-icon>
		</v-btn>
		<v-btn			
			text
			@click="onAboutClick"
		>
		<span class="mr-2">About</span>
			
		</v-btn>
		<v-btn			
			text
			@click="onProductClick"
		>
			<span class="mr-2">Product</span>
			
		</v-btn>
		<v-btn
			text
			@click="onRegisterClick"
		>
					<span class="mr-2">Register</span>
		</v-btn>
		<v-btn			
			text
			@click="onLoginClick" 
		>
			<span class="mr-2">Login</span>
			<v-icon>mdi-account-circle</v-icon>
		</v-btn>
	</v-app-bar>
</template>
<script>
export default {
	name: 'NavBar',
	methods: {
		onHomeClick: function () {
			this.$router.push('/');			
		},
		onAboutClick: function () {
			this.$router.push('/about');
		},
		onProductClick: function () {
			this.$router.push('/product');
		},
		onRegisterClick: function () {
			this.$router.push('/register');
		},
		onLoginClick: function () {
			this.$router.push('/login');
		}
	}
}
</script>
<style >

</style>