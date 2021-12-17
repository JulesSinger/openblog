<template>
  <div id="home-page">
    <PostPreview v-for="post in posts" :post='post'  />
    <Pagination v-if="pagination" :pagination="pagination" />
    {{ pagination }}

  </div>
</template>
<script>
import PostPreview from './posts/PostPreview.vue'
import Pagination from './helpers/Pagination.vue'
import { usePost } from '../api/posts.js'
import { onMounted } from 'vue'

export default {
  name: 'Home',

  components: {
    PostPreview, 
    Pagination
  },

  data () {
    const { posts, pagination, getPosts } = usePost()
    onMounted(getPosts())

    return {
      posts,
      pagination
    }
  }
}
</script>