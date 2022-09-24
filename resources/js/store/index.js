
import { createStore } from "vuex";
const initialState = () => ({
    user: {
        data: null,
        role: "guest",
    }
})

const store = createStore({
    state: initialState,
    
    mutations: {
        LOGOUT (state) {
            localStorage.removeItem("auth_token")
            const init = initialState()
            Object.keys(init).forEach(key => { state[key] = init[key]})
        },
    },

    actions: { 
        logout ({ commit }) {
            commit ('LOGOUT')
        },
    }


});

export default store;