import { auth } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// onAuthStateChanged(auth, user => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

function userCheck() {
  const user = auth.currentUser;
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log('Hello' + user);
  } else {
    // No user is signed in.
    console.log('You are not signed in.');
  }
}

userCheck();
