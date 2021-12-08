<template>
  <div>
    <div id="quotes-page">
      <Flag title="CITATIONS" subtitle="“Aucun de nous ne sait ce que nous savons tous, ensemble”" />
      <div v-for="quote in quotes" :key="quote.id"> 
        <Quote :quote="quote" />
      </div>
    </div>
  </div>
</template>
<script>

import Flag from '../helpers/Flag.vue'
import Quote from './Quote.vue'
import Header from '../header/Header.vue'
import { useQuotes } from '../../api/quotes.js'
import { onMounted } from 'vue'
export default {
  name: 'Quotes',

  components: {
    Quote,
    Flag,
    Header
  },

  data () {
    const { quotes, getQuotes } = useQuotes()
    onMounted(getQuotes())

    return {
      quotes
    }
  }
}
</script>