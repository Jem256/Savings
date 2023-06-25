<template>
	<div class="savings-product-management">
	  
	  <!-- Create or Edit Form -->
	  <form v-if="showForm" @submit.prevent="saveProduct">
		<div class="form-group">
		  <label for="productName">Product Name:</label>
		  <input type="text" id="productName" v-model="currentProduct.name" required>
		</div>
		<div class="form-group">
		  <label for="productDescription">Product Description:</label>
		  <textarea id="productDescription" v-model="currentProduct.description" required></textarea>
		</div>
		<button type="submit">{{ isEditing ? 'Update Product' : 'Create Product' }}</button>
		<button type="button" @click="cancelEdit">Cancel</button>
	  </form>
	  
	  <!-- Product List -->
	  <div class="product-list" v-else>
		<div v-for="product in products" :key="product.id" class="product-item">
		  <h4>{{ product.name }}</h4>
		  <p>{{ product.description }}</p>
		  <div class="product-actions">
			<button @click="editProduct(product)">Edit</button>
			<button @click="deleteProduct(product)">Delete</button>
		  </div>
		</div>
	  </div>
	  
	  <!-- Add Product Button -->
	  <div class="add-product" v-if="!showForm">
		<button @click="showCreateForm">Add Product</button>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'savingsProductManagement',
	data() {
	  return {
		products: [
		  // Savings product data here...
		],
		currentProduct: {
		  id: null,
		  name: '',
		  description: ''
		},
		isEditing: false,
		showForm: false
	  };
	},
	methods: {
	  showCreateForm() {
		this.isEditing = false;
		this.currentProduct = {
		  id: null,
		  name: '',
		  description: ''
		};
		this.showForm = true;
	  },
	  saveProduct() {
		if (this.isEditing) {
		  // Update existing product
		  const existingProduct = this.products.find(product => product.id === this.currentProduct.id);
		  if (existingProduct) {
			existingProduct.name = this.currentProduct.name;
			existingProduct.description = this.currentProduct.description;
		  }
		} else {
		  // Create new product
		  const newProduct = {
			id: Date.now().toString(),
			name: this.currentProduct.name,
			description: this.currentProduct.description
		  };
		  this.products.push(newProduct);
		}
		
		this.cancelEdit();
	  },
	  editProduct(product) {
		this.isEditing = true;
		this.currentProduct = { ...product };
		this.showForm = true;
	  },
	  deleteProduct(product) {
		const index = this.products.indexOf(product);
		if (index !== -1) {
		  this.products.splice(index, 1);
		}
	  },
	  cancelEdit() {
		this.showForm = false;
	  }
	}
  };
  </script>
  
  <style scoped>
  .savings-product-management {
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
  textarea {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
  }
  
  button[type="submit"],
  button[type="button"] {
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  
  .product-list {
	margin-top: 20px;
  }
  
  .product-item {
	margin-bottom: 10px;
  }
  
  .product-actions {
	margin-top: 5px;
  }
  
  .add-product {
	margin-top: 20px;
  }
  </style>
  