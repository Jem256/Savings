import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home.vue'),
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

const router = new VueRouter({
    mode: 'history',
    routes,
});
