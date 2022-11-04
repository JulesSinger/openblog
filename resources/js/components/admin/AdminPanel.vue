<template>
  <div id="admin-home-page">
    <Flag title="Panel Administration"/>

    <!-- ADMIN MENU -->
    <div id="admin-menu" class="container">
      <router-link :to="{name: 'AdminQuotes'}" class="admin-menu-item">Gestion des citations</router-link>
      <router-link :to="{name: 'AdminCategories'}" class="admin-menu-item">Gestion des catégories</router-link>
      <router-link :to="{name: 'AdminPosts'}" class="admin-menu-item">Gestion des articles</router-link>
    </div>
    <!-- ADMIN MENU -->

  </div>
</template>

<script setup>
import Flag from "../helpers/Flag.vue"
</script>