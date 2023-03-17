import { auth } from '../js/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { monitorAuthState } from './ui';
import { async } from '@firebase/util';

const logInFormEl = document.getElementById('logInForm');
const logoutButton = document.getElementById('logout');

logInFormEl.addEventListener('submit', userLogIn);
logoutButton.addEventListener('click', onLogout);

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

async function onLogout() {
  const userSignOut = await auth.signOut();
}

monitorAuthState();
