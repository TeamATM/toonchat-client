import { css } from '@emotion/react';
import { FC, MouseEvent, useState } from 'react';
import ChatIcon from '@/components/icons/ChatIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';
import color from '@/styles/color';
import Toast from '@/components/common/toast/Toast';
import ProfileRouteWrapper from './routeButtons/ProfileRouteWrapper';

interface RouteProps {
  characterId: string
}

interface ToastMessage {
  key: number;
  message: string;
}

const ProfileRouteButtons:FC<RouteProps> = ({ characterId }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);
  const [toastKey, setToastKey] = useState(0);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToastKey(toastKey + 1);
    setToastMessages([
      ...toastMessages,
      { key: toastKey, message: '커뮤니티는 추후에 지원될 예정입니다.' },
    ]);
  };

  const handleToastClose = (key: number) => {
    setToastMessages(toastMessages.filter((toast) => toast.key !== key));
  };

  return (
    <div css={ButtonsWrapperCSS}>
      <ProfileRouteWrapper linkUrl={`/chats/${characterId}`} color={color.black}>
        <ChatIcon color={color.black} />
        chat
      </ProfileRouteWrapper>
      {/* TODO: community가 생기면 아래 버튼 핸들링, URL등을 바꿔야합니다. */}
      <button onClick={clickHandler} css={css`border: none; background: none;`} type="button">
        <ProfileRouteWrapper linkUrl={`/profile/friends/${characterId}`} color={color.black}>
          <CommunityIcon color={color.black} />
          Community
        </ProfileRouteWrapper>
      </button>
      {toastMessages.map((toast) => (
        <Toast
          key={toast.key}
          message={toast.message}
          handleClose={() => handleToastClose(toast.key)}
        />
      ))}
    </div>
  );
};

export default ProfileRouteButtons;

const ButtonsWrapperCSS = css`
  width:100%;
  padding-top:3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;
`;
