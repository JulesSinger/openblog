<template>
  <header class="main-header">
    <TopBar />
    <Navigation />
  </header>
</template>
<script>
import Navigation from './Navigation.vue'
import TopBar from './TopBar.vue'

export default {
  name: 'Header',

  components: {
    Navigation,
    TopBar
  }
}
</script>