import axios from 'axios'
import { getWritingDate } from './dateFormat'
import { ref } from 'vue'

export default function useQuotes() {
    const quotes = ref([])

    const getQuotes = async () => {
        let response = await axios.get(`/api/quotes`)
        response.data.data.forEach(quote => {
            quote.created_at = getWritingDate(quote.created_at)
        });
        quotes.value = response.data.data
    }

    return {
        quotes,
        getQuotes
    }
}

export {
    useQuotes
}