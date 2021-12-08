<template>
  <nav class="main-nav">
    <ul>
      <li><router-link :to="{name: 'Home'}">ACCUEIL</router-link></li>
      <li><router-link :to="{name: 'Categories'}">CATEGORIES ARTICLES</router-link> </li>
      <li><router-link :to="{name: 'Quotes'}">CITATIONS</router-link></li>
      <li><router-link :to="{name: 'Participate'}">PROPOSER UN ARTICLE</router-link></li>
      <li><router-link :to="{name: 'About'}">A PROPOS</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>