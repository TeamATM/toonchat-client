import type { NextApiRequest, NextApiResponse } from 'next';

interface NextApiRequestWithId extends NextApiRequest {
  query: {
    id: string;
  };
}

type DataSet = {
  'bot-name': string,
  'hash-tag': string,
  'image-url': string,
} | {
  error: string,
}

const characterDataSet : DataSet[] = [
  {
    'bot-name': '이영준',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/leeyj.png',
  }, {
    'bot-name': '김미소',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/kimms.png',
  },
];

export default function handler(
  req: NextApiRequestWithId,
  res: NextApiResponse<DataSet>,
) {
  const {
    query: { id },
  } = req;

  const idNumber = parseInt(id, 10);

  if (Number.isNaN(idNumber) || idNumber < 0 || idNumber >= characterDataSet.length) {
    res.status(400).json({ error: 'Character id가 다름' });
  } else {
    res.status(200).json({ ...characterDataSet[idNumber] });
  }
}
