import { auth } from '../js/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
      console.log(user);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function userCheck() {
  const user = auth.currentUser;
  console.log(user);
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
