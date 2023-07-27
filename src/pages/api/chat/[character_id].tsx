// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface NextApiRequestWithId extends NextApiRequest {
  query: {
    character_id: string;
  };
}

type Data = {
  say: string
}

export default function handler(
  req: NextApiRequestWithId,
  res: NextApiResponse<Data>,
) {
  const characterId = req.query.character_id;

  setTimeout(() => {
    res.status(200).json({ say: Say(characterId) });
  }, Math.random() * 5000);
}

const Say = (characterId: string) => {
  if (characterId === '0') {
    return sayList['0'][Math.floor(Math.random() * sayList[0].length)];
  }
  return sayList[1][Math.floor(Math.random() * sayList[1].length)];
};

const sayList = {
  0: ['난 이영준. 세상에서 가장 완벽한 남자.', '훗... 나와 대화하고 싶다면 김비서를 통해서 말해줘야겠어.', '(힐끗보고 무시한다) ...'],
  1: ['저는 김미소입니다.', '업무 중이라서 나중에 연락드릴게요!', '(퇴사 생각을 하느라 대답하지 못했습니다.)'],
};
