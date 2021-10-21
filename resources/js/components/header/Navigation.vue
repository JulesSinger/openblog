<template>
  <nav class="main-nav">
    <ul>
      <li><a href="./">ACCUEIL</a> </li>
      <li><a href="./categories.html">CATEGORIES ARTICLES</a> </li>
      <li><router-link :to="{name: 'Quotes'}">CITATIONS</router-link></li>
      <li><a href="./participate.html">PROPOSER UN ARTICLE</a></li>
      <li><router-link :to="{name: 'About'}">A PROPOS</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>