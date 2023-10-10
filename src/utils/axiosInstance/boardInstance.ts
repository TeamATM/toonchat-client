import axios, { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

const boardInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080/'}api/boards/`,
  // headers: { 'Content-Type': 'application/json' },
});

boardInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  console.error('ERROR', error.toJSON());
  if (error.response && error.response.status === 401) {
    console.error('ERROR', error.toJSON());
  }
  return Promise.reject(error);
});

boardInstance.interceptors.request.use(
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

export default boardInstance;
