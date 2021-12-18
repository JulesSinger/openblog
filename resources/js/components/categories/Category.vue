<template>
  <div id="category-page" v-if="category">
    <Flag :title="category.name.toUpperCase()" :subtitle="category.posts.length+' ARTICLES'" />
    <PostPreview v-for="post in category.posts" :post="post" />
  </div>
</template>
<script>
import Flag from "../helpers/Flag.vue"
import Pagination from "../helpers/Pagination.vue"
import PostPreview from '../posts/PostPreview.vue'
import { useCategories } from "../../api/categories.js"
import { useRoute } from 'vue-router'
import { onMounted } from "vue"
export default {
  name: 'Category',

  components: {
    Flag,
    PostPreview,
    Pagination,
},

  data () {
    const route = useRoute()
    const category_id = route.params.id
    const { category, getCategory } = useCategories(category_id)
    onMounted(getCategory())

    return {
      category
    }
  }
}
</script>