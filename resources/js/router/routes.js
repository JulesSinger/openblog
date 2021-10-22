import Home from '../components/Home.vue'
import Article from '../components/articles/Article.vue'
import Quotes from '../components/quotes/Quotes.vue'
import About from '../components/About.vue'
import Login from '../components/authentification/Login.vue'
import Register from '../components/authentification/Register.vue'
import Account from '../components/Account.vue'
import Participate from '../components/Participate.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Connexion' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Inscription' }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { title: 'Mon Compte' }
  },
  {
    path: '/participate',
    name: 'Participate',
    component: Participate,
    meta: { title: 'Publier un article' }
  }
]
