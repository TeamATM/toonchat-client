import { css } from '@emotion/react';
import HomeIcon from '../icons/HomeIcon';
import ChatIcon from '../icons/ChatIcon';
import CommunityIcon from '../icons/CommunityIcon';
import ProfileIcon from '../icons/ProfileIcon';
import NavButtonWrapper from './NavButton/NavButtonWrapper';

const BottomNavigation = () => (
  <div css={BottomNavCSS}>
    <NavButtonWrapper linkUrl="/user">
      <HomeIcon />
      Home
    </NavButtonWrapper>
    <NavButtonWrapper linkUrl="/chat">
      <ChatIcon />
      Chat
    </NavButtonWrapper>
    <NavButtonWrapper linkUrl="/user">
      <CommunityIcon />
      Community
    </NavButtonWrapper>
    <NavButtonWrapper linkUrl="/user">
      <ProfileIcon />
      Profile
    </NavButtonWrapper>
  </div>
);

export default BottomNavigation;

const BottomNavCSS = css`
  position: fixed;
  bottom: 0;
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;
