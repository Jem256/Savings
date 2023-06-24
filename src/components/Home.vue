<template>
	<h1>I am Home!</h1>
  </template>

<script>
export default {
	name: 'Home',
	mounted()
	{
		let user = localStorage.getItem('user-info');
		if (!user)
		{
			this.$router.push({name:'Signup'})
		}
	}
}
</script>