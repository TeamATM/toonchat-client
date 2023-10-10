import type { NextApiRequest, NextApiResponse } from 'next';

interface NextApiRequestWithId extends NextApiRequest {
  query: {
    character_id: string;
  };
}

type Data = {
  friendShipExp: number,
  maxFriendShipExp: number,
  friendShipLv: number
} | {
  error: string
}

export default function handler(
  req: NextApiRequestWithId,
  res: NextApiResponse<Data>,
) {
  // 클라이언트에서 보낸 accessToken을 받습니다.
  const accessToken = req.headers.authorization?.split(' ')[1];

  // accessToken이 없거나 유효하지 않은 경우 에러 응답을 반환합니다.
  if (!accessToken) {
    return res.status(401).json({ error: 'Invalid or missing access token.' });
  }

  // accessToken이 올바른 경우 요청을 처리합니다.
  return res.status(200).json({
    friendShipExp: Math.random() * 200,
    maxFriendShipExp: 200,
    friendShipLv: 0,
  });
}
