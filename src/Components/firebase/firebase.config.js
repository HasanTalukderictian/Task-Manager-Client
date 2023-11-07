// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyGX2Q8Z6xAuvkpiQ6cOjPfLNZrSpwbM",
  authDomain: "task-system-823af.firebaseapp.com",
  projectId: "task-system-823af",
  storageBucket: "task-system-823af.appspot.com",
  messagingSenderId: "725864297051",
  appId: "1:725864297051:web:a41a2f0265d1af4c8c057e",
  measurementId: "G-87WW2BZ4WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;