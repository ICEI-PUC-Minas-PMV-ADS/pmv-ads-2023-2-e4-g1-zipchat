import { jwtDecode } from "jwt-decode";

const ACCESS_TOKEN = 'access_token'

export const setAccessToken = (accessToken) =>{
    localStorage.setItem(ACCESS_TOKEN, accessToken);
}

export const getAccessToken = () =>{
    return localStorage.getItem(ACCESS_TOKEN)
}

export const getDecodedAccessToken = () =>{
    console.log(getAccessToken())
    return jwtDecode(getAccessToken());
}

export const removeAccessToken = () =>{
    localStorage.removeItem(ACCESS_TOKEN);
}