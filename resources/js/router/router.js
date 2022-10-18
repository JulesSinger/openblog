import { createWebHistory, createRouter } from 'vue-router'
import store from '../store'
import { nextTick } from 'vue'
import { routes } from './routes.js'
const PROJECT_NAME = 'L\'OpenBlog'

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "Home" })
        } else {
            next()
        }
    } else if(to.meta.middleware == "auth") {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "Login" })
        }
    } else if(to.meta.middleware == "admin") {
        if(store.state.auth.user.role == "admin") {
            next()
        } else {
            next({ name: "Home"})
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    nextTick(() => {
        document.title = PROJECT_NAME + ' - ' + to.meta.title || ''
    })
})

export default router