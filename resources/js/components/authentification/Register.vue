<template>
  <div id="register-page" class="auth-page">
    <h1>L'OpenBlog</h1>
    <div class="container auth-container">
      <h2>Inscription</h2>
      <form action="">
        <div class="form-container">
          <label for="name">Nom Prénom</label>
          <input type="name" name="name" id="name" placeholder="Ecrivez votre nom">
        </div>

        <div class="form-container">
          <label for="email">Adresse mail</label>
          <input type="email" name="email" id="email" placeholder="mail@example.com">
        </div>

        <div class="form-container">
          <label for="password">Mot de passe</label>
          <input type="password" name="password" id="password" placeholder="*************">
        </div>

        <div class="form-container">
          <label for="password">Confirmez le mot de passe</label>
          <input type="password" name="password" id="password" placeholder="*************">
          <a href="">Mot de passe oublié ?</a>
        </div>

        <button type="submit" class="btn btn-markup">Continuer</button>
      </form>

      <p>Déjà inscrit ? <router-link :to="{ name: 'Login' }">Connexion</router-link></p>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>