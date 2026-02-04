// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD02LQbToiWR5TPL-refLFEBz425F9-sgQ",
  authDomain: "new-todo-app-66771.firebaseapp.com",
  databaseURL: "https://new-todo-app-66771-default-rtdb.firebaseio.com",
  projectId: "new-todo-app-66771",
  storageBucket: "new-todo-app-66771.firebasestorage.app",
  messagingSenderId: "624810898776",
  appId: "1:624810898776:web:1d3413311dcd6ef41de12d",
  measurementId: "G-GFK8EHR2XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Global database reference
var db = firebase.database();