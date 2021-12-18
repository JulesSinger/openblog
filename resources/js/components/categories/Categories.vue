<template>
  <div id="categories-page">
    <Flag title="CATÉGORIES" subtitle="Choisissez parmi nos catégories d'articles" />
    <div class="categories-container">
      <CategoryPreview v-for="category in categories" :category="category" :key="category.id" />
    </div>
  </div>
</template>

<script>

import Flag from '../helpers/Flag.vue'
import CategoryPreview from './CategoryPreview.vue'
import { useCategories } from '../../api/categories'
import { onMounted } from 'vue'

export default { 
  name: 'Categories',
  
  components: {
    Flag,
    CategoryPreview,
  },

  setup() {
    const { categories, getCategories } = useCategories()
    onMounted(getCategories())

    return {
      categories
    }
  }
}
</script>