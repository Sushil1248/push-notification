// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1aPRrUgUqWKlaxAnxnFWB6yvg_OxF_eQ",
  authDomain: "nuxt-push-notification-4e7e9.firebaseapp.com",
  projectId: "nuxt-push-notification-4e7e9",
  storageBucket: "nuxt-push-notification-4e7e9.appspot.com",
  messagingSenderId: "704962228765",
  appId: "1:704962228765:web:8514bccd34c09f6ca0ccf4",
  measurementId: "G-VS229VDDN9"
};

const apps = getApps();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);