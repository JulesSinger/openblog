<template>
  <div id="post-create">
    <h1 class="text-center">Ajouter un nouvel article</h1>
    <form @submit.prevent="call_create_post" class="container">
      
      <div class="form-container">
        <label for="title">Titre de l'article :</label>
        <input placeholder="Comment faire des pâtes ?" type="text" name="title" id="title" v-model="form.title">
      </div>

      <div class="form-container">
          <label for="readTime">Temps de lecture :</label>
          <input type="number" name="readTime" id="readTime" v-model="form.readTime">
      </div>
      <div class="form-container">
          <label for="author">Autheur :</label>
          <input placeholder="Jack Greelish" type="text" name="author" id="author" v-model="form.author">
      </div>
      <div class="form-container">
          <label for="image">Image :</label>
          <input placeholder="nomImage.jpg" type="text" name="image" id="image" v-model="form.image">
      </div>
      <div class="form-container">
          <label for="summary">Résumé de l'article :</label>
          <textarea placeholder="Cet article donne une vue plus globale sur ..." name="summary" id="summary" v-model="form.summary"></textarea>
      </div>
      <div class="form-container">
          <label for="content">Contenu de l'article :</label>
          <textarea placeholder="# title ..." name="content" id="content" v-model="form.content"></textarea>
      </div>
      
      <div class="form-container">
        <label for="category">Catégorie de l'article :</label>
        <select name="category" id="category" class="custom-select" v-model="selected_category">
          <template v-for="category in categories" :key="category.id">
            <option
              :value="category"
            >
              {{ category.name }}
            </option>
          </template>
        </select>
      </div>

      <div v-if="post_comment_errors" class="alert-error" style="display: block;">
        <p v-for="error in post_comment_errors">{{ error }}</p>
      </div>
      
      <div>
        <button type="submit" class="btn btn-markup">POSTER LE COMMENTAIRE</button>
      </div>
    </form>
  </div>
  
</template>

<script setup>
import { reactive, computed, inject, onMounted, ref } from 'vue'
import useCategories from '../../../api/categories'

/**
 * selected_category is the selected category to apply for the new post
 */
 const selected_category = ref(null)

/**
 * this form is linked to the create comment form in template
 */
 const form = reactive({
    title: '',
    readTime: 0,
    author: '',
    image: '',
    summary: '',
    content: '',
})

const toast = inject('toast')

/**
 * call a function that send a request to create a new post
 */
 const call_create_post = () => {
    createPost(() => {
        toast.success('Commentaire posté')
    })
}

/**
 * import the categories api functions
 */
 const { categories, getCategories } = useCategories()


/**
 * When the component loads, we get the categories
 */
 onMounted(getCategories())

</script>