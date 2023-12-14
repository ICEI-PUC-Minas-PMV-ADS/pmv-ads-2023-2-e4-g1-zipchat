import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setInstanceAuthorizationToken } from './httpAgent';
import { setAccessToken } from './tokenService'

export const userAutentication = (credentials) => {
    return new Promise((resolve, reject) => {

    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamV0by10ZXN0ZS1kNjViNiIsImF1ZCI6InByb2pldG8tdGVzdGUtZDY1YjYiLCJhdXRoX3RpbWUiOjE3MDIxNDczNjcsInVzZXJfaWQiOiIzcm4zbWVKU2ZiZG90Nm5MdktZcEtoUGNkUkwyIiwic3ViIjoiM3JuM21lSlNmYmRvdDZuTHZLWXBLaFBjZFJMMiIsImlhdCI6MTcwMjE0NzM2NywiZXhwIjoxNzAyMTUwOTY3LCJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0ZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.MVdifKSWwO1gGK4PqFBsL1B1gI398O8AxfvU4cE2tcuOc3qfdjZPzCWrMyh8RJXbaK6CG52NDl_xBXDG_liyjPJIp0Lgr3NQvmJZqW1AtbLz--AsxN_keWUkWY8HUNBck5O1F5C-Jz0fG8cUizX6cLPhAowjbor9AIYGQim5ZQLsfAna-xoU4Zo9cfXiDkl7SoALlORx1mlmmFD78upKNOm0gEogl4-u8-O-56VKmOWiagg3jxXb6ZgMnEWt26-h8YJZ71HMeLTol3PGMgUSU3wX3VrCw5xldAR0Gl7Po9y6E9Jy_iub71F7nqZxqslHoBCX2mw0uXMEhaXONQk34A"
    setAccessToken(token)
    setInstanceAuthorizationToken(token)
    resolve(true);

    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;

    //     setAccessToken(user.accessToken)
    //     setInstanceAuthorizationToken(user.accessToken)
    //     resolve(true);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode)
    //     reject({errorCode, errorMessage});
    //   });


    });
}