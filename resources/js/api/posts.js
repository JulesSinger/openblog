import axiosClient from '../axios'
import { ref } from 'vue'

export default function usePost(post_id, insertForm = null) {
    const post = ref()
    const posts = ref()
    const pagination = ref()

    /**
     * get the post with the current post_id
     */
    const getPost = async () => {
      let response = await axiosClient.get(`/api/posts/${post_id}`)
      post.value = response.data.data[0]
    }

    /**
     * list all posts
     */
    const getPosts = async () => {
      let response = await axiosClient.get(`/api/posts`)
      posts.value = response.data.data
      pagination.value = response.data.meta
    }

    /**
     * create a new category with the insertForm data
     */
    const insertPost = async (onSuccess = null) => {
      await axiosClient.post('/api/posts/insert', insertForm)
      .then(response => {
          if(onSuccess !== null) return onSuccess(response)
      })
      .catch(error => {
          console.log(error)
      })
    }

    return {
      post,
      posts,
      pagination,
      getPost,
      getPosts,
      insertPost,
    }
}

export {
  usePost
}