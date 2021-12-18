import axios from 'axios'
import { ref } from 'vue'


export default function useCategories(category_id) {
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

    return {
        categories,
        category,
        getCategories,
        getCategory
    }
}

export {
    useCategories
}
