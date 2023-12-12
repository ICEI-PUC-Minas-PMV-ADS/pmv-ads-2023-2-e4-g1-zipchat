import axios from 'axios';

import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: 'AIzaSyAWlNXeaULFmGg-ExGJFFeuBmCSVkvJxWQ',
    projectId: 'projeto-teste-d65b6'
};
  
const app = initializeApp(firebaseConfig);

let CONSTANTS = {
    SERVICE_API_URL: 'http://app-zipchat-api-2ef3a0da1900.herokuapp.com/',
    AUTH_API_URL :'http://127.0.0.1:8080/',
    AUTH_CLIENT_ID : 'zipchat-api',
    AUTH_CLIENT_SECRET: 'apFCRbmwETIKR78F4stVqHQNy3SUhK5O'
}

export const httpInstance = axios.create({
    baseURL: CONSTANTS.SERVICE_API_URL,
    headers: {'Access-Control-Allow-Origin': '*'}
});


export const setInstanceAuthorizationToken = (accessToken) => {
    httpInstance.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
}

export const clearInstanceAuthorizationToken= () => {
    httpInstance.defaults.headers.common['Authorization'] = null;
}

export const addUser = (user) => {

    console.log("chegou aqui")

    httpInstance.defaults.headers.common['Authorization'] = "Bearer  " + localStorage.getItem('access_token');;

    console.log(httpInstance.defaults.headers)
    return httpInstance.post('http://127.0.0.1:8080/admin/realms/zipchat/users', {
        "username": user.email,
        "email": user.email,
        "firstName": user.username,
        "lastName": user.username,
        "emailVerified": true,
        "enabled": true,
        "requiredActions": [],
        "groups": []
    })
}


export const getUserList = () => {
    return httpInstance.get("http://127.0.0.1:8080/admin/realms/zipchat/users")
}

export const addPass = (userId, pass) => {
    return httpInstance.put(`http://127.0.0.1:8080/admin/realms/zipchat/users/${userId}/reset-password`, {
        "temporary": false,
        "type": "password",
        "value": pass
    })
}


export const userRegister = async (user) => {
    return new Promise((resolve, reject) => {
        auth({email: "admin", password: "admin"})

        addUser(user)
        .then(response => {
            getUserList()
            .then(response => { 
                let createdUser = response.data.filter(x => x.username == user.username)[0].id
                console.log(createdUser)
                addPass(createdUser, user.password).then(() => {resolve({authSuccess: true})})
            })
        })
    });
}

export const post = (uri, data) => {
    return httpInstance.post(uri, data);
}

export const get = (uri) => {
    return httpInstance.get(uri);
}