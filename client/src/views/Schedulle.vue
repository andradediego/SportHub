<template>
	<v-row
		class="mt-5">
		<v-calendar>
			<CalendarMonth/>
		</v-calendar>
	</v-row>
</template>
 
<script>
import CalendarMonth from "../components/CalendarMonth";
export default {
  name: 'Schedulle',
 components: {
    CalendarMonth
  },
  data: () => ({
    
  }),
  watch: {
    
  },
  methods: {    
  },
}
</script>
<style>
</style>
