import { credentialsSignupAPI } from '@/utils/api/accounts';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
  };
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const {
    email, username, password, confirmPassword,
  } = req.body;

  // TODO: 여기에서 유효성 검사를 하면 좋을 것 같음
  if (!email || !username || !password || password !== confirmPassword) {
    return res.status(401).end();
  }

  const sendSignupData = {
    email,
    name: username,
    password,
  };

  const result = await credentialsSignupAPI(sendSignupData);
  return res.json(result);
}
