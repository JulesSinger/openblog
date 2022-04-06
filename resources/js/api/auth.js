import axios from 'axios'
import { ref } from 'vue'


export default function useAuth(form = null) {
  const errors = ref('');

  const loginWithCredentials = async (onSuccess = null) => {
    await axios.post(`/api/login`, form, 
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      })
    .then((response) => {
      if (onSuccess !== null) return onSuccess(response)
    })
    .catch((error) => {
      errors.value = ''
      const loginErrors = error.response.data.errors

      for(const key in loginErrors) {
        if (loginErrors[key][0] == 'validation.required') {
          errors.value += 'champ ' + key  + ' requis '
        }
      }
    })
  } 

  const registerWithCredentials = async (onSuccess = null) => {
    await axios.post('/api/register', form,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    .then(response => {
      if (onSuccess !== null) return onSuccess(response)
    })
    .catch(error => {
      errors.value = ''
      const registerErrors = error.response.data.errors

      for(const key in registerErrors) {
        if (registerErrors[key][0] == 'validation.required') {
          errors.value += 'champ ' + key  + ' requis '
        }
      }
    })
  }

  return {
    loginWithCredentials,
    registerWithCredentials,
    errors
  }
}

export {
  useAuth,
}