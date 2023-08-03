// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
}

export default function handler(
  req: NextApiRequestWithId,
  res: NextApiResponse<Data>,
) {
  const characterId = req.query.character_id;

  console.log(characterId);
  res.status(200).json({
    friendShipExp: Math.random() * 200,
    maxFriendShipExp: 200,
    friendShipLv: 0,
  });
}
