import axios from 'axios'

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
      if (onSuccess !== null) return onSuccess(response)
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
    .then((response) => {
      if (onSuccess !== null) return onSuccess(response)
    })
  }

  return {
    loginWithCredentials,
    registerWithCredentials,
  }
}

export {
  useAuth,
}