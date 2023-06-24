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
        path: '/accounts',
        name: 'Accounts',
        component: () => import('./components/Accounts.vue'),
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: () => import('./components/Transactions.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
