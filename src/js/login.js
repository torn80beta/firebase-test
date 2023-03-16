import { auth } from '../js/firebase';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const logInFormEl = document.getElementById('logInForm');
logInFormEl.addEventListener('submit', userLogIn);

async function userLogIn(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user.auth.currentUser.email);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  //   setPersistence(auth, browserSessionPersistence)
  //     .then(() => {
  //       // Existing and future Auth states are now persisted in the current
  //       // session only. Closing the window would clear any existing state even
  //       // if a user forgets to sign out.
  //       // ...
  //       // New sign-in will be persisted with session persistence.
  //       return signInWithEmailAndPassword(auth, email, password);
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       console.log(errorMessage);
  //     });
}
console.log(auth);
for (const entry in auth) {
  console.log(entry);
}

async function userCheck() {
  // const user = auth.currentUser;
  const user = await auth.currentUser;
  //   console.log(user.auth.currentUser.email);
  console.log(user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log('Hello' + user);
  } else {
    // No user is signed in.
    console.log('You are not signed in.' + user);
  }
  return user;
}

// userCheck().then(user => console.log(user));
