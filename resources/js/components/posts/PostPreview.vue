<template>
  <router-link :to="{name: 'Post', params: { id: 1 }}">
    <div class="container post-preview">
      <img src="/images/others/code.jpg" alt="code">
      <div>
        <h2 class="post-category">Catégorie de l'article</h2>
        <h2 class="post-title">Titre de l'article</h2>
        <p class="post-details">07/12/2020 | 9 mins | Singer Jules</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam nostrum minus iure impedit quis quasi magnam aperiam non nulla at ab, id, laborum recusandae libero sed dignissimos quibusdam odio?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sapiente quod cumque unde temporibus fugit.
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PostPreview'
}
</script>
