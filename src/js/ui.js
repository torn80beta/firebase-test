import { auth } from '../js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const loginStateEl = document.querySelector('.loginState');

function showLoginState(user) {
  loginStateEl.innerHTML = `<p><b>You are logged in as:</b> ${user.displayName}</p>
  <p><b>userID:</b> ${user.uid}</p>
  <p><b>email:</b> ${user.email}</p>`;
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showLoginState(user);
    } else {
      loginStateEl.innerHTML = '<p><b>You are not logged in.</b></p>';
    }
  });
}
