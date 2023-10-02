import defaultInstance from '@/utils/axiosInstance/defaultInstance';
import clientInstance from '../axiosInstance/clientInstance';

interface Credentials {
  email: string, password: string, provider: string
}

interface NextSignupForm {
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
}

interface SignupForm {
  email: string, name: string, password: string,
}

interface Socials {
  email: string, provider: string,
}

export const credentialsLoginAPI = async (credentials : Credentials) => {
  const result = await defaultInstance.post('members/login', JSON.stringify(credentials));
  return result.data;
};

export const credentialNextSignupAPI = async ({
  email, username, password, confirmPassword,
} : NextSignupForm) => {
  const sendSignupData = {
    email,
    username,
    password,
    confirmPassword,
  };

  const result = await clientInstance.post('users/signup', JSON.stringify(sendSignupData));
  return result.data;
};

export const credentialsSignupAPI = async ({
  email, name, password,
} : SignupForm) => {
  const sendSignupData = {
    email,
    name,
    password,
    provider: 'Credential',
  };

  const result = await defaultInstance.post('members/signup', JSON.stringify(sendSignupData));
  return result.data;
};

export const socialLoginAPI = async (socials: Socials) => {
  const result = await defaultInstance.post('/users/social-login', socials);
  return result.data;
};
