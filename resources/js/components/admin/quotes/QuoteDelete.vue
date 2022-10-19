<template>
  <form @submit.prevent='deleteQuote(quote.id)' class="quote container mb-2">
    <div class="quote-header">
      <p class="created_at">Posté le {{ quote.created_at }} </p>
    </div>

    <div class="quote-container">
      <h3 id="quote-text">"{{ quote.content }}"</h3>
      <p id="quote-author"> {{ quote.author }} </p>
    </div>

    <button type="submit" class="btn btn-red"> SUPPRIMER </button>
  </form>
</template>
<script>
import { useQuotes } from '../../../api/quotes'
import { inject } from 'vue'

export default {
  name: 'QuoteDelete',

  props: {
    quote: {
      type: Object,
      required: true
    }
  },

  setup() {

    const { deleteQuote } = useQuotes()

    const toast = inject('toast');
   
    return {
      deleteQuote: (quoteId) => {
        if (confirm('êtes-vous sûr de vouloir supprimer cette citation ?')) 
          return deleteQuote(quoteId, () => {
            toast.error('Citation supprimée');
          })
      }
    }
  }
}
</script>
