<template>
  <router-link class="post-preview-global-link" :to="{name: 'Post', params: { id: post.id }}">
    <div class="container post-preview">
      <img :src="post.image" alt="code">
      <div>
        <h2 class="post-category">{{ post.category.name }}</h2>
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-details"> {{ post.publication_date }} | {{ post.read_time }} mins | {{ post.author }}</p>
        <p>{{ post.summary }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PostPreview',

  props: {
    post: {
      type: Object,
      required: true
    },
  }
}
</script>
