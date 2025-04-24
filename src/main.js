import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Подключаем роутер
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
app.use(router); // Используем Vue Router
app.mount('#app');
