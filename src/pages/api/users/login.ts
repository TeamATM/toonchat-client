import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { accessToken: string } | { error: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    console.log(req.body);

    const { email, password } = req.body;
    if (email === 'test@test' && password === '1234') {
      res.status(200).json({
        accessToken: 'token',
      });
      return;
    }

    res.status(500).json({ error: '로그인 실패' });
  }
}
