import Home from '../components/Home.vue'
import Article from '../components/articles/Article.vue'
import Quotes from '../components/quotes/Quotes.vue'
import About from '../components/About.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home ,
    meta: { title: 'Accueil' }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: { title: 'Article' }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes,
    meta: { title: 'Citations' }
  },
   {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'A Propos' }
  }
]
