// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface NextApiRequestWithId extends NextApiRequest {
  query: {
    character_id: string;
  };
}

type Chat = {
  human: string,
  timestamp: number,
} | {
  bot: string,
  timestamp: number,
}

type Data = { say: string } | { history : Array<Chat>}

export default function handler(
  req: NextApiRequestWithId,
  res: NextApiResponse<Data>,
) {
  const characterId = req.query.character_id;

  if (req.method === 'POST') {
    setTimeout(() => {
      res.status(200).json({ say: Say(characterId) });
    }, Math.random() * 5000);
  } else {
    setTimeout(() => {
      res.status(200).json({ history: history(characterId) });
    }, Math.random() * 5000);
  }
}

const Say = (characterId: string) => {
  if (characterId === '0') {
    return sayList[0][Math.floor(Math.random() * sayList[0].length)];
  }
  return sayList[1][Math.floor(Math.random() * sayList[1].length)];
};

const sayList = {
  0: ['난 이영준. 세상에서 가장 완벽한 남자.', '훗... 나와 대화하고 싶다면 김비서를 통해서 말해줘야겠어.', '(힐끗보고 무시한다) ...'],
  1: ['저는 김미소입니다.', '업무 중이라서 나중에 연락드릴게요!', '(퇴사 생각을 하느라 대답하지 못했습니다.)'],
};

const history = (characterId: string) => {
  if (characterId === '0') {
    return historyList[0];
  }
  return historyList[1];
};

const historyList = {
  0: [
    { human: '안녕', timestamp: 123123 },
    { bot: '반갑군. 난 이영준. 세상에서 가장 완벽한 남자', timestamp: 123124 },
    { human: '대단한걸?', timestamp: 123125 },
    { bot: '(자아도취에 빠진다)', timestamp: 123126 },
  ],
  1: [
    { human: '안녕', timestamp: 123123 },
    { bot: '안녕하세요. 저는 김미소입니다.', timestamp: 123124 },
    { human: '무슨 일을 해?', timestamp: 123125 },
    { bot: '조만간 퇴사할 생각이에요.', timestamp: 123126 },
  ],
};
