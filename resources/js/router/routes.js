import Home from '../components/Home.vue'
import Post from '../components/posts/Post.vue'
import Quotes from '../components/quotes/Quotes.vue'
import About from '../components/about/About.vue'
import Login from '../components/authentification/Login.vue'
import Register from '../components/authentification/Register.vue'
import Account from '../components/profil/Account.vue'
import Participate from '../components/participate/Participate.vue'
import Categories from '../components/categories/Categories.vue'
import Category from '../components/categories/Category.vue'
import Tutos from '../components/categories/tutos.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home ,
    meta: { title: 'Accueil' }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
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
    meta: { title: 'Mon Compte', requiresAuth: true }
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
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: Category,
    meta: { title: 'Categorie' }
  },
  {
    path: '/tutorials',
    name: 'Tutoriels informatique',
    component: Tutos,
    meta: { title: 'Tutoriels informatique' }
  }
]
