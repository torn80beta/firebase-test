import { auth } from '../js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const loginStateEl = document.querySelector('.loginState');
const loginSignupEl = document.querySelector('.login-signup');
const logoutButtonEl = document.getElementById('logout');

function showLoginState(user) {
  // Additional info. Just paste in to innerHTML
  // <p><b>You are logged in as:</b> ${user.displayName}</p>
  // <p><b>userID:</b> ${user.uid}</p>
  loginStateEl.innerHTML = `
  <p><b>email:</b> ${user.email}</p>`;
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // console.log(user);
      loginSignupEl.classList.add('hidden');
      logoutButtonEl.classList.remove('hidden');
      showLoginState(user);
    } else {
      loginSignupEl.classList.remove('hidden');
      logoutButtonEl.classList.add('hidden');
      loginStateEl.innerHTML = '<p><b>You are not logged in.</b></p>';
    }
  });
}
