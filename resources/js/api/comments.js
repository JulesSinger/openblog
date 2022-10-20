import axiosClient from '../axios'
import { ref } from 'vue'

export default function useComments(form = null) {
    const comments = ref([])

    /**
     * get comments of the current post id
     */
    const getComments = async (id) => {
        let response = await axiosClient.get(`/api/post/${id}/comments`)
        comments.value = response.data.data
    }

    /**
     * post a comment with data 
     */
    const postComment = async (onSuccess = null) => {
        await axiosClient.post(`/api/comment`, form)
        .then((response) => {
            if (onSuccess !== null) return onSuccess(response)
        })
    }

    /**
     * delete a comment with the current id
     */
     const deleteComment = async (commentId, onSuccess = null) => {
        await axiosClient.delete(`/api/comments/${commentId}`, form)
        .then((response) => {
            if (onSuccess !== null) return onSuccess(response)
        })
    }    

    return {
        comments,
        getComments,
        postComment,
        deleteComment
    }
}

export {
    useComments
}