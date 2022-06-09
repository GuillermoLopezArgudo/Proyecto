import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import 'firebase/firestore'
import { getAuth } from "firebase/auth";

//import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCERf2AIMvfs6HnhUGiqLRfoPIsUooWK5Q",
  authDomain: "materiales-cee76.firebaseapp.com",
  projectId: "materiales-cee76",
  storageBucket: "materiales-cee76.appspot.com",
  messagingSenderId: "507387146521",
  appId: "1:507387146521:web:640a6f3745cbf94fed9588"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

