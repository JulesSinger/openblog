import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes.js'

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

const PROJECT_NAME = 'L\'OpenBlog'
router.afterEach((to, from) => {
    nextTick(() => {
        document.title = PROJECT_NAME + ' - ' + to.meta.title || ''
    })
})
