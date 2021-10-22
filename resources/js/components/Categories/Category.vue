<template>
  <div class="category">
    <img :src='"/images/others/"+category.image' alt="computer science">
    <div class="category-infos">
      <h2 class="category-title"> {{ category.title }} </h2>
      <p> {{ category.numberOfArticles }} articles</p>
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