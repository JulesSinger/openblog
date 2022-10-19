import axios from 'axios'
import { ref } from 'vue'


export default function useCategories(category_id = null, insertForm = null, updateForm = null) {
    const category = ref()
    const categories = ref()

    /**
     * get all categories
     */
    const getCategories = async () => {
        let response = await axios.get(`/api/categories`);
        categories.value = response.data.data
    }

    /**
     * get the current category
     */
    const getCategory = async () => {
        let response = await axios.get(`/api/categories/${category_id}`)
        category.value = response.data.data[0]
    }

    /**
     * create a new category with the insertForm data
     */
    const insertCategory = async (onSuccess = null) => {
        await axios.post('/api/categories/insert', insertForm,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',                    
                },
            })
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
        await axios.patch(`/api/categories/update/${categoryId}`, updateForm,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',                    
                },
            })
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
        await axios.delete(`/api/categories/delete/${categoryId}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',                    
                },
            })
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
