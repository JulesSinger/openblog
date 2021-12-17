import axios from 'axios'
import { ref } from 'vue'

export default function useComments() {
    const comments = ref([])

    /**
     * get comments of the current post id
     */
    const getComments = async (id) => {
        let response = await axios.get(`/api/post/${id}/comments`)
        comments.value = response.data.data
    }

    /**
     * post a comment with data 
     */
    const postComment = async (data) => {
        await axios.post(`/api/comment`, data)
    }

    return {
        comments,
        getComments,
        postComment
    }
}

export {
    useComments
}