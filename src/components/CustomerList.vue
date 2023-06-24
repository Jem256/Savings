<template>
	<div class="customer-list">
	  <table>
		<thead>
		  <tr>
			<th>Name</th>
			<th>ID Number</th>
			<th>Phone Number</th>
			<th>Email</th>
			<th>Member Number</th>
		  </tr>
		</thead>
		<tbody>
		  <tr v-for="customer in customers" :key="customer.id">
			<td>{{ customer.name }}</td>
			<td>{{ customer.idNumber }}</td>
			<td>{{ customer.phoneNumber }}</td>
			<td>{{ customer.email }}</td>
			<td>{{ customer.memberNumber }}</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  </template>
  
  <script>
  export default {
	name: 'customerList',
	data() {
	  return {
		customers: [
		  {
			id: 1,
			name: 'John Doe',
			idNumber: '123456789',
			phoneNumber: '555-123-4567',
			email: 'john@example.com',
			memberNumber: 'M1234'
		  },
		  {
			id: 2,
			name: 'Jane Smith',
			idNumber: '987654321',
			phoneNumber: '555-987-6543',
			email: 'jane@example.com',
			memberNumber: 'M5678'
		  },
		  // Add more customer data here...
		]
	  };
	}
  };
  </script>
  
  <style scoped>
  .customer-list {
	margin-top: 20px;
  }
  
  table {
	width: 100%;
	border-collapse: collapse;
  }
  
  th, td {
	padding: 10px;
	text-align: left;
	border-bottom: 1px solid #ccc;
  }
  
  th {
	background-color: #f4f4f4;
  }
  
  tr:hover {
	background-color: #f9f9f9;
  }
  </style>
  