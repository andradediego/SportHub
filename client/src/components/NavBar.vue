<template>
	<v-app-bar
		app
		color="primary"
		dark
	>
		<div class="d-flex align-center">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
				transition="scale-transition"
				width="40"
			/>

			<v-img
				alt="Vuetify Name"
				class="shrink mt-1 hidden-sm-and-down"
				contain
				min-width="100"
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
				width="100"
			/>
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
		onLoginClick: function () {
			this.$router.push('/login');
		}
	}
}
</script>
<style >
	
</style>