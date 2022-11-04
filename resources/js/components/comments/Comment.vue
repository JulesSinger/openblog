<template>
  <div>
    <div class="comment">
      <p> {{ comment.subject }} </p>
      <p class="comment-infos"> {{ comment.created_at }} | {{ comment.author.pseudo }} | </p>
      <p> {{ comment.content }} </p>
      <form @submit.prevent='call_delete_comment(comment.id)'>
        <button v-if="loggedUser.role === 'admin' || loggedUser.id === comment.user_id" type="submit" class="btn btn-link" style="color:var(--clr-littlemarkup)" > Supprimer votre commentaire</button>
      </form>
    </div>
  </div>
</template>

<script setup>

import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import useComments from '../../api/comments';

//store
const store = useStore()

/**
 * define comment prop
 */
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
})

/**
 * get the logged user
 */
 const loggedUser = computed(() => store.state.auth.user)

/**
 * load the comment api
 */
const { deleteComment } = useComments();

/**
 * inject toast
 */
const toast = inject('toast');

/**
 * call the function that request a delete comment request
 */
const call_delete_comment = (commentId) => {
  deleteComment(commentId, (response) => { toast.success("Commentaire supprimé")}, (error) => { toast.error(error.response.data.message)})}

</script>