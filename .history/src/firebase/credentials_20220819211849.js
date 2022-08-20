// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0q34QHq4ua81P1iraSca638PmSHUrIEQ",
  authDomain: "coderhouse-ecommerce-95706.firebaseapp.com",
  projectId: "coderhouse-ecommerce-95706",
  storageBucket: "coderhouse-ecommerce-95706.appspot.com",
  messagingSenderId: "228893995046",
  appId: "1:228893995046:web:de6dfda038f2301ba036e7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp