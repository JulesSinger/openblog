<template>
  <div id="home-page">
    <ArticlePreview />
  </div>
</template>
<script>
import ArticlePreview from './articles/ArticlePreview.vue'
export default {
  name: 'Home',

  components: {
    ArticlePreview, 
  }
}
</script>