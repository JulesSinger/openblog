<template>
    <form class="comment-post" @submit.prevent="createComment">
        <label for="content">Ajouter un commentaire :</label>
        <input placeholder="Objet du commentaire" type="text" name="subject" id="subject" v-model="form.subject">
        <textarea placeholder="Contenu de votre commentaire ici" name="content" id="content" v-model="form.content"></textarea>
        <div>
            <button type="submit" class="btn btn-markup">POSTER LE COMMENTAIRE</button>
        </div>
    </form>
</template>
<script>
import { reactive } from 'vue'
import { useComments } from '../../api/comments.js'
import { useRouter, useRoute } from 'vue-router'
export default {
    name: 'CommentCreate',

     data () {
        const router= useRouter();
        const route = useRoute()
        const id = route.params.id

        const form = reactive({
            content: '',
            subject: '',
            post_id : id,
        })

        const { postComment } = useComments(form)

        return {
            form,
            createComment: () => {
                postComment((response) => {
                    //router.push({ name: 'Post', params: { id: id  }})
                })
            }
        }
    } 
}
</script>