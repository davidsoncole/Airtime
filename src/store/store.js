import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
       token: localStorage.getItem('access_token') || '',
       user: []
    },
    getter: {
        loggedIn(state) {
            return state.token !== ''
        },
    },
    mutations: {
        destroyToken(state) {
            state.token = ''
        },
        
        retrieveToken(state, token) {
            state.token = token
        },

    },
    actions: {
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
            if (context.getters.loggedIn) {
              return new Promise((resolve, reject) => {
                axios.post('/logout')
                  .then(response => {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
                    resolve(response)
                    // console.log(response);
                    // context.commit('addTodo', response.data)
                  })
                  .catch(error => {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
                    reject(error)
                  })
              })
            }
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
                    resolve(response)
                    //console.log(response);
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

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

    }
})
