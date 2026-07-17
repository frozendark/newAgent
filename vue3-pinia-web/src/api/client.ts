import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error('Unauthorized request');
        }
      }
      if (status >= 500) {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error('Server error:', error.response.data);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
