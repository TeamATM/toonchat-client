import clientServerInstance from '@/utils/axiosInstance/clientServerInstance';

interface Credentials {
  email: string, password: string, provider: string
}

interface Socials {
  email: string, provider: string,
}

export const credentialsLoginAPI = async (credentials : Credentials) => {
  const result = await clientServerInstance.post('members/login', JSON.stringify(credentials), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return result.data;
};

export const socialLoginAPI = async (socials: Socials) => {
  const result = await clientServerInstance.post('/users/social-login', socials);
  return result.data;
};
