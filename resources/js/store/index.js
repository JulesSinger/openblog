
import axios from "axios";
import { createStore } from "vuex";
import axiosClient from "../axios";
const initialState = () => ({
    user: {
        data: {},
        role: null,
        token: localStorage.getItem("auth_token")
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

        SET_USER_ROLE(state, role) {
            state.user.role = role
        }
    },

    actions: { 
        logout ({ commit }) {
            commit ('LOGOUT')
        },

        getUserRole({ commit }) {
            axiosClient.get('/api/getRole')
            .then(res => {
                commit('SET_USER_ROLE', res.data.is_admin)
            }) 
            .catch(err => console.log(err))
        }
    }


});

export default store;