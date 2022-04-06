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

<script>

import store from '../../store'
export default {
  name: 'Account',

  setup () {
    return { user : store.state.user.data }
  }
}
</script>