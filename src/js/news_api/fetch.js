import { async } from '@firebase/util';
import { NEWS_API_KEY } from './news-api-key';
const NewsAPI = require('newsapi');
export const newsApi = new NewsAPI(NEWS_API_KEY);

export async function getNews(newsApi) {
  const news = await newsApi.v2
    .topHeadlines({
      q: 'trump',
      category: 'politics',
      language: 'en',
      country: 'us',
    })
    .then(response => {
      console.log(response);
      /*
    {
      status: "ok",
      articles: [...]
    }
  */
    });
  return news;
}

// export async function getNews(newsApi) {
//   const news = await newsApi.v2
//     .topHeadlines({
//       q: 'trump',
//       category: 'politics',
//       language: 'en',
//       country: 'us',
//     })
//     .then(response => {
//       console.log(response);
//       /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//     });
//   return news;
// }
