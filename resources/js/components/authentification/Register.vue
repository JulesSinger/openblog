<template>
  <div id="register-page" class="auth-page">
    <h1>L'OpenBlog</h1>

    <!-- REGISTER -->
    <div class="container auth-container">
      <h2>Inscription</h2>
      <form @submit.prevent="call_register">
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
    <!-- REGISTER -->
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
 * this form is linked to the register form
 */
const register_form = reactive({
  pseudo: '',
  email: '',
  password: '',
  password_confirmation: '',
})

/**
 * import the register api function
 */
const { registerWithCredentials, errors } = useAuth(register_form)

/**
 * call the function that send a register request
 * if the request is successful, we store the user in our local storage
 */
const call_register = () => {
  registerWithCredentials((response) => {
    store.dispatch('auth/login',response.data.data.token)
    router.push({ name: 'Home' })
  })
}

</script>