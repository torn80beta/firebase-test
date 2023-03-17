import { monitorAuthState } from './js/ui';
import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});
const API_KEY = '2312830e6f848d2a7194ede59058ec48';
monitorAuthState();

const tmdbButtonEl = document.getElementById('tmdb');
tmdbButtonEl.addEventListener('click', onTmdbButtonClick);

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
