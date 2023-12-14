import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setInstanceAuthorizationToken } from './httpAgent';
import { setAccessToken } from './tokenService'

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAWlNXeaULFmGg-ExGJFFeuBmCSVkvJxWQ',
    projectId: 'projeto-teste-d65b6'
};
  
const app = initializeApp(firebaseConfig);

export const userAutentication = (credentials) => {
    return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;

        setAccessToken(user.accessToken)
        setInstanceAuthorizationToken(user.accessToken)
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(">>> errorCode")
        console.log(error)
        reject({errorCode, errorMessage});
      });


    });
}