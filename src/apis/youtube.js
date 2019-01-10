import axios from 'axios';

const KEY = 'AIzaSyCNBQ-OcQN12qEBaO_2267P91XO00tugwg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
