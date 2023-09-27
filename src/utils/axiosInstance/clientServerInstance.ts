import axios, { AxiosError } from 'axios';

const clientServerInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_SERVER_URL || 'http://localhost:3000/',
});

clientServerInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR');
  }
  return Promise.reject(error);
});

export default clientServerInstance;
