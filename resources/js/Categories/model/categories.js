import axios from 'axios'
import { ref } from 'vue'

/**
 * try to send AJAX request to API to get the categories
 */
 export let useCategories = () => {
  let categories = ref(null)
  axios
      .get(`/api/categories`)
      .then((response) => (categories.value = response.data))
      .catch((e) => {
          throw e
      })
  return categories
}