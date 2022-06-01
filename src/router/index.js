import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
      },
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      components: {
        default: Dashboard,
      },
    },
  ],
});
