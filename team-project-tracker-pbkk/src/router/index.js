import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;