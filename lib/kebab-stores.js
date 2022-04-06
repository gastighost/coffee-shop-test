import fetch from 'node-fetch';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch,
});

const getUrlForKebabStores = (query, latLong, radius) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&radius=${radius}`;
}

export const fetchKebabStores = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'cat',
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  });
  console.log("Photos", photos);
  const url = getUrlForKebabStores("kebab", "52.517172%2C13.388853", "1000");
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
