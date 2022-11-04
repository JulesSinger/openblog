<template>
  <div id="admin-home-page">
    <Flag title="Gestion des articles"/>

    <!-- ADMIN POST MENU -->
    <div id="admin-menu" class="container">
      <router-link :to="{name: 'PostCreate'}" class="admin-menu-item">Ajouter un article</router-link>
    </div>
    <!-- ADMIN POST MENU -->

  </div>
</template>

<script setup>
import Flag from "../../helpers/Flag.vue"
</script>