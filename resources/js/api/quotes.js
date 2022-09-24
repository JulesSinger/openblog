import axios from 'axios'
import { getWritingDate } from './dateFormat'
import { ref } from 'vue'
import axiosClient from "../axios";
import store from '../store';

export default function useQuotes(insertForm = null, deleteForm = null) {
    const quotes = ref([])

    const getQuotes = async () => {
        let response = await axios.get(`/api/quotes`)
        response.data.data.forEach(quote => {
            quote.created_at = getWritingDate(quote.created_at)
        });
        quotes.value = response.data.data
    }

    const insertQuote = async (onSuccess = null) => {
        await axiosClient.post('/api/quote/insert', insertForm, store.state.user.data,
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
        await axiosClient.delete(`/api/quotes/${quoteId}`, insertForm,
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