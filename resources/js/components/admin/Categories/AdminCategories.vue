<template>
  <div id="admin-categories-page">
    <Flag title="PANEL D'ADMINISTRATION" subtitle="GESTION DES CATEGORIES"/>

    <!-- ADD CATEGORY --> 
    <h2 class="text-center">AJOUTER UNE CATEGORIE</h2>

    <form @submit.prevent='call_insert_category' id="insert-category-form" class="container">
      <div class="form-container">
        <label for="name">Nom de la catégorie</label>
        <input type="text" name="name" id="name" placeholder="Informatique" v-model="insert_category_form.name">
      </div>

      <div class="form-container">
        <label for="image">Image de la catégorie</label>
        <input type="text" name="image" id="image" placeholder="image.png" v-model="insert_category_form.image">
      </div>

      <button type="submit" class="btn btn-markup">AJOUTER LA CATEGORIE</button>
    </form>
    <!-- ADD CATEGORY --> 

    <!-- MODIFY / DELETE CATEGORY --> 
    <h2 class="text-center">MODIFIER / SUPPRIMER UNE CATEGORIE</h2>
    
    <div id="update-category-form" class="container">
      <div class="form-container" id="select-container">
        <label for="name">Sélectionnez une catégorie à modifier</label>
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
      <p v-if="selected_category">Nombre d'articles de cette catégorie : {{ selected_category.posts.length }}</p>

      <div class="form-container" v-if="selected_category">
        <label for="name">Nouveau nom de la catégorie</label>
        <input type="text" name="name" id="name" placeholder="Informatique" v-model="update_category_form.name">
      </div>

      <div class="form-container" v-if="selected_category">
        <label for="image">Nouvelle image de la catégorie</label>
        <input type="text" name="image" id="image" placeholder="image.png" v-model="update_category_form.image">
      </div>

      <button @click='call_update_category(selected_category.id)' type="submit" class="btn btn-markup" v-if="selected_category">MODIFIER LA CATEGORIE</button>
      <button @click='call_delete_category(selected_category.id)' type="submit" class="btn btn-red" v-if="selected_category">SUPPRIMER LA CATEGORIE</button>
    </div>
    <!-- MODIFY / DELETE CATEGORY --> 

  </div>
</template>

<script setup>

import { onMounted, reactive, ref, inject } from 'vue'
import Flag from "../../helpers/Flag.vue"
import useCategories from '../../../api/categories'

/**
 * selected_category is the selected category to modify
 */
const selected_category = ref(null)

/**
 * this form is linked to insert html form
 */
const insert_category_form = reactive({
  name:'',
  image:'',
})

/**
 * this form is linked to update html form
 */
const update_category_form = reactive({
  name:'',
  image:'',
})

/**
 * import the categories api functions
 */
const { categories, getCategories, insertCategory, updateCategory, deleteCategory} = useCategories(null, insert_category_form, update_category_form)

/**
 * create a toast instance 
 */
const toast = inject('toast');

/**
 * call the function that send an insert category request
 */
const call_insert_category = () => {
  insertCategory(() => {
    toast.success('Catégorie créée');
  })
}

/**
 * call the function that send an update category request
 */
const call_update_category = (categoryId) => {
  updateCategory(categoryId, () => {
    toast.success('Catégorie Modifiée');
  })
}

/**
 * call the function that send a delete category request
 */
const call_delete_category = (categoryId) => {
  deleteCategory(categoryId, () => {
    toast.success('Catégorie Supprimée');
  })
}

/**
 * When the component loads, we get the categories
 */
onMounted(getCategories())

</script>


