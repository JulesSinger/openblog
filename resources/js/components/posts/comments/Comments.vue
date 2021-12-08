<template>
    <div id="comments">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
</template>
<script>
import Comment from './Comment.vue';
import useComments from '../../../api/posts.js'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
export default {
    name: 'Comments',

    components: {
        Comment
    },

    data () {
        const route = useRoute()
        const post_id = route.params.id

        const { comments, getComments } = useComments()

        const getPostComments = async () => {
            await getComments(post_id)
        }

        onMounted(getPostComments())

        return { 
            comments
        }
    }
}
</script>