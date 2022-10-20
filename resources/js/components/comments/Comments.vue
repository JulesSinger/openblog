<template>
    <div id="comments">
        <Comment v-if="comments.length > 0" v-for="comment in comments" :key="comment.id" :comment="comment" />
        <div v-else id="comments-empty">
            <p>Soit le premier à poster un commentaire !</p>
        </div>
    </div>
</template>

<script setup>

import Comment from './Comment.vue';
import useComments from '../../api/comments.js'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

// route
const route = useRoute()
/**
 * post_id get by url params
 */
const post_id = route.params.id

/**
 * load the comment api
 */
const { comments, getComments } = useComments()

/**
 * when the component loads, we get the comments of the current post
 */
onMounted(getComments(post_id))

</script>