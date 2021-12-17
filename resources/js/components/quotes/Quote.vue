<template>
  <div class="quote container">
    <div class="quote-header">
      <p class="created_at">Posté le {{ quote.created_at }} </p>
      <button class="btn" style="color: black" @click.prevent="copyQuote(quote.content, quote.author)">COPIER</button>
    </div>

    <div class="quote-container">
      <h3 id="quote-text">"{{ quote.content }}"</h3>
      <p id="quote-author"> {{ quote.author }} </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Quote',

  props: {
    quote: {
      type: Object,
      required: true
    }
  },

  data () {
    /**
     * copy the content and the author of the current quote in the clipboard
     */
    let copyQuote = (content, author) => {
      navigator.clipboard.writeText('"' + content + '"' + ' ' + author)
      .then(() => {
          alert('Success')
        }
      ).catch(() => {
        alert('fail')
      })
    }

    return  {
      copyQuote
    }
  }
}
</script>
