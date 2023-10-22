import { css } from '@emotion/react';
import CommunityIcon from '@/components/icons/CommunityIcon';
import color from '@/styles/color';
import { signOut } from 'next-auth/react';
import ProfileRouteWrapper from './routeButtons/ProfileRouteWrapper';
import SettingIcon from '../icons/SettingIcon';

const ProfileRouteButtons = () => {
  const signOutHandler = () => {
    signOut();
  };
  return (
    <div css={ButtonsWrapperCSS}>
      <ProfileRouteWrapper linkUrl="/chats/1" color={color.black}>
        <SettingIcon color={color.black} />
        Profile Edit
      </ProfileRouteWrapper>
      <button onClick={signOutHandler} css={buttonCSS} type="button">
        <CommunityIcon color={color.black} />
        Log Out
      </button>
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

const buttonCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${color.black};
  background-color: ${color.white};
  border: none;

`;
