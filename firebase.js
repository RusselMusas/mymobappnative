// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXutaAeQbdt6AWL138ybxDAHPuQsOH2UI",
    authDomain: "react-native-project01.firebaseapp.com",
    projectId: "react-native-project01",
    storageBucket: "react-native-project01.appspot.com",
    messagingSenderId: "401251323053",
    appId: "1:401251323053:web:b2cb1ca568a999dcc74a24",
    measurementId: "G-Y50EXX14W3"
};

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

firebase.initializeApp(firebaseConfig);

export default firebase;