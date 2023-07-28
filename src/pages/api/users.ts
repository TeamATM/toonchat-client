import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { success: string } | { error: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    console.log(req.body);

    const {
      email, username, password, confirmPassword,
    } = req.body;
    console.log(email, username, password, confirmPassword);

    if (password !== confirmPassword) {
      res.status(400).json({
        error: '회원가입 실패',
      });
      return;
    }
    res.status(201).json({
      success: '회원가입 성공',
    });
  }
}
