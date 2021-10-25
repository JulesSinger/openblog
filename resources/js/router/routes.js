import Home from '../Home.vue'
import Article from '../articles/components/Article.vue'
import Quotes from '../quotes/components/Quotes.vue'
import About from '../about/components/About.vue'
import Login from '../authentification/components/Login.vue'
import Register from '../authentification/components/Register.vue'
import Account from '../profil/components/Account.vue'
import Participate from '../participate/components/Participate.vue'
import Categories from '../Categories/components/Categories.vue'

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
    meta: { title: 'À Propos' }
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
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { title: 'Catégories d\'article' }
  }
]
