import axios from 'axios';

const KEYCLOACK_BASE_URL = "http://localhost:8080"
// const BACKEND_BASE_URL = "http://localhost:5000" // Docker
const BACKEND_BASE_URL = "http://localhost:5039" // Visual Studio

const instance = axios.create();

export const auth = (credentials) => {
    return new Promise((resolve, reject) => {
        var params = new URLSearchParams();
        params.append('username', credentials.username);
        params.append('password', credentials.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'zipchat-api');
        params.append('client_secret', 'apFCRbmwETIKR78F4stVqHQNy3SUhK5O');
        
        axios.post(`${KEYCLOACK_BASE_URL}/realms/zipchat/protocol/openid-connect/token`, params)
            .then((response) => {
                console.log('response')
                console.log(response)
                const access_token = response.data.access_token;
                instance.defaults.headers.common['Authorization'] = "Bearer " + access_token;
                
                localStorage.setItem('access_token', access_token);
                resolve(true); // Autenticação bem-sucedida, retorna true
            })
            .catch((error) => {
                console.error('Erro na autenticação:', error);
                reject(false); // Autenticação falhou, retorna false
            });
    });
}

export const addUser = (user) => {
    return instance.post(`${KEYCLOACK_BASE_URL}/admin/realms/zipchat/users`, {
        "username": user.username,
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
    return instance.get(`${KEYCLOACK_BASE_URL}/admin/realms/zipchat/users`)
}

export const addPass = (userId, pass) => {
    return instance.put(`${KEYCLOACK_BASE_URL}/admin/realms/zipchat/users/${userId}/reset-password`, {
        "temporary": false,
        "type": "password",
        "value": pass
    })
}


export const userRegister = async (user) => {
    return new Promise((resolve, reject) => {
        console.log(user)
        auth({username: "admin", password: "admin"})

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
    return instance.post(`${BACKEND_BASE_URL}/${uri}`, data);
}

export const get = (uri, data) => {
    return instance.get(`${BACKEND_BASE_URL}/${uri}`);
}
