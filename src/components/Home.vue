<template>
	<h1>Savings Management System</h1>
	<Dashboard />
</template>

<script>
import Dashboard from './Dashboard.vue'
export default {
	name: 'Home',
	components: {
		Dashboard
	},
	// mounted()
	// {
	// 	let user = localStorage.getItem('user-info');
	// 	if (!user)
	// 	{
	// 		this.$router.push({name:'Signup'})
	// 	}
	// }
}
</script>