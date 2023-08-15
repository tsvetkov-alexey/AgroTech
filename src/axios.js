import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64db23ad593f57e435b08364.mockapi.io',
});

export default instance;
