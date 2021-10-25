<template>
  <div>
    <div class="comment">
      <p> {{ comment.title }} </p>
      <p class="comment-infos"> {{ comment.date }} | {{ comment.author }} | </p>
      <p> {{ comment.content }} </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',

  props: {
    comment: {
      type: Object,
      required: true
    },
  }
}
</script>