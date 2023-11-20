const APIKEY = '39780097-e878c33e38c89f96fdd6cb704';
const URL = `https://pixabay.com/api/`;
const PerPage = 12;

export function fetchGalleryImg(query, page) {
  return fetch(
    `${URL}?q=${query}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}