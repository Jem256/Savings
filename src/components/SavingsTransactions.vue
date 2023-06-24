<template>
	<div class="savings-transactions">
	  <form @submit.prevent="submitForm">
		<div class="form-group">
		  <label for="customerId">Customer:</label>
		  <select id="customerId" v-model="selectedCustomerId">
			<option v-for="customer in customers" :key="customer.id" :value="customer.id">{{ customer.name }}</option>
		  </select>
		</div>
		<div class="form-group">
		  <label for="transactionId">Transaction ID:</label>
		  <input type="text" id="transactionId" v-model="transactionId" required>
		</div>
		<div class="form-group">
		  <label for="transactionDate">Date:</label>
		  <input type="date" id="transactionDate" v-model="transactionDate" required>
		</div>
		<div class="form-group">
		  <label for="paymentMethod">Payment Method:</label>
		  <input type="text" id="paymentMethod" v-model="paymentMethod" required>
		</div>
		<div class="form-group">
		  <label for="transactionAmount">Amount:</label>
		  <input type="number" id="transactionAmount" v-model="transactionAmount" required>
		</div>
		<button type="submit">Add Transaction</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	name: 'savingsTransactions',
	data() {
	  return {
		customers: [
		  // Customer data here...
		],
		selectedCustomerId: null,
		transactionId: '',
		transactionDate: '',
		paymentMethod: '',
		transactionAmount: ''
	  };
	},
	methods: {
	  submitForm() {
		if (!this.selectedCustomerId || !this.transactionId || !this.transactionDate || !this.paymentMethod || !this.transactionAmount) {
		  alert('Please fill in all fields.');
		  return;
		}
		
		// Find the selected customer based on the ID
		const selectedCustomer = this.customers.find(customer => customer.id === this.selectedCustomerId);
		if (!selectedCustomer) {
		  alert('Invalid customer selection.');
		  return;
		}
		
		// Create a new transaction object
		const newTransaction = {
		  id: this.transactionId,
		  date: this.transactionDate,
		  paymentMethod: this.paymentMethod,
		  amount: parseFloat(this.transactionAmount)
		};
		
		// Update the customer's savings amount with the new transaction
		selectedCustomer.transactions.push(newTransaction);
		selectedCustomer.savingsAmount += newTransaction.amount;
		
		// Reset form fields
		this.selectedCustomerId = null;
		this.transactionId = '';
		this.transactionDate = '';
		this.paymentMethod = '';
		this.transactionAmount = '';
		
		alert('Transaction added successfully.');
	  }
	}
  };
  </script>
  
  <style scoped>
  .savings-transactions {
	margin-top: 20px;
  }
  
  .form-group {
	margin-bottom: 10px;
  }
  
  label {
	display: block;
	font-weight: bold;
  }
  
  input[type="text"],
  input[type="date"],
  input[type="number"] {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
  }
  
  select {
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
  </style>
  