import fetch from 'node-fetch';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  fetch,
});

const getUrlForKebabStores = (query, latLong, radius) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&radius=${radius}`;
}

const getListOfKebabStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'kebab',
    page: 1,
    perPage: 10,
    orientation: 'portrait',
  });
  const photoResults = photos.response.results;
  const photosResponse = photoResults.map(photoResult => {
    return photoResult.urls.small
  })
  return photosResponse;
}

export const fetchKebabStores = async (latLong = '52.517121,13.388807') => {
  const [lat, long] = latLong.split(",");
  const photosList = await getListOfKebabStorePhotos();
  const url = getUrlForKebabStores("kebab", `${lat}%2C${long}`, "1000");
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

  return results.map((result, index) => {
    return {
      ...result,
      imgUrl: photosList[index]
    }
  });
}
