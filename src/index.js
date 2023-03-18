import { auth } from './js/firebase';
import { monitorAuthState } from './js/ui';
import axios from 'axios';
var throttle = require('lodash.throttle');

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});
const TMDB_API_KEY = '2312830e6f848d2a7194ede59058ec48';
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
      .get(`authentication/token/new?api_key=${TMDB_API_KEY}`)
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

/* News */

import { NEWS_API_KEY } from './js/news_api/news-api-key';
const BASE_URL = 'https://newsapi.org/v2';

// const queryOptions = {
//   q: 'usa',
//   category: 'politics',
//   language: 'en',
//   country: 'us',
// };

export async function getNews() {
  try {
    const news = await instance
      .get(`${BASE_URL}/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`)
      .then(response => {
        if (response.status) {
          console.log(response.data.articles);
        }
      });
    return news;
  } catch (error) {
    console.log(error);
  }
}

getNews();
