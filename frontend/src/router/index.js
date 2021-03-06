import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/accounts';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/accounts',
  },
  {
    path: '/accounts',
    name: 'Home',
    component: Home,
  },
];

const router = new Router({
  mode: process.env.NODE_ENV !== 'test' ? 'history' : 'abstract',
  routes,
});

export default router;
