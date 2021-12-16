<template>
    <form class="comment-post" @submit.prevent="createComment">
        <label for="content">Votre commentaire :</label>
        <input placeholder="Objet du commentaire" type="text" name="subject" id="subject" v-model="form.subject">
        <textarea placeholder="Ecrivez votre commentaire ici" name="content" id="content" v-model="form.content"></textarea>
        <div>
            <button type="submit" class="btn btn-markup">POSTER LE COMMENTAIRE</button>
        </div>
    </form>
</template>
<script>
import { reactive } from 'vue'
import { useComments } from '../../api/comments.js'
import { useRoute } from 'vue-router'
export default {
    name: 'CommentCreate',

     data () {
        const route= useRoute();
        const id = route.params.id

        const form = reactive({
            content: '',
            subject: '',
            post_id : id,
        })

        const { postComment } = useComments()

        const createComment = async () => {
            await postComment({...form})
        }

        return {
            form,
            createComment
        }
    } 
}
</script>