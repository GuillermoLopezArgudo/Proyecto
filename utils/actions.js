import {app , db} from './firebase'
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";

const auth = getAuth(app);

export const isUserLogged=()=>{
    let isLogged = false
    auth.onAuthStateChanged((user) => {
        user !== null ? setLogin(true) : setLogin(false);
      });
}

export const getCurrentUser = () => {
    return auth.currentUser
}