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
  const allowedOrigins = ['https://www.webtoonchat.com', 'https://webtoonchat.com'];
  const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';
  if (isLocal) allowedOrigins.push('http://localhost:3000');

  const { origin } = req.headers;

  if (allowedOrigins.includes(origin || '')) {
    res.setHeader('Access-Control-Allow-Origin', origin || '');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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
