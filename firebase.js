// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb19zgGddktMTc44XNA1h7ATGTx92TQEg",
  authDomain: "auth-firebase-projeto-au-1443d.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-1443d",
  storageBucket: "auth-firebase-projeto-au-1443d.appspot.com",
  messagingSenderId: "557154525046",
  appId: "1:557154525046:web:2a4d029e4d423768c06457",
  measurementId: "G-F86ZED2BZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;