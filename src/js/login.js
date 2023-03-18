import { auth } from '../js/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { monitorAuthState } from './ui';
import { async } from '@firebase/util';

const logInFormEl = document.getElementById('logInForm');
logInFormEl.addEventListener('submit', userLogIn);

async function userLogIn(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error.message);
  }
}

monitorAuthState();
