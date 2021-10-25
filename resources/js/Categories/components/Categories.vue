<template>
  <div id="categories-page">
    <Flag title="CATÉGORIES" subtitle="Choisissez parmi nos catégories d'articles" />
    <div class="categories-container">
      <Category v-for="category in categories" :category="category" />
    </div>
  </div>
</template>

<script>

import Flag from '../../helpers/components/Flag.vue'
import Category from './Category.vue'
import { useCategories } from '../model/categories'

export default {
  name: 'Categories',
  
  components: {
    Flag,
    Category,
  },

  setup() {
    let categories = useCategories()

    return {
      categories
    }
  }
}
</script>