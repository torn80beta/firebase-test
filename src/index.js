import { auth } from './js/firebase';
import { monitorAuthState } from './js/ui';
import axios from 'axios';
var throttle = require('lodash.throttle');

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});
// const TMDB_API_KEY = '2312830e6f848d2a7194ede59058ec48';
monitorAuthState();

// const tmdbButtonEl = document.getElementById('tmdb');
const logoutButton = document.getElementById('logout');
const headerWrapperEl = document.querySelector('.header-wrapper');

// tmdbButtonEl.addEventListener('click', onTmdbButtonClick);
logoutButton.addEventListener('click', onLogout);

// async function onTmdbButtonClick() {
//   try {
//     // Create a request token
//     const requestToken = await instance
//       .get(`authentication/token/new?api_key=${TMDB_API_KEY}`)
//       .then(({ data }) => data.request_token)
//       //Ask the user for permission
//       .then(token =>
//         window.open(
//           `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:1234/`
//         )
//       );
//     console.log('Trying to get token...');
//     // console.log(requestToken);
//   } catch (error) {
//     console.log(error);
//   }
// }

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
  // console.log(scrollOffset);
  if (scrollOffset >= scrollBreakpoint) {
    headerWrapperEl.classList.remove('show');
  } else if (scrollOffset <= 0) {
    headerWrapperEl.classList.add('show');
  }
}

/* News */

const searchFormEl = document.getElementById('searchForm');
searchFormEl.addEventListener('submit', onSearch);

// const queryOptions = {
//   q: 'usa',
//   category: 'politics',
//   language: 'en',
//   country: 'us',
// };

class urlCreator {
  constructor() {
    this.pageSize = 20;
    this.page = 1;
    this.refs = this.getRefs();
    this.BASE_URL = 'https://newsapi.org/v2';
    this.NEWS_API_KEY = '3d3bea3840ae4bf7980f0e636498eec6';
  }

  getRefs() {
    const refs = {};
    refs.searchForm = document.getElementById('searchForm');
    refs.searchQuery = document.getElementById('searchForm').searchQuery;
    refs.category = document.getElementById('searchForm').category;
    refs.dateFrom = document.getElementById('searchForm').dateFrom;
    refs.dateTo = document.getElementById('searchForm').dateTo;
    // refs.submitButton = document.getElementById('submitButton');
    return refs;
  }

  getUrl() {
    const query = this.refs.searchQuery.value;
    const category = this.refs.category.value;
    const from = this.refs.dateFrom.value;
    const to = this.refs.dateTo.value;
    const page = this.page;
    const pageSize = this.pageSize;
    const url = `${this.BASE_URL}/everything?category=${category}&q=${query}&from=${from}&to=${to}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`;
    return url;
  }
}

const createUrl = new urlCreator();

function onSearch(e) {
  e.preventDefault();
  const url = createUrl.getUrl();
  console.log(url);
  getNews(url);
}

async function getNews(url) {
  try {
    const news = await instance
      .get(url)
      // .get(`${BASE_URL}/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`)
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

// getNews();

// console.log(createUrl.refs);
// console.log(createUrl.getUrl());
