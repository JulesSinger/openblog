export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../Home.vue') ,
    meta: { title: 'Accueil' }
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../articles/Article.vue'),
    meta: { title: 'Article' }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../quotes/Quotes.vue'),
    meta: { title: 'Citations' }
  },
   {
    path: '/about',
    name: 'About',
    component: () => import('../About.vue'),
    meta: { title: 'A Propos' }
  }
]
