<template>
  <div id="home-page">
    <PostPreview />
    <PostPreview />
    <PostPreview />
    <Pagination />
  </div>
</template>
<script>
import PostPreview from './posts/PostPreview.vue'
import Pagination from './helpers/Pagination.vue'
export default {
  name: 'Home',

  components: {
    PostPreview, 
    Pagination
  },
}
</script>