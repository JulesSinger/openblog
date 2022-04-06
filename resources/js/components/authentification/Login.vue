<template>
  <div id="login-page" class="auth-page">
    <h1>L'OpenBlog</h1>
    <div class="container auth-container">
      <h2>Connexion</h2>
      <form @submit.prevent='login' action="">
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
  </div>
</template>

<script>

import  { reactive } from 'vue'
import { useAuth } from '../../api/auth.js'
import { useRouter } from 'vue-router'
import store from '../../store'

export default {
  name: 'Login',

  setup() {
    const router = useRouter()

    const login_form = reactive({
      email:'',
      password:'',
    })

    const { loginWithCredentials, errors } = useAuth(login_form)

    return {
      login_form,
      login: () => {
        loginWithCredentials((response) => {
          store.state.user.token = response.data.token;
          store.state.user.data  = response.data.user;
          router.push({ name: 'Home' })
        })
      },
      errors
    }
  }
}
</script>