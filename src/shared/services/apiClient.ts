import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

export default apiClient;
