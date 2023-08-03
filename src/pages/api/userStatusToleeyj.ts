// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  friendShipExp: number,
  maxFriendShipExp: number,
  friendShipLv: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    friendShipExp: 100,
    maxFriendShipExp: 200,
    friendShipLv: 0,
  });
}
