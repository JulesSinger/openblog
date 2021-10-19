<template>
  <div class="quote container">
    <div class="quote-header">
      <p>Posté le {{ quote.createdDate }} </p>
      <button class="btn btn-light">COPIER</button>
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
  }
}
</script>