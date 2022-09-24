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

  return {
    loginWithCredentials,
    registerWithCredentials,
    errors
  }
}

export {
  useAuth,
}