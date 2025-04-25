import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import Services from './pages/Services.vue';
import AboutUs from './pages/AboutUs.vue';
import FAQ from './pages/FAQ.vue';

const routes = [
  { path: '/', component: Home }, // Главная страница
  { path: '/profile', component: Profile }, // Личный кабинет
  { path: '/services', component: Services },
  { path: '/aboutus', component: AboutUs },
  { path: '/faq', component: FAQ },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
