import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, provider } = req.body;

  const user = findUserByEmailAndProvider(email, provider);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Access Token 발급
  const accessToken = jwt.sign({ email, name: '소울치킨' }, process.env.JWT_SECRET || '', {
    expiresIn: '1h',
  });

  // Refresh Token 발급
  const refreshToken = jwt.sign({ email, name: '소울치킨' }, process.env.REFRESH_TOKEN_SECRET || '', {
    expiresIn: '7d', // 예를 들어 7일 동안 유효합니다.
  });

  // 클라이언트에 Access Token과 Refresh Token을 반환

  res.json({
    email,
    name: '소울치킨',
    accessToken,
    refreshToken,
  });
}

function findUserByEmailAndProvider(email:string, provider:string) {
  return email === 'spinoff01@gmail.com' && provider === 'google';
}
