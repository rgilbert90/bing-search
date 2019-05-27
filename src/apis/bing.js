import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.cognitive.microsoft.com/bing/v7.0',
  headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_KEY,}
});