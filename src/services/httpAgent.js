import axios from 'axios';

import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: 'AIzaSyAWlNXeaULFmGg-ExGJFFeuBmCSVkvJxWQ',
    projectId: 'projeto-teste-d65b6'
};
  
const app = initializeApp(firebaseConfig);

export const httpInstance = axios.create({});

let CONSTANTS = {
    SERVICE_API_URL: 'https://localhost:7275/',
    AUTH_API_URL :'http://127.0.0.1:8080/',
    AUTH_CLIENT_ID : 'zipchat-api',
    AUTH_CLIENT_SECRET: 'apFCRbmwETIKR78F4stVqHQNy3SUhK5O'
}

export const setInstanceAuthorizationToken = (accessToken) => {
    httpInstance.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
}

export const clearInstanceAuthorizationToken= () => {
    httpInstance.defaults.headers.common['Authorization'] = null;
}

// if(env.environment == 'Production'){
//     CONSTANTS.SERVICE_API_URL = ''
//     CONSTANTS.AUTH_API_URL = ''
//     CONSTANTS.AUTH_CLIENT_ID = ''
//     CONSTANTS.AUTH_CLIENT_SECRET = ''
// }

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
        console.log("ta aqui")
        console.log(user)
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

    // return new Promise((resolve, reject) => {
    //     var params = new URLSearchParams();
    //     params.append('username', credentials.username);
    //     params.append('password', credentials.password);
    //     params.append('grant_type', 'password');
    //     params.append('client_id', 'zipchat-api');
    //     params.append('client_secret', 'apFCRbmwETIKR78F4stVqHQNy3SUhK5O');
        
    //     axios.post('http://127.0.0.1:8080/realms/zipchat/protocol/openid-connect/token', params)
    //         .then((response) => {
    //             instance.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
    //             resolve(true); // Autenticação bem-sucedida, retorna true
    //         })
    //         .catch((error) => {
    //             console.error('Erro na autenticação:', error);
    //             reject(false); // Autenticação falhou, retorna false
    //         });
    // });
}

export const post = (uri, data) => {
    return httpInstance.post(CONSTANTS.SERVICE_API_URL+uri, data);
}

export const get = (uri) => {
    return httpInstance.get(CONSTANTS.SERVICE_API_URL+uri);
}