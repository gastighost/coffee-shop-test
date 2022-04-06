import fetch from 'node-fetch';
export const fetchKebabStores = async () => {
  const url = 'https://api.foursquare.com/v3/places/search?query=kebab&ll=52.517172%2C13.388853&radius=1000';
  const options = {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  };
  const results =  await fetch(url, options)
    .then(res => res.json())
    .then(json => json.results)
    .catch(err => console.error('error:' + err))

    return results;
}
