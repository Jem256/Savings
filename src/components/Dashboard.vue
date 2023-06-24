<template>
	<div class="dashboard">
	  <div class="sidebar">
		<ul>
		  <li @click="selectSection('customerList')" :class="{ active: currentSection === 'customerList' }">Customer List</li>
		  <li @click="selectSection('savingsTransactions')" :class="{ active: currentSection === 'savingsTransactions' }">Savings Transactions</li>
		  <li @click="selectSection('savingsProductManagement')" :class="{ active: currentSection === 'savingsProductManagement' }">Savings Product Management</li>
		</ul>
	  </div>
	  <div class="content">
		<h2 class="section-title">{{ currentSectionTitle }}</h2>
		<div v-if="currentSection === 'customerList'">
		  <!-- Customer List Component -->
		  <CustomerList />
		</div>
		<div v-else-if="currentSection === 'savingsTransactions'">
		  <!-- Savings Transactions Component -->
		  <SavingsTransactions />
		</div>
		<div v-else-if="currentSection === 'savingsProductManagement'">
		  <!-- Savings Product Management Component -->
		  <SavingsProductManagement />
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import CustomerList from './CustomerList.vue';
  import SavingsTransactions from './SavingsTransactions.vue';
  import SavingsProductManagement from './SavingsProductManagement.vue';
  
  export default {
	name: 'Dashboard',
	components: {
	  CustomerList,
	  SavingsTransactions,
	  SavingsProductManagement
	},
	data() {
	  return {
		currentSection: 'customerList',
		currentSectionTitle: 'Customer List'
	  };
	},
	methods: {
	  selectSection(section) {
		this.currentSection = section;
		if (section === 'customerList') {
		  this.currentSectionTitle = 'Customer List';
		} else if (section === 'savingsTransactions') {
		  this.currentSectionTitle = 'Savings Transactions';
		} else if (section === 'savingsProductManagement') {
		  this.currentSectionTitle = 'Savings Product Management';
		}
	  }
	}
  };
  </script>
  
  <style scoped>
  .dashboard {
	display: flex;
	height: 100vh;
  }
  
  .sidebar {
	flex: 0 0 200px;
	background-color: #f4f4f4;
	padding: 20px;
  }
  
  .sidebar ul {
	list-style: none;
	padding: 0;
  }
  
  .sidebar li {
	margin-bottom: 10px;
	cursor: pointer;
  }
  
  .sidebar li.active {
	font-weight: bold;
  }
  
  .content {
	flex: 1;
	padding: 20px;
  }
  
  .section-title {
	margin-bottom: 20px;
	font-size: 24px;
  }
  </style>
  