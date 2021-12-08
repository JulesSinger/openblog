<template>
  <div class="category">
    <img :src='category.image || "/images/others/"+category.image' alt="computer science">
    <div class="category-infos">
      <h2 class="category-title" v-text="category.name"> </h2>
      <p>articles</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',

  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>