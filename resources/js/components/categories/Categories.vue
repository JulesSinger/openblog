<template>
  <div id="categories-page">
    <Flag title="CATÉGORIES" subtitle="Choisissez parmi nos catégories d'articles" />
    <div class="categories-container">
      <CategoryPreview v-for="category in categories" :category="category" :key="category.id" />
    </div>
  </div>
</template>

<script setup>

import Flag from '../helpers/Flag.vue'
import CategoryPreview from './CategoryPreview.vue'
import { useCategories } from '../../api/categories'
import { onMounted } from 'vue'

/**
 * import the category api 
 */
const { categories, getCategories } = useCategories()

/**
 * When the component loads, we get the categories
 */
onMounted(getCategories())

</script>