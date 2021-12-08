<template>
  <div id="categories-page">
    <Flag title="CATÉGORIES" subtitle="Choisissez parmi nos catégories d'articles" />
    <div class="categories-container">
      <Category v-for="category in categories" :category="category" :key="category.id" />
    </div>
  </div>
</template>

<script>

import Flag from '../helpers/Flag.vue'
import Category from './Category.vue'
import { useCategories } from '../../api/categories'
import { onMounted } from 'vue'

export default { 
  name: 'Categories',
  
  components: {
    Flag,
    Category,
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