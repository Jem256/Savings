<template>
	<div class="login-container">
	  <h2>Login</h2>
	  <form @submit.prevent="login" class="login-form">
		<div class="form-group">
		  <label for="email">Email:</label>
		  <input type="email" id="email" v-model="email" required>
		</div>
		<div class="form-group">
		  <label for="password">Password:</label>
		  <input type="password" id="password" v-model="password" required>
		</div>
		<button type="submit">Login</button>
		<p>
			<router-link to="signup">Sign Up</router-link>
		</p>
	  </form>
	</div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
	name: 'Login',
	data() {
	  return {
		email: '',
		password: ''
	  };
	},
	methods: {
		async login()
		{
			let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`, {
				name: this.name,
				email: this.email,
				password: this.password
			});

			console.warn(result);
			if(result.status==200 && result.data.length>0){
				localStorage.setItem("user-info", JSON.stringify(result.data))
				this.$router.push({name:'Home'})
			}
		}
	  
	},
	mounted()
	{
		let user = localStorage.getItem('user-info');
		if (user)
		{
			this.$router.push({name:'Home'})
		}
	}
  }
  </script>
  
  <style scoped>
  .login-container {
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
	background-color: #f4f4f4;
	border-radius: 5px;
  }
  
  .login-form {
	display: flex;
	flex-direction: column;
  }
  
  .form-group {
	margin-bottom: 10px;
  }
  
  label {
	font-weight: bold;
  }
  
  input[type="email"],
  input[type="password"] {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
  }
  
  button[type="submit"] {
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  
  button[type="submit"]:hover {
	background-color: #0056b3;
  }
  </style>
  