import axios from 'axios';

const API = axios.create({
  baseURL: 'https://frontend-api-test-nultien.azurewebsites.net/api',
});

export default API;
