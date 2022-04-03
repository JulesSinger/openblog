import axios from 'axios';
import { ref } from 'vue'

export default function useAuth(form = null) {
  const loginWithCredentials = async (onSuccess = null) => {
    await axios.post(`/api/login`, form, 
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      })
    .then((response) => {
      console.log(response)
      if (onSuccess !== null) return onSuccess(response)
    })
  } 

  const registerWithCredentials = async (onSuccess = null) => {
    await axios.post('/api/auth/register', form,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    .then((response) => {
      if (onSuccess !== null) return onSuccess(response)
    })
  }

  return {
    loginWithCredentials,
    registerWithCredentials,
  }
}

const user = ref([]) 

const getCategory = async () => {
  let response = await axios.get(`/api/categories/${category_id}`)
  category.value = response.data.data[0]
}

const getCurrentUser = async () => {
  let response = await axios.get(`/api/me`)
  user.value = response
}

export {
  useAuth,
  user, 
  getCurrentUser
}