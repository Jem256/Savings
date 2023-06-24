import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('./components/Signup.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./components/Login.vue'),
    },
    {
        path: '/customer-list',
        name: 'customerList',
        component: () => import('./components/CustomerList.vue'),
    },
    {
        path: '/savings-transactions',
        name: 'savingsTransactions',
        component: () => import('./components/SavingsTransactions.vue'),
    },
    {
        path: '/savings-product-management',
        name: 'savingsProductManagement',
        component: () => import('./components/SavingsProductManagement.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
