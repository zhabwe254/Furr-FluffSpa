// src/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Adjust this URL based on your backend server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
