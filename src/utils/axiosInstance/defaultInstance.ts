import axios, { AxiosError } from 'axios';

const defaultInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080/',
  headers: { 'Content-Type': 'application/json' },
});

defaultInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR', error.toJSON());
  }
  return Promise.reject(error);
});

export default defaultInstance;
