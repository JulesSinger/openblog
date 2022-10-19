<template>
  <div>
    <div class="comment">
      <p> {{ comment.subject }} </p>
      <p class="comment-infos"> {{ comment.created_at }} | {{ comment.author.pseudo }} | </p>
      <p> {{ comment.content }} </p>
    </div>
  </div>
</template>

<script setup>

/**
 * define comment prop
 */
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
})

</script>