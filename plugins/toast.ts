import { defineNuxtPlugin } from '#app';
import Toast, { type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    const options: PluginOptions = {
        timeout: 5000, // Duration in milliseconds
        closeOnClick: true, // Close toast on click
        pauseOnHover: true, // Pause toast on hover
        draggable: true, // Make toast draggable
    };

    nuxtApp.vueApp.use(Toast, options);
});
