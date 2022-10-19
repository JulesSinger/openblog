import axiosClient from '../axios'
import { ref } from 'vue'

export default function useAuth(form = null) {
  const errors = ref('');

  const loginWithCredentials = async (onSuccess = null) => {
    await axiosClient.post(`/api/login`, form)
    .then((response) => {
      if (onSuccess !== null) return onSuccess(response)
    })
    .catch((error) => {
      errors.value = ''
      switch (error.response.status) {
        case 422: // erreurs de champs (champ vide ..)
          const loginErrors = error.response.data.errors

          for(const key in loginErrors) {
            if (loginErrors[key][0] == 'validation.required') {
              errors.value += 'champ ' + key  + ' requis '
            }
          }
          break;
        case 401: // crédits invalides
          errors.value += 'email ou mot de passe invalide'
          break;
      }
    })
  } 

  const registerWithCredentials = async (onSuccess = null) => {
    await axiosClient.post('/api/register', form)
    .then(response => {
      if (onSuccess !== null) return onSuccess(response)
    })
    .catch(error => {
      errors.value = ''

      switch (error.response.status) {
        case 422: // erreur de champs (champ vide ..)
          const registerErrors = error.response.data.errors

          for(const key in registerErrors) {
            if (registerErrors[key][0] == 'validation.required') {
              errors.value += 'champ ' + key  + ' requis '
            }
          }
          break;
        case 401: // mdp et confirmation de mdp non égaux
          errors.value += 'Les champs de mot de passe doivent être égaux'
          break;
        case 409: // email deja existants
          errors.value += 'Un compte avec cet email existe déjà'
          break;
      }
    })
  }

  const logout_user = async (onSuccess = null) => {
    await axios.post('/api/logout')
    .then((res) => {
      if(onSuccess !== null) return onSuccess(res)
    })
    .catch((err) => console.log(err))
  }

  return {
    loginWithCredentials,
    registerWithCredentials,
    logout_user,
    errors
  }
}

export {
  useAuth,
}