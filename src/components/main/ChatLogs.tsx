import { css } from '@emotion/react';
import FriendWrapper from './friend/FriendWrapper';
import FriendInfo from './friend/FriendInfo';

const ChatLogs = () => (
  <section css={chatLogsWrapperCSS}>
    {chatLogDataSet.map((data, index) => (
      // TODO: 여러 캐릭터가 있을 때 스크롤이 가능한지 확인하기 위함
      <FriendWrapper
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        characterId={data.characterId}
      >
        <FriendInfo
          characterName={data.characterName}
          message={data.message}
          imageUrl={data.imageUrl}
        />
      </FriendWrapper>
    ))}
  </section>
);

export default ChatLogs;

const chatLogsWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 6px;
`;

// TODO: 이 부분은 API에서 떼와야하는 부분
const chatLogDataSet = [
  {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '(자아도취에 빠진다)',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '조만간 퇴사할 생각이에요.',
    imageUrl: '/kimms.png',
  }, {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '(자아도취에 빠진다))',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '조만간 퇴사할 생각이에요.',
    imageUrl: '/kimms.png',
  }, {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '(자아도취에 빠진다)',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '조만간 퇴사할 생각이에요.',
    imageUrl: '/kimms.png',
  }, {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '(자아도취에 빠진다)',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '조만간 퇴사할 생각이에요.',
    imageUrl: '/kimms.png',
  }, {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '(자아도취에 빠진다)',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    message: '조만간 퇴사할 생각이에요.',
    imageUrl: '/kimms.png',
  },
];
