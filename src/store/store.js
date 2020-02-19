import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        token: localStorage.getItem('access_token') || null,
        user: [],
        banks: [],
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },

        destroyToken(state) {
            state.token = null
        },

        retrieveUser(state, user) {
            state.user = user
        },

        clearUser(state) {
            state.user = []
        },

        retrieveBanks(state, banks) {
            state.banks = banks
          },

    },
    actions: {
        registerUser(context, data) {

            return new Promise((resolve, reject) => {
                axios.post('api/v1/users', {
                    fullname: data.fullname,
                    email: data.email,
                    username: data.username,
                    number: data.number,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',},
                })
                .then(({status}) => {
                    if (status === 200) {
                        resolve(true)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

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

                    context.commit('retrieveUser', response.data.payload.user)

                    resolve(response)
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        destroyToken(context) {
            if (context.getters.loggedIn) {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
            }
        },

        clearUser(context) {
            context.commit('clearUser')
        },

        retrieveBanks(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
            axios.get('api/v1/banks')
            .then(response => {
                context.commit('retrieveBanks', response.data.payload)
                console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },


    }
})
