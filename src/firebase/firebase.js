// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQySecWNoLR8DED-Kozuequ6321agn8yo",
  authDomain: "okinawa-vue.firebaseapp.com",
  projectId: "okinawa-vue",
  storageBucket: "okinawa-vue.appspot.com",
  messagingSenderId: "746817101518",
  appId: "1:746817101518:web:68499c4782f5b421807a9f",
  measurementId: "G-XEDRJNJ2MK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getStorage(app);

export default firebase;
