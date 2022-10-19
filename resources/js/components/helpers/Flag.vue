<template>
  <div class="flag">
    <h1 class="flag-title"> {{ title }} </h1>
    <h1 class="flag-subtitle"> {{ subtitle }} </h1>
  </div>
</template>

<script setup>

/**
 * define title and subtitle props
 */
 const props = defineProps({
  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String,
    required: false
  }
})

</script>