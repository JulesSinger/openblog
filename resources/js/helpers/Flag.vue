<template>
  <div class="flag">
    <h1 class="flag-title"> {{ title }} </h1>
    <h1 class="flag-subtitle"> {{ subtitle }} </h1>
  </div>
</template>
<script>
export default {
  name: 'Flag',

  props: {
    title: {
      type: String,
      required: true
    },

    subtitle: {
      type: String,
      required: false
    }
  }
}
</script>