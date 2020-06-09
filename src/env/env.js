import axios from 'axios';

const api = axios.create({
  baseURL: 'https://okoafarmer.herokuapp.com/api'
});

export default api;
