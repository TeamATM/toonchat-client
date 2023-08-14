import axios, { AxiosError } from 'axios';

const defaultInstance = axios.create({
  baseURL: process.env.SERVER_URL || 'http://localhost:8080/',
});

defaultInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR');
  }
  return Promise.reject(error);
});

export default defaultInstance;
