<template>
	<div v-text="user.name">
		
	</div>
</template>
<script>
export default {
	async created(){
   		await this.$store.dispatch('getCurrentUserInReload')
		   this.user = this.$store.getters.currentUser
	 },
	data() {
		return {
			user: ''
		}
	},
	methods: {
	},
	
}
</script>
<style lang="scss">
	
</style>