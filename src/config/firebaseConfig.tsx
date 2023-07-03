import { initializeApp } from "firebase/app";
import { getAuth, setPersistence,  } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCL99sRLkAxC0vl-8Uv027xixU_BhDGJjU",
  authDomain:
    "574851944745-q91sqfrslm1afbtru7n6gcbvjss4ssmk.apps.googleusercontent.com",
  databaseURL:
    "574851944745-q91sqfrslm1afbtru7n6gcbvjss4ssmk.apps.googleusercontent.com",
  projectId: "clinica-velasquez-app",
  storageBucket: "clinica-velasquez-app.appspot.com",
  messagingSenderId: "101169782200555935673",
  appId: "1:574851944745:android:87989e9e68574ddb686738",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
setPersistence(auth,getReactNativePersistence(AsyncStorage))

export { auth, db, storage };





