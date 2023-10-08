import axios, { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

const chatInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:8080/',
  headers: { 'Content-Type': 'application/json' },
});

chatInstance.interceptors.response.use((response) => response, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('ERROR');
  }
  return Promise.reject(error);
});

chatInstance.interceptors.request.use(
  async (config) => {
    // Next-Auth의 getSession을 사용하여 서버측이나 클라이언트 측에서 세션 정보 가져오기
    const session = await getSession();
    console.log('\n\n\n--------session--------\n\n\n', session);
    // const token = session?.accessToken;
    const token = process.env.EXAMPLE_TOKEN;

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
export default chatInstance;
