import { auth } from '../js/firebase';
import { onAuthStateChanged, signInAnonymously, getAuth } from 'firebase/auth';
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
      const uid = user.uid;
      // console.log(user);
      loginSignupEl.classList.add('hidden');
      logoutButtonEl.classList.remove('hidden');
      showLoginState(user);
      console.log('UserID: ' + uid + ' User registered: ' + !user.isAnonymous);
    } else {
      anonymousLogin();
      loginSignupEl.classList.remove('hidden');
      logoutButtonEl.classList.add('hidden');
      loginStateEl.innerHTML = '<p><b>You are not logged in.</b></p>';
    }
  });
}

async function anonymousLogin() {
  const auth = getAuth();
  const userCredential = await signInAnonymously(auth)
    .then(() => {
      // Signed in..
      console.log(userCredential);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}
