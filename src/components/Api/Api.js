import axios from 'axios';
const APIKEY = '39780097-e878c33e38c89f96fdd6cb704';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};