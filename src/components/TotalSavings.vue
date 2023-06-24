<template>
	<div class="total-savings">
	  <h3>Total Savings</h3>
	  <div class="customer-savings" v-for="customer in customers" :key="customer.id">
		<h4>{{ customer.name }}</h4>
		<p>Total Savings: ${{ calculateTotalSavings(customer.transactions) }}</p>
	  </div>
	  <hr>
	  <p class="overall-savings">Overall Total Savings: ${{ calculateOverallTotalSavings() }}</p>
	</div>
  </template>
  
  <script>
  export default {
	name: 'totalSavings',
	data() {
	  return {
		customers: [
		  // Customer data here...
		]
	  };
	},
	methods: {
	  calculateTotalSavings(transactions) {
		return transactions.reduce((total, transaction) => total + transaction.amount, 0);
	  },
	  calculateOverallTotalSavings() {
		let overallTotal = 0;
		for (const customer of this.customers) {
		  overallTotal += this.calculateTotalSavings(customer.transactions);
		}
		return overallTotal;
	  }
	}
  };
  </script>
  
  <style scoped>
  .total-savings {
	margin-top: 20px;
  }
  
  .customer-savings {
	margin-bottom: 10px;
  }
  
  h4 {
	margin-bottom: 5px;
  }
  
  hr {
	margin: 10px 0;
	border: none;
	border-top: 1px solid #ccc;
  }
  
  .overall-savings {
	font-weight: bold;
  }
  </style>
  