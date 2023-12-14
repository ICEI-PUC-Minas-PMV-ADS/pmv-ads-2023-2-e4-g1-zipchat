import axios from 'axios';

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

// export const post = (uri, data) => {
//     return httpInstance.post(uri, data);
// }

export const post = async (uri, data) => {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.SERVICE_API_URL}${uri}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response=> response.json())
        .then(json => {
            console.log("))))))) post")
            console.log(json)
            resolve(json);
        });
    });
}

export const get = async (uri) => {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.SERVICE_API_URL}${uri}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(response=> response.json())
        .then(json => {
            console.log("))))))) get")
            console.log(json)
            resolve(json);
        });
    });
}