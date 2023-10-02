import defaultInstance from '@/utils/axiosInstance/defaultInstance';

interface Credentials {
  email: string, password: string, provider: string
}

interface SignupForm {
  email: string, username: string, password: string, confirmPassword: string
}

interface Socials {
  email: string, provider: string,
}

export const credentialsLoginAPI = async (credentials : Credentials) => {
  const result = await defaultInstance.post('members/login', JSON.stringify(credentials));
  return result.data;
};

export const credentialsSignupAPI = async (signupForm : SignupForm) => {
  if (signupForm.password !== signupForm.confirmPassword) {
    // TODO: 비밀번호 일치 여부 확인 후 실패시 알려주는 UI가 필요함
    return { error: '비밀번호를 다시 확인해주세요.' };
  }

  const sendSignupData = {
    email: signupForm.email,
    name: signupForm.username,
    password: signupForm.password,
    provider: 'Credential',
  };

  const result = await defaultInstance.post('members/signup', JSON.stringify(sendSignupData));
  return result.data;
};

export const socialLoginAPI = async (socials: Socials) => {
  const result = await defaultInstance.post('/users/social-login', socials);
  return result.data;
};
