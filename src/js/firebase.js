// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSt5AK9ankO22Qk0ytWWjzBr4utQCOgH8',
  authDomain: 'fir-test-4ec8b.firebaseapp.com',
  projectId: 'fir-test-4ec8b',
  storageBucket: 'fir-test-4ec8b.appspot.com',
  messagingSenderId: '941413940221',
  appId: '1:941413940221:web:19b2f749a8bacf86113794',
  databaseURL:
    'https://fir-test-4ec8b-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
