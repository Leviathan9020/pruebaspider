// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSgjZtyMkT1AS_cW70f1f1Y1hKKorzrDo",
  authDomain: "logintiendaspider.firebaseapp.com",
  projectId: "logintiendaspider",
  storageBucket: "logintiendaspider.appspot.com",
  messagingSenderId: "474759453410",
  appId: "1:474759453410:web:ee16018dd829003f185cbb",
  measurementId: "G-28KWYC1D77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);