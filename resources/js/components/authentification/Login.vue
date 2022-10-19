<template>
  <div id="login-page" class="auth-page">
    <h1>L'OpenBlog</h1>

    <!-- LOGIN -->
    <div class="container auth-container">
      <h2>Connexion</h2>
      <form @submit.prevent='call_login'>
        <div class="form-container">
          <label for="email">Adresse mail</label>
          <input type="email" name="email" id="email" placeholder="mail@example.com" v-model="login_form.email">
        </div>

        <div class="form-container">
          <label for="password">Mot de passe</label>
          <input type="password" name="password" id="password" placeholder="*************" v-model="login_form.password">
          <a href="">Mot de passe oublié ?</a>
        </div>

        <div v-if="errors" class="alert-error">
          {{ errors }}
        </div>
        
        <button type="submit" class="btn btn-markup">Continuer</button>
      </form>

      <p>Pas de compte ? <router-link :to="{ name: 'Register' }">Inscription</router-link></p>

    </div>
    <!-- LOGIN -->
  </div>
</template>

<script setup>

import  { reactive } from 'vue'
import { useAuth } from '../../api/auth.js'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// router & store
const router = useRouter()
const store = useStore()

/**
 * this form is linked to the login form
 */
const login_form = reactive({
  email:'',
  password:'',
})
    
/**
 * import the login api function
 */
const { loginWithCredentials, errors } = useAuth(login_form)

/**
 * call the function that send a login request
 * if the request is successful, we store the user in our local storage
 */
const call_login = () => {
loginWithCredentials((response) => {
  store.dispatch('auth/login',response.data.data.token)
  router.push({ name: 'Home' })
})
}
</script>