import axios from 'axios'
import { ref } from 'vue'

export default function useQuotes() {
    const quotes = ref([])

    const getQuotes = async () => {
        let response = await axios.get(`/api/quotes`)
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