import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'
import VueVectorMap from "vuevectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/jsvectormap.css";
import ToastService from 'primevue/toastservice';
import naive from 'naive-ui'

const app = createApp(App)
app.use(ToastService);
app.use(VueVectorMap);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router)
app.use(naive)
app.use(PrimeVue, {
    unstyled: true,
    ripple: true,
});

app.mount('#app')
