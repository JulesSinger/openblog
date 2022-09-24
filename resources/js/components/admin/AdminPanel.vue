<template>
  <div id="admin-home-page">
    <Flag title="Panel Administration"/>
    <div id="admin-menu" class="container">
      <router-link :to="{name: 'AdminQuotes'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
      <router-link :to="{name: 'Login'}" class="admin-menu-item">Ajouter / Supprimer une citation</router-link>
    </div>
  </div>
</template>
<script>
import Flag from "../helpers/Flag.vue"
export default {
  name: 'AdminPanel',

  components: {
    Flag
  }
}
</script>