<template>
  <div id="admin-quotes-page">
    <Flag title="Panel Administration" subtitle="Gestion des citations"/>

    <h2 class="text-center">AJOUTER UNE CITATION</h2>
    <form @submit.prevent='insertQuote' id="insert-quote-form" class="container">
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
    
    <h2 class="text-center mt-5">SUPPRIMER UNE CITATION</h2>
    <div v-if="quotes" class="admin-quotes-container"> 
      <QuoteDelete v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { useQuotes } from '../../../api/quotes.js'
import QuoteDelete from './QuoteDelete.vue'
import Flag from "../../helpers/Flag.vue"
export default {
  name: 'AdminQuotes',

  components: {
    Flag,
    QuoteDelete
  },

  setup() {

    const insert_quote_form = reactive({
      author:'',
      content:'',
    })
    
    const { quotes, getQuotes, insertQuote } = useQuotes(insert_quote_form, null)
    onMounted(getQuotes())
    return {
      insert_quote_form,
      quotes,
      insertQuote: () => {
        insertQuote((response) => {console.log(response)})
      }
    }
  }
}
</script>


