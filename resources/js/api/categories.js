import { ref } from 'vue'
import axiosClient from '../axios'

export default function useCategories(category_id = null, insertForm = null, updateForm = null) {
    const category = ref()
    const categories = ref()

    /**
     * get all categories
     */
    const getCategories = async () => {
        let response = await axiosClient.get(`/api/categories`);
        categories.value = response.data.data
    }

    /**
     * get the current category
     */
    const getCategory = async () => {
        let response = await axiosClient.get(`/api/categories/${category_id}`)
        category.value = response.data.data[0]
    }

    /**
     * create a new category with the insertForm data
     */
    const insertCategory = async (onSuccess = null) => {
        await axiosClient.post('/api/categories/insert', insertForm)
        .then(response => {
            if(onSuccess !== null) return onSuccess(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    /**
     * update a category with the updateForm data
     */
    const updateCategory = async (categoryId,onSuccess = null) => {
        await axiosClient.patch(`/api/categories/update/${categoryId}`, updateForm)
        .then(response => {
            if(onSuccess !== null) return onSuccess(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    /**
     * delete a category with the current category id 
     */
     const deleteCategory = async (categoryId,onSuccess = null) => {
        await axiosClient.delete(`/api/categories/delete/${categoryId}`)
        .then(response => {
            if(onSuccess !== null) return onSuccess(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
   

    return {
        categories,
        category,
        getCategories,
        getCategory,
        insertCategory,
        updateCategory,
        deleteCategory
    }
}

export {
    useCategories
}
