/*
Note that I am *not* using Axios because it Promise.all was always returning the same five
responses in Safari, and only Safari. After quite a bit of time trying to resolve the issue,
I discovered that using `fetch` to make the requests yields the expected results.
 */

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const PATHS = {
  detail: 'lookup.php?i=',
  random: 'random.php',
  search: 'search.php?f=',
}

const fetchData = (dataType) => (query = '') => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/${PATHS[dataType]}${query}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject('api error', err);
      });
  });
}

export const fetchDetail = fetchData('detail');
export const fetchRandom = fetchData('random');
export const fetchSearchResults = fetchData('search');
export const fetchDailyFive = () => {
  const requests = [];

  for(let i = 0; i < 5; i++) {
    requests.push(fetchRandom());
  }

  return Promise.all(requests);
};
