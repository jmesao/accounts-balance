import Vue from 'vue';
import Router from 'vue-router';
import Accounts from '../views/accounts';
import AccountDetails from '../views/account-details';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/accounts',
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts,
  },
  {
    path: '/account/:id',
    name: 'account-details',
    component: AccountDetails,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
