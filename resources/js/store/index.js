
import { createStore } from "vuex";

const initialState = () => ({
    user: {
        data: {},
        token: null
    }
})

const store = createStore({
    state: initialState,
    
    mutations: {
        LOGOUT (state) {
            const init = initialState()
            Object.keys(init).forEach(key => { state[key] = init[key]})
        },
    },

    actions: { 
        logout ({ commit }) {
            commit ('LOGOUT')
        }
    }


});

export default store;