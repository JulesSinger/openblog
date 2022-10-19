<template>
  <div id="quotes-page">
    <Flag title="CITATIONS" subtitle="“Aucun de nous ne sait ce que nous savons tous, ensemble”" />
    <div class="quotes-container" > 
      <Quote v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
  </div>
</template>

<script setup>

import Flag from '../helpers/Flag.vue'
import Quote from './Quote.vue'
import { useQuotes } from '../../api/quotes.js'
import { onMounted } from 'vue'

/**
 * load the quote api
 */
const { quotes, getQuotes } = useQuotes()

/**
 * when the component loads, get the quotes
 */
onMounted(getQuotes())

</script>