<template>
    <form class="comment-post" @submit.prevent="call_post_comment">
        <label for="content">Ajouter un commentaire :</label>
        <input placeholder="Objet du commentaire" type="text" name="subject" id="subject" v-model="form.subject">
        <textarea placeholder="Contenu de votre commentaire ici" name="content" id="content" v-model="form.content"></textarea>
        <div>
            <button type="submit" class="btn btn-markup">POSTER LE COMMENTAIRE</button>
        </div>
    </form>
</template>

<script setup>

import { reactive } from 'vue'
import { useComments } from '../../api/comments.js'
import { useRoute } from 'vue-router'

// route
const route = useRoute()

/**
 * post_id get by url params
 */
const id = route.params.id

/**
 * this form is linked to the post comment form in html
 */
const form = reactive({
    content: '',
    subject: '',
    post_id : id,
})

/**
 * load comment api
 */
const { postComment } = useComments(form)

/**
 * call a function that send a post comment request
 */
const call_post_comment = () => {
    postComment((response) => {})
}

</script>