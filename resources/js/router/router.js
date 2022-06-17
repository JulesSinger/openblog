import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import { routes } from './routes.js'

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token)
        next({name: 'Login'});
    else if (to.meta.requiresAdmin && store.state.user.role != 1)
        next({name: 'Home'})
    else 
        next();
})

const PROJECT_NAME = 'L\'OpenBlog'

router.afterEach((to, from) => {
    nextTick(() => {
        document.title = PROJECT_NAME + ' - ' + to.meta.title || ''
    })
})
