<template>
  <div id="categories-page">
    <Flag title="CATÉGORIES" subtitle="Choisissez parmi nos catégories d'articles" />
    <div class="categories-container">
      <Category :category="testCategory" />
      <Category :category="testCategory" />
      <Category :category="testCategory" />
      <Category :category="testCategory" />
    </div>
    
  </div>
</template>

<script>

import Flag from '../helpers/Flag.vue'
import Category from './Category.vue'
export default {
  name: 'Categories',
  
  components: {
    Flag,
    Category,
  },

  

  data () {
    const testCategory = {
      title: 'Informatique',
      numberOfArticles : '14',
      image: 'computer_science.jpg'
    }

    return {
      testCategory 
    }
  },
}
</script>