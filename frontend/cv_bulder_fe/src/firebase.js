// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALCJQATOrVGwiT2CSmoJfE6kt7d0imWTg",
  authDomain: "resumebuilder-cfdfc.firebaseapp.com",
  projectId: "resumebuilder-cfdfc",
  storageBucket: "resumebuilder-cfdfc.appspot.com",
  messagingSenderId: "993435455276",
  appId: "1:993435455276:web:df32d2881e80429244a689",
  measurementId: "G-DPCCBH1EJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export {db}
