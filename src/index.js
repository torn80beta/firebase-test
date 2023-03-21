import { auth } from './js/firebase';
import { monitorAuthState } from './js/ui';
import axios from 'axios';
var throttle = require('lodash.throttle');

export const instance = axios.create({
  // baseURL: 'https://newsapi.org/v2',
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
    this.BASE_URL = 'https://newsapi.org/v2/top-headlines';
    this.NEWS_API_KEY = '3d3bea3840ae4bf7980f0e636498eec6';
  }

  getRefs() {
    const refs = {};
    refs.searchForm = document.getElementById('searchForm');
    refs.searchQuery = document.getElementById('searchForm').searchQuery;
    refs.category = document.getElementById('searchForm').category;
    refs.dateFrom = document.getElementById('searchForm').dateFrom;
    refs.dateTo = document.getElementById('searchForm').dateTo;
    return refs;
  }

  getUrl() {
    const query = this.refs.searchQuery.value;
    const category = this.refs.category.value;
    const from = this.refs.dateFrom.value;
    const to = this.refs.dateTo.value;
    const page = this.page;
    const pageSize = this.pageSize;
    const url = `${this.BASE_URL}?category=${category}&q=${query}&from=${from}&to=${to}&pageSize=${pageSize}&page=${page}&apiKey=${this.NEWS_API_KEY}`;
    return url;
  }
}

const urlGetter = new urlCreator();

function onSearch(e) {
  e.preventDefault();
  console.log(urlGetter.getUrl());
  getNews(urlGetter.getUrl());
}

async function getNews(url) {
  try {
    const news = await instance.get(url).then(response => {
      if (response.status) {
        console.log(response.data.articles);
      }
    });
    return news;
  } catch (error) {
    console.log(error);
  }
}

/* Firebase Realtime Storage test */
import { app } from './js/firebase';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  update,
} from 'firebase/database';

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// console.log(database);

async function writeUserData(userId, name, email) {
  const db = getDatabase();
  const data = await set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    // profile_picture: imageUrl,
  });
  console.log(data);
  return data;
}

// writeUserData('222222', 'user2', 'user2@gmail.com');
// writeUserData('123123', 'user1', 'user1@gmail.com');

async function getUserData(userId) {
  const dbRef = ref(getDatabase());
  const data = await get(child(dbRef, `user-news/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

getUserData('222222');

function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'news')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/news/' + newPostKey] = postData;
  updates['/user-news/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}

// writeNewPost('222222', 'user2', 'News picture', 'News title', 'News body');
