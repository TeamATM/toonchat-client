// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  say: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  setTimeout(() => {
    res.status(200).json({ say: jySay() });
  }, Math.random() * 3000);
}

const jySay = () => {
  const yjSayList = ['난 이영준. 세상에서 가장 완벽한 남자.', '훗... 나와 대화하고 싶다면 김비서를 통해서 말해줘야겠어.', '(힐끗보고 무시한다) ...'];
  return yjSayList[Math.floor(Math.random() * 3)];
};