<template>
  <div>
    <div id="quotes-page">
      <Flag title="CITATIONS" subtitle="“Aucun de nous ne sait ce que nous savons tous, ensemble”" />
      <Quote :quote="quote" />
      <Quote :quote="quote" />
      <Quote :quote="quote" />
    </div>
  </div>
</template>
<script>

import Flag from '../helpers/Flag.vue'
import Quote from './Quote.vue'
import Header from '../header/Header.vue'
export default {
  name: 'Quotes',

  components: {
    Quote,
    Flag,
    Header
  },

  data () {
    return {
      quote: {
        author: "Jean Cocteau",
        content: "Il faut faire aujourd'hui ce que tout le monde fera demain",
        createdDate: "vendredi 18 juin 2021"
      }
    }
  }
}
</script>