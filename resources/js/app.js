import './bootstrap';
import '../sass/app.scss'
import Router from './router/router.js'
import store from './store'
import App from './App.vue'

import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp(App)
app.use(Router)
app.use(store)
app.mount('#app')