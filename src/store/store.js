import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
       token: localStorage.getItem('access_token') || null,
    },
    getter: {},
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        }
    },
    actions: {
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('api/v1/login', {
                    identity: credentials.identity,
                    password: credentials.password,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', },
                })
                .then(response => {
                    const token = response.data.payload.access_token

                    localStorage.setItem('access_token', token)
                    context.commit('retrieveToken', token)
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        registerUser(context, credentials) {
            axios.post('api/v1/users', {
                fullname: credentials.fullname,
                email: credentials.email,
                username: credentials.username,
                number: credentials.number,
                password: credentials.password,
                password_confirmation: credentials.password_confirmation,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',},
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
})
