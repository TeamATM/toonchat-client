import axios, { AxiosError } from 'axios';

const ssrInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080/'}api/`,
});

ssrInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  console.error('ERROR', error.toJSON());
  if (error.response && error.response.status === 401) {
    console.error('ERROR', error.toJSON());
  }
  return Promise.reject(error);
});

ssrInstance.interceptors.request.use(
  async (config) => {
    const token = process.env.SSR_TOKEN;

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default ssrInstance;
