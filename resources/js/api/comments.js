import axiosClient from '../axios'
import { ref } from 'vue'

export default function useComments(form = null) {
    const comments = ref([])
    const post_comment_errors  = ref([])

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
        .catch((error) => {
            post_comment_errors.value = []

            switch(error.response.status) {
                case 422: // erreurs de champs (champ vide ..)
                
                for(const key in error.response.data.errors) {
                  if (error.response.data.errors[key][0] == 'validation.required') {
                    post_comment_errors.value.push("Le champ '" +  key + "' est requis")
                  }
                }
                break;
            }
        })
    }

    /**
     * delete a comment with the current id
     */
     const deleteComment = async (commentId, onSuccess = null, onFailure = null) => {
        await axiosClient.delete(`/api/comments/${commentId}`, form)
        .then((response) => {
            if (onSuccess !== null) return onSuccess(response)
        })
        .catch((error) => {
            if(onFailure !== null) onFailure(error)
        })
    }    

    return {
        comments,
        getComments,
        postComment,
        deleteComment,
        post_comment_errors
    }
}

export {
    useComments
}