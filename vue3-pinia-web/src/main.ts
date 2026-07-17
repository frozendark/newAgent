import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.config.errorHandler = (err, instance, info) => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.error('Vue error:', err, info, instance);
  }
};

app.config.warnHandler = (message, instance, trace) => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn('Vue warning:', message, trace, instance);
  }
};

app.mount('#app');
