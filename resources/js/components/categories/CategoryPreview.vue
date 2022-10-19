<template>
  <router-link class="category-preview-container-link" :to="{name: 'Category', params: { id: category.id }}">
    <div class="category-preview">
      <img :src='category.image || "/images/others/"+category.image' alt="computer science">
      <div class="category-preview-infos">
        <h2> {{ category.name }} </h2>
        <p> {{ category.posts.length }} articles</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>

/**
 * define the category prop
 */
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

</script>