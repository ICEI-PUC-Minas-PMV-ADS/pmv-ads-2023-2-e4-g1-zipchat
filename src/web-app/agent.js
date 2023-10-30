import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://localhost:7275/'
});

export const auth = (credentials) => {
    var params = new URLSearchParams();
    params.append('username', credentials.username);
    params.append('password', credentials.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'zipchat-api');
    params.append('client_secret', 'apFCRbmwETIKR78F4stVqHQNy3SUhK5O');
    axios.post('http://127.0.0.1:8080/realms/zipchat/protocol/openid-connect/token', params)
    .then((response) => {
        instance.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
    })
}

export const post = (uri, data) => {
    return instance.post(uri, data);
}
