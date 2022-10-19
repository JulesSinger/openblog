<template>
  <div id="home-page">
    <PostPreview v-for="post in posts" :post='post'  />
    <Pagination v-if="pagination" :pagination="pagination" />
    {{ pagination }}
  </div>
</template>

<script setup>

import PostPreview from './posts/PostPreview.vue'
import Pagination from './helpers/Pagination.vue'
import { usePost } from '../api/posts.js'
import { onMounted } from 'vue'

/**
 * get post api
 */
const { posts, pagination, getPosts } = usePost()

/**
 * when the component loads, get the posts
 */
onMounted(getPosts())

</script>