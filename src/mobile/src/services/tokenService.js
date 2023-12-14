import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";
import "core-js/stable/atob";
global.atob = decode;

import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'access_token'

export const setAccessToken = async (accessToken) =>{
    AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
}

export const getAccessToken = async () =>{
    return AsyncStorage.getItem(ACCESS_TOKEN)
}

export const getDecodedAccessToken = async() =>{
    const token = await getAccessToken()
    console.log(">> getDecodedAccessToken")
    const decoded = jwtDecode(token);
    console.log("decoded")
    console.log(decoded)
    return decoded;
}

export const removeAccessToken = async () =>{
    AsyncStorage.removeItem(ACCESS_TOKEN);
}