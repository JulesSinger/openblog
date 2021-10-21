<template>
  <div id="home-page">
    <Header />
    <ArticlePreview />
  </div>
</template>
<script>
import ArticlePreview from './articles/ArticlePreview.vue'
import Header from './header/Header.vue'
export default {
  name: 'Home',

  components: {
    ArticlePreview, 
    Header
  }
}
</script>