import axios from 'axios'
import { ref } from 'vue'
import store from '../store/'

export default function useComments(form = null) {
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
    const postComment = async (onSuccess = null) => {
        await axios.post(`/api/comment`, form,
        {
            headers: {
                'Authorization': `Bearer ${store.state.auth.token}`
            },
        }).then((response) => {
            if (onSuccess !== null) return onSuccess(response)
        })
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