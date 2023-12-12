import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'access_token'

export const setAccessToken = async (accessToken) =>{
    AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
}

export const getAccessToken = async () =>{
    return AsyncStorage.getItem(ACCESS_TOKEN)
}

export const getDecodedAccessToken = async() =>{
    return jwtDecode(await getAccessToken());
}

export const removeAccessToken = async () =>{
    AsyncStorage.removeItem(ACCESS_TOKEN);
}