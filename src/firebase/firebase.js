import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

// import firebase from "firebase";
// import { getStorage } from "firebase/storage";

// const firestorage = getStorage(firebase);

// export const firebaseApp = {
//   firestorage,
// };

// firebaseConfigの値を元にfirebaseの初期化
const app = initializeApp(firebaseConfig);
// アナリティクスの初期化
getAnalytics(app);
