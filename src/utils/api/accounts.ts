import clientInstance from '@/utils/axiosInstance/clientInstance';
import ssrInstance from '@/utils/axiosInstance/ssrInstance';

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

interface SocialLoginForm {
  email: string,
  password: null,
  provider: string,
  name: string
}

export const credentialsLoginAPI = async (credentials : Credentials) => {
  const result = await ssrInstance.post('members/login', credentials);
  return result.data;
};

export const socialLoginAPI = async (socialLoginForm : SocialLoginForm) => {
  const result = await ssrInstance.post('members/social-login', socialLoginForm);
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

  const result = await clientInstance.post('users/signup', sendSignupData);
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

  const result = await ssrInstance.post('members/signup', sendSignupData);

  return result.data;
};

export const refreshAccessToken = async (refreshToken: string) => {
  const result = await ssrInstance.post('members/refreshtoken', { refreshToken });
  return result.data;
};

export const logOutAPI = async (refreshToken: string) => {
  const result = await ssrInstance.post('members/logout', { refreshToken });
  return result.data;
};
