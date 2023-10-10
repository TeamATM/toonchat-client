import axios, { AxiosError } from 'axios';

const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_SERVER_URL || 'http://localhost:3000/api/',
  headers: { 'Content-Type': 'application/json' },
});

clientInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR', error.toJSON());
  }
  return Promise.reject(error);
});

export default clientInstance;
