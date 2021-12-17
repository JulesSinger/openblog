<template>
  <div class="paging">
    <span><img src="/images/icons/left_direction.svg" alt="left"></span>
    <span class="active">{{ pagination.current_page }}</span>
    <span>...</span>
    <span class="page-number">{{ pagination.last_page }}</span>
    <span><img src="/images/icons/right_direction.svg" alt="right"></span>
  </div>
</template>
<script>
export default {
  name: 'Pagination',

  props: {
    pagination: {
      type: Object,
      required: true
    },
  }
}
</script>