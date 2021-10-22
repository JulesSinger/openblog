<template>
  <div id="home-page">
    <ArticlePreview />
    <ArticlePreview />
    <ArticlePreview />
    <Pagination />
  </div>
</template>
<script>
import ArticlePreview from './articles/ArticlePreview.vue'
import Pagination from './helpers/Pagination.vue'
export default {
  name: 'Home',

  components: {
    ArticlePreview, 
    Pagination
  }
}
</script>