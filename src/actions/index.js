import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?';
const API_KEY = 'AIzaSyBshkLdJ30M0o9GduqxQ-oSqj2OpFBDFFk';

export const VIDEO_SEARCH = 'VIDEO_SEARCH';

export function videoSearch(term) {
  const url = `${ROOT_URL}part=snippet&key=${API_KEY}&type=video&${term}`;
  const request = axios.get(url);
  
  return {
    type: VIDEO_SEARCH,
    payload: request
  };
}
