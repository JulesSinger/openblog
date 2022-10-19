<template>
  <div id="category-page" v-if="category">
    <Flag :title="category.name.toUpperCase()" :subtitle="category.posts.length+' ARTICLES'" />
    <PostPreview v-for="post in category.posts" :post="post" />
  </div>
</template>

<script setup>

import Flag from "../helpers/Flag.vue"
import PostPreview from '../posts/PostPreview.vue'
import { useCategories } from "../../api/categories.js"
import { useRoute } from 'vue-router'
import { onMounted } from "vue"
  
// route
const route = useRoute()

/**
 * get the category_id by the url params
 */
const category_id = route.params.id

/**
 * import the category api 
 */
const { category, getCategory } = useCategories(category_id)

/**
 * When the component loads, we get the current category
 */
onMounted(getCategory())

</script>