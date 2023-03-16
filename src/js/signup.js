import { auth } from '../js/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

const userCreationFormEl = document.getElementById('userCreationForm');
userCreationFormEl.addEventListener('submit', newUserRegistration);

async function newUserRegistration(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      sendEmailVerification(auth.currentUser).then(() => {
        console.log('Email verification sent!');
      });
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
}
