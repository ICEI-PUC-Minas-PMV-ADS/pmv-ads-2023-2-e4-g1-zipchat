import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAWlNXeaULFmGg-ExGJFFeuBmCSVkvJxWQ',
    projectId: 'projeto-teste-d65b6'
};
  
const app = initializeApp(firebaseConfig);

export const userRegister = async (user) => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            resolve({authSuccess: true})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject(error)
        });
    });
}