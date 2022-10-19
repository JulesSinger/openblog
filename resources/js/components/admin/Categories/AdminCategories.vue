<template>
  <div id="admin-categories-page">
    <Flag title="PANEL D'ADMINISTRATION" subtitle="GESTION DES CATEGORIES"/>

    <h2 class="text-center">AJOUTER UNE CATEGORIE</h2>
    <form @submit.prevent='insertCategory' id="insert-category-form" class="container">
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

      <button @click='updateCategory(selected_category.id)' type="submit" class="btn btn-markup" v-if="selected_category">MODIFIER LA CATEGORIE</button>
      <button @click='deleteCategory(selected_category.id)' type="submit" class="btn btn-red" v-if="selected_category">SUPPRIMER LA CATEGORIE</button>
    </div>
    
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'
import Flag from "../../helpers/Flag.vue"
import { inject } from 'vue'
import useCategories from '../../../api/categories'
export default {
  name: 'AdminQuotes',

  components: {
    Flag,
  },

  setup() {

    const selected_category = ref(null)

    const insert_category_form = reactive({
      name:'',
      image:'',
    })

    const update_category_form = reactive({
      name:'',
      image:'',
    })

    const { categories, getCategories, insertCategory, updateCategory, deleteCategory} = useCategories(null, insert_category_form, update_category_form)
    onMounted(getCategories())

    const toast = inject('toast');

    return {
      insert_category_form,
      update_category_form,
      selected_category,
      categories,
      insertCategory: () => {
        insertCategory((response) => {
          toast.success('Catégorie créée');
        })
      },
      updateCategory: (categoryId) => {
        updateCategory(categoryId, (response) => {
          toast.success('Catégorie Modifiée');
        })
      },
      deleteCategory: (categoryId) => {
        deleteCategory(categoryId, (response) => {
          console.log(response)
          toast.success('Catégorie Supprimée');
        })
      }
    }
  }
}
</script>


