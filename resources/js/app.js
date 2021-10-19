import { createApp } from 'vue'
import { router } from './app/router.js'
import App from './app/App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
