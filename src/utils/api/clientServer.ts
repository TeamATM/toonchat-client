import clientServerInstance from '@/utils/axiosInstance/clientServerInstance';

interface Credentials {
  username: string, password: string
}

interface Socials {
  email: string, provider: string,
}

export const credentialsLoginAPI = async (credentials : Credentials) => {
  const result = await clientServerInstance.post('/users/login', credentials);
  return result.data;
};

export const socialLoginAPI = async (socials: Socials) => {
  const result = await clientServerInstance.post('/users/social-login', socials);
  return result.data;
};
