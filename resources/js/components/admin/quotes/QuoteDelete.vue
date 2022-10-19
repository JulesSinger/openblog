<template>
  <!-- DELETE QUOTE -->
  <form @submit.prevent='call_delete_quote(quote.id)' class="quote container mb-2">
    <div class="quote-header">
      <p class="created_at">Posté le {{ quote.created_at }} </p>
    </div>

    <div class="quote-container">
      <h3 id="quote-text">"{{ quote.content }}"</h3>
      <p id="quote-author"> {{ quote.author }} </p>
    </div>

    <button type="submit" class="btn btn-red"> SUPPRIMER </button>
  </form>
  <!-- DELETE QUOTE -->
</template>

<script setup>

import { useQuotes } from '../../../api/quotes'
import { inject } from 'vue'

/**
 * define the quote prop
 */
const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

/**
 * import the delete quote api function
 */
const { deleteQuote } = useQuotes()

/**
 * create a toast instance
 */
const toast = inject('toast');

/**
 * call the function that send a delete quote request
 */
const call_delete_quote = (quoteId) => {
  if (confirm('êtes-vous sûr de vouloir supprimer cette citation ?')) {
    return deleteQuote(quoteId, () => {
      toast.error('Citation supprimée');
    })
  }
}
</script>
