import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { httpInstance } from './httpAgent';

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