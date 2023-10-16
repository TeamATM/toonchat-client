import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // 여기서 사용자 인증을 수행합니다. (예: 데이터베이스 조회)
  const userIsValid = validateUser(email, password); // 이 함수는 실제 로그인 로직을 구현해야 합니다.

  if (!userIsValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const userData = { email, name: '소울치킨' };
  // Access Token 발급
  const accessToken = jwt.sign({ email, name: '소울치킨' }, process.env.NEXT_PUBLIC_SECRET_KEY || '', {
    expiresIn: '1h',
  });

  // Refresh Token 발급
  const refreshToken = jwt.sign({ email, name: '소울치킨' }, process.env.NEXT_PUBLIC_SECRET_KEY || '', {
    expiresIn: '7d', // 예를 들어 7일 동안 유효합니다.
  });

  const result = {
    ...userData,
    accessToken,
    refreshToken,
  };

  return res.json(result);
}

// DB에서 해시화된 비밀번호와 비교해서 맞는지 확인하는 함수
async function validateUser(email: string, password: string) {
  return email === 'test@test' && bcrypt.compare(password, await bcrypt.hash('1234', 10));
}
