<template>
  <div>
    <div id="post-page" v-if="post">

      <Flag :title="post.category.name.toUpperCase()" :subtitle="post.title.toUpperCase()"/>
      
      <div class="container post-container">
        <div class="post-header">
          <h2 id="post-category">{{ post.category.name.toUpperCase() }}</h2>
          <div>
            <img src="/images/icons/favicon_full.svg" alt="fav">
            <a href="#comment-title" id="comments-number"> {{ post.comments.length }} commentaires</a>
          </div>
        </div>
        
        <div class="post-main-content">
          <h2 id="post-title"> {{ post.title.toUpperCase() }} </h2>
          <p id="post-infos"> {{ post.publication_date }} | {{ post.read_time }} mins | {{ post.author }} </p>
          <p> {{ post.content }} </p>
          <h2 id="comment-title">COMMENTAIRES</h2>
        </div>
      
        <div class="comments-wrapper">
          <CommentCreate />
          <Comments />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Comments from '../comments/Comments.vue'
import CommentCreate from '../comments/CommentCreate.vue'
import Flag from '../helpers/Flag.vue'
import { usePost } from '../../api/posts'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

// route
const route = useRoute()

/**
 * get the post_id by url param
 */
const post_id = route.params.id

/**
 * load post api
 */
const { post, getPost } = usePost(post_id)

/**
 * when the component loads, get the current post
 */
onMounted(getPost())

</script>