<template>
  <div id="account-page">
    <div class="container account-container">
      <p><strong>Pseudo :</strong> {{ user.pseudo }}</p>
      <p><strong>Adresse mail :</strong> {{ user.email }} </p>
      <div class="actions">
        <a href="" class="btn btn-link">Mes articles favoris</a>
        <button class="btn btn-markup">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useStore } from 'vuex'
import { computed } from 'vue'

// store
const store = useStore()

/**
 * get the logged user
 */
const user = computed(() => store.state.auth.user)
</script>