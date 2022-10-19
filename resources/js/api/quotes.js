import axios from 'axios'
import { getWritingDate } from './dateFormat'
import { ref } from 'vue'
import store from '../store';

export default function useQuotes(insertForm = null) {
    const quotes = ref([])

    const getQuotes = async () => {
        let response = await axios.get(`/api/quotes`)
        response.data.data.forEach(quote => {
            quote.created_at = getWritingDate(quote.created_at)
        });
        quotes.value = response.data.data
    }

    const insertQuote = async (onSuccess = null) => {
        await axios.post('/api/quotes/insert', insertForm, store.state.auth.user,
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

    const deleteQuote = async (quoteId, onSuccess = null) => {
        await axios.delete(`/api/quotes/${quoteId}`, insertForm,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',                    
            },
        })
        .then((response) => {
            console.log(response)
            if(onSuccess !== null) return onSuccess(response)
        })
        .catch((error) => {
            console.log("Error delete quote")
            console.log(error)
        })
    }

    return {
        quotes,
        getQuotes,
        insertQuote,
        deleteQuote,
    }
}

export {
    useQuotes
}