<template>
  <div id="admin-quotes-page">
    <Flag title="PANEL D'ADMINISTRATION" subtitle="GESTION DES CITATIONS"/>

    <!-- ADD QUOTE -->
    <h2 class="text-center">AJOUTER UNE CITATION</h2>

    <form @submit.prevent='call_insert_quote' id="insert-quote-form" class="container">
      <div class="form-container">
        <label for="author">Auteur de la citation</label>
        <input type="text" name="author" id="author" placeholder="Victor Hugo" v-model="insert_quote_form.author">
      </div>

      <div class="form-container">
        <label for="content">Contenu de la citation</label>
        <textarea name="content" id="content" cols="30" rows="5" placeholder="blablabla blabla ..." v-model="insert_quote_form.content"></textarea>
      </div>

      <button type="submit" class="btn btn-markup">AJOUTER LA CITATION</button>
    </form>
    <!-- ADD QUOTE -->

    <!-- DELETE QUOTE -->
    <h2 class="text-center mt-5">SUPPRIMER UNE CITATION</h2>

    <div v-if="quotes" class="admin-quotes-container"> 
      <QuoteDelete v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
    <!-- DELETE QUOTE -->
  </div>
</template>

<script setup>

import { onMounted, reactive, inject } from 'vue'
import { useQuotes } from '../../../api/quotes.js'
import QuoteDelete from './QuoteDelete.vue'
import Flag from "../../helpers/Flag.vue"

/**
 * this form is linked to insert html form
 */
const insert_quote_form = reactive({
  author:'',
  content:'',
})

/**
 * import the quotes api functions
 */
const { quotes, getQuotes, insertQuote } = useQuotes(insert_quote_form)

/**
 * create a toast instance
 */
const toast = inject('toast');

/**
 * call the function that send an insert quote request
 */
const call_insert_quote = () => {
  insertQuote(() => {
    toast.success('Citation Insérée');
  })
}

/**
 * When the component loads, we get the quotes
 */
onMounted(getQuotes())

</script>


