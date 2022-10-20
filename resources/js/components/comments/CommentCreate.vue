<template>
    <form v-if="isLogged" class="comment-post" @submit.prevent="call_post_comment">
        <label for="content">Ajouter un commentaire :</label>
        <input placeholder="Objet du commentaire" type="text" name="subject" id="subject" v-model="form.subject">
        <textarea placeholder="Contenu de votre commentaire ici" name="content" id="content" v-model="form.content"></textarea>
        <div>
            <button type="submit" class="btn btn-markup">POSTER LE COMMENTAIRE</button>
        </div>
    </form>
    <div v-else class="mt-2 ml-3 flex">
        <router-link :to="{name: 'Login', query: { redirect: fullPath}}" class="btn btn-markup w-7">Connecte toi !</router-link>
    </div>
</template>

<script setup>

import { reactive, computed } from 'vue'
import { useComments } from '../../api/comments.js'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// route & store
const route = useRoute()
const store = useStore()

/**
 * post_id get by url params
 */
const id = route.params.id

/**
 * full path is used to redirect on the current page after login 
 */
const fullPath = route.fullPath

/**
 * this form is linked to the post comment form in html
 */
const form = reactive({
    content: '',
    subject: '',
    post_id : id,
})

/**
 * true if the user is logged, false in the other case
 */
 const isLogged = computed(() => store.state.auth.authenticated)

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