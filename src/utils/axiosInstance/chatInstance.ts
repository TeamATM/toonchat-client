import axios, { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

const chatInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:8080/',
  headers: { 'Content-Type': 'application/json' },
});

chatInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR', error.toJSON());
  }
  return Promise.reject(error);
});

chatInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    const token = session?.accessToken;

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
export default chatInstance;
