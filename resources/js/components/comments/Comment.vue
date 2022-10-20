<template>
  <div>
    <div class="comment">
      <p> {{ comment.subject }} </p>
      <p class="comment-infos"> {{ comment.created_at }} | {{ comment.author.pseudo }} | </p>
      <p> {{ comment.content }} </p>
      <form @submit.prevent='call_delete_comment(comment.id)'>
        <button type="submit" class="btn btn-red w-a" v-if="loggedUser.role == 'admin'"> SUPPRIMER LE COMMENTAIRE</button>
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
  deleteComment(commentId, (response) => {
    console.log(response)
    toast.success("Commentaire supprimé")
  })
}

</script>