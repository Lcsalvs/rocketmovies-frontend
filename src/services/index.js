import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-b0ge.onrender.com'
});