<template>
  <div id="register-page" class="auth-page">
    <h1>L'OpenBlog</h1>
    <div class="container auth-container">
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <div class="form-container">
          <label for="pseudo">Pseudo</label>
          <input type="name" name="pseudo" id="pseudo" placeholder="Ecrivez votre nom" v-model='register_form.pseudo'>
        </div>

        <div class="form-container">
          <label for="email">Adresse mail</label>
          <input type="email" name="email" id="email" placeholder="mail@example.com" v-model='register_form.email'>
        </div>

        <div class="form-container">
          <label for="password">Mot de passe</label>
          <input type="password" name="password" id="password" placeholder="*************" v-model='register_form.password'>
        </div>

        <div class="form-container" style="margin-bottom: 1rem">
          <label for="password">Confirmez le mot de passe</label>
          <input type="password" name="password" id="password" placeholder="*************" v-model='register_form.password_confirmation'>
        </div>

        <div v-if="errors" class="alert-error">
          {{ errors }}
        </div>

        <button type="submit" class="btn btn-markup">Continuer</button>
      </form>

      <p>Déjà inscrit ? <router-link :to="{ name: 'Login' }">Connexion</router-link></p>

    </div>
  </div>
</template>


<script>
import  { reactive } from 'vue'
import { useAuth } from '../../api/auth.js'
import { useRouter } from 'vue-router'
import store from '../../store'
export default {
  name: 'Register',

  setup() {
    const router = useRouter()

    const register_form = reactive({
      pseudo: '',
      email: '',
      password: '',
      password_confirmation: '',
    })

    const { registerWithCredentials, errors } = useAuth(register_form)

    return {
      register_form,
      register : () => {
        registerWithCredentials((response) => {
          store.state.user.token = response.data.token;
          store.state.user.data  = response.data.user;
          localStorage.setItem('auth_token', store.state.user.token)
          router.push({ name: 'Home' })
        })
      },
      errors
    }
  }
}
</script>