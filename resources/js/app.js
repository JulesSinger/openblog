import './bootstrap';
import '../sass/app.scss'
import Router from './router/router.js'
import store from './store'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';
import Markdown from 'vue3-markdown-it'
import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp(App)
app.use(Router)
app.use(Markdown)
app.use(store)
app.use(Toaster).provide('toast', app.config.globalProperties.$toast);
app.mount('#app')