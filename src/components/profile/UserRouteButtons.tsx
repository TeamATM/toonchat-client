import { css } from '@emotion/react';
import color from '@/styles/color';
import { signOut } from 'next-auth/react';
import Toast from '@/components/common/toast/Toast';
import { useState } from 'react';
import LogOutIcon from '../icons/LogoutIcon';
import ProfileSettingIcon from '../icons/ProfileSettingIcon';

const ProfileRouteButtons = () => {
  const [toastMessage, setToastMessage] = useState('');

  // TODO: 미들웨어로 로그인 여부를 컨트롤할 예정
  // TODO: 백엔드 로그아웃 로직이 변경되고 있는 중이라 아직 쓸 수 없는 코드가 있음
  // const { data: session }: any = useSession();
  const signOutHandler = () => {
    // logOutAPI(session?.accessToken);
    signOut({ callbackUrl: '/' });
  };

  const profileEditHandler = () => {
    setToastMessage('개인 프로필 수정은 추후에 제공될 예정입니다. :)');
  };

  const handleToastClose = () => {
    setToastMessage('');
  };

  return (
    <>
      <div css={ButtonsWrapperCSS}>
        <button onClick={profileEditHandler} css={buttonCSS} type="button">
          <ProfileSettingIcon color={color.black} />
          Profile Edit
        </button>
        <button onClick={signOutHandler} css={buttonCSS} type="button">
          <LogOutIcon color={color.black} />
          Log Out
        </button>
      </div>
      {
        toastMessage
          ? <Toast message={toastMessage} handleClose={handleToastClose} />
          : null
      }
    </>
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

const buttonCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${color.black};
  background-color: ${color.white};
  border: none;

`;
