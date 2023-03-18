import { auth } from './js/firebase';
import { monitorAuthState } from './js/ui';
import axios from 'axios';
var throttle = require('lodash.throttle');

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});
const API_KEY = '2312830e6f848d2a7194ede59058ec48';
monitorAuthState();

const tmdbButtonEl = document.getElementById('tmdb');
const logoutButton = document.getElementById('logout');
const headerWrapperEl = document.querySelector('.header-wrapper');

tmdbButtonEl.addEventListener('click', onTmdbButtonClick);
logoutButton.addEventListener('click', onLogout);

async function onTmdbButtonClick() {
  try {
    // Create a request token
    const requestToken = await instance
      .get(`authentication/token/new?api_key=${API_KEY}`)
      .then(({ data }) => data.request_token)
      //Ask the user for permission
      .then(token =>
        window.open(
          `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:1234/`
        )
      );
    console.log('Trying to get token...');
    // console.log(requestToken);
  } catch (error) {
    console.log(error);
  }
}

async function onLogout() {
  const userSignOut = await auth.signOut();
}

/* Scroll */

const scrollBreakpoint = window.innerHeight * 0.1;
document.addEventListener('DOMContentLoaded', () => {
  setupScrollListener();
});

function setupScrollListener() {
  window.addEventListener('scroll', throttle(onScroll, 250));
}

function onScroll(e) {
  const scrollOffset = window.scrollY;
  console.log(scrollOffset);
  if (scrollOffset >= scrollBreakpoint) {
    headerWrapperEl.classList.remove('show');
  } else if (scrollOffset <= 0) {
    headerWrapperEl.classList.add('show');
  }
}
