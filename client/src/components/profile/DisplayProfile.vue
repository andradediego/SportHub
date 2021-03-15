<template>
  <v-row>
		<v-col>
			<v-card flat>				
				<h1 class="text-center font mt-8">{{userName}}</h1>						
				<!-- <v-img
					height="200px"
					src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
				>					            
					<v-card-title class="white--text mt-8">
						<v-avatar size="56">
							<img
								alt="user"
								src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
							>
						</v-avatar>
						<p class="ml-3">
							John Doe
						</p>
					</v-card-title>
				</v-img> -->
				<v-card-title>About</v-card-title>
				<v-card-text>
					{{userAbout}}
				</v-card-text>

				<v-card-title>Interest in</v-card-title>

				<v-card-text>
					<v-chip-group							
						column
					>
						<v-chip v-for="interest in userInterest"
							outlined
							color="#13893f"
							:key="interest.id"
						>
							{{interest.sport}}
						</v-chip>
					</v-chip-group>
				</v-card-text>				
      </v-card>
		</v-col>
	</v-row>
</template>

<script>

export default {
  name: 'DisplayProfile',
	props: {
		userName: {
			type: String,
      required: true,
			default: ''
		},		
		userAbout: {
			type: String,
      required: true,
			default: ''
		},
		userInterest: {
			type: Array,
      required: true,
			default: function () { return [] }
		}
	},

  components: {
  },
	computed: {		
	},

  data: () => ({

  }),
  methods: {
    
  },
  mounted() {
    
  }
};
</script>
<style scoped>
.font{
	font-size: 1.75rem!important;
}
</style>
